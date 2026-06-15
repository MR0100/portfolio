#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// Generate the downloadable résumé PDF from the LIVE /resume/print page.
//
// Why this (and not browser "Save as PDF"): the résumé content is fully dynamic
// (rendered from src/data/profile.ts). This script renders that same live page
// to a PDF with FIXED, controlled settings — A4, the print stylesheet's @page
// margins, no browser headers/footers — so the download is ALWAYS the clean,
// borderless, ~2-page reference layout, identical every time, regardless of a
// visitor's browser print settings.
//
// Dynamic guarantee: it runs as the first step of `npm run build`, so every
// deploy regenerates the PDF from the current data — edit profile.ts and the
// downloadable résumé updates everywhere automatically. No hand-maintained file.
//
// Resilience: Chrome path is overridable via CHROME_PATH / PUPPETEER_EXECUTABLE_PATH.
// If no Chrome is found (e.g. a Linux CI without one) the script SKIPS with a
// warning and exits 0 — the last committed PDF still ships, so a build never
// breaks over the résumé.
//
// Usage:
//   npm run resume:pdf            # standalone (spawns its own dev server)
//   CHROME_PATH=/path/to/chrome npm run resume:pdf
// ─────────────────────────────────────────────────────────────────────────────

import puppeteer from "puppeteer-core";
import { writeFile, access, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { setTimeout as wait } from "node:timers/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, "..");

const REUSE_PORT = 4321; // reuse a running dev server if present
const SPAWN_PORT = 4329; // else spawn our own on a high port
const OUT = resolve(PROJECT_ROOT, "public/resume/mitul-vaghasiya-resume.pdf");

// Overridable for non-macOS / CI. Falls back to the standard macOS Chrome path.
const CHROME =
  process.env.CHROME_PATH ||
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const log = (m) => console.log(`[resume:pdf] ${m}`);
const err = (m) => console.error(`[resume:pdf] ✗ ${m}`);

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function probe(port) {
  try {
    const res = await fetch(`http://localhost:${port}/resume/print`, { method: "HEAD" });
    return res.ok || res.status === 404;
  } catch {
    return false;
  }
}

async function spawnDev() {
  log(`Spawning astro dev on :${SPAWN_PORT}…`);
  const proc = spawn(
    "npx",
    ["astro", "dev", "--port", String(SPAWN_PORT), "--host", "127.0.0.1"],
    { cwd: PROJECT_ROOT, stdio: ["ignore", "pipe", "pipe"] }
  );
  proc.stderr.on("data", (d) => process.stderr.write(`[astro] ${d}`));
  for (let i = 0; i < 30; i++) {
    await wait(1000);
    if (await probe(SPAWN_PORT)) return proc;
  }
  proc.kill();
  throw new Error(`astro dev failed to come up on :${SPAWN_PORT} after 30s`);
}

async function main() {
  if (!(await fileExists(CHROME))) {
    err(`Google Chrome not found at ${CHROME}.`);
    err(`Set CHROME_PATH=/path/to/chrome (or install Chrome) and re-run.`);
    err(`Skipping PDF regeneration — the committed public/resume PDF still ships.`);
    process.exit(0); // non-fatal: never block a build over the PDF
  }

  let port = REUSE_PORT;
  let spawnedProc = null;
  if (!(await probe(REUSE_PORT))) {
    spawnedProc = await spawnDev();
    port = SPAWN_PORT;
  } else {
    log(`Reusing dev server on :${REUSE_PORT}`);
  }

  const url = `http://localhost:${port}/resume/print`;
  log(`Source: ${url}`);
  log(`Output: ${OUT.replace(PROJECT_ROOT + "/", "")}`);

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    // Render at PRINT layout — the @media print stylesheet collapses the screen
    // chrome (floating dock, card frame, shadow) and sets A4 page geometry.
    await page.emulateMediaType("print");
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30_000 });

    log(`Rendering PDF…`);
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true, // honor @page { size: A4; margin: … } from the stylesheet
      displayHeaderFooter: false, // NO browser URL/date headers — keeps it clean + tight
      margin: { top: 0, right: 0, bottom: 0, left: 0 }, // @page owns the margins
    });

    await mkdir(dirname(OUT), { recursive: true });
    await writeFile(OUT, pdf);
    const kb = (pdf.length / 1024).toFixed(0);
    log(`✓ Wrote ${kb} KB to ${OUT.replace(PROJECT_ROOT + "/", "")}`);
  } finally {
    await browser.close();
    if (spawnedProc) {
      spawnedProc.kill();
      await wait(200);
    }
  }
}

main().catch((e) => {
  err(e.message || String(e));
  process.exit(1);
});
