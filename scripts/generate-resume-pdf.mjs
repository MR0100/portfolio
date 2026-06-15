#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// Auto-generate the ATS-safe resume PDF from the live /resume/print page.
//
// Why: the "Save as PDF" / "Download PDF" buttons across the site point at a
// static file in public/resume/. Without this script that file goes stale the
// moment any resume content changes. This rebuilds the PDF straight from the
// rendered page using headless Chrome so the download is always in sync.
//
// How: connects to a local Astro server (dev or preview) on $PORT, navigates
// to /resume/print, runs page.pdf() with A4 + zero margins (the print
// stylesheet already owns the page margins), writes the result to
// public/resume/mitul-vaghasiya-resume.pdf.
//
// Usage:
//   npm run resume:pdf         # uses already-running dev server on :4321
//   npm run resume:pdf -- 4322 # custom port
//
// Requires the dev server to already be running (npm run dev). If it's not,
// the script prints a friendly error and exits.
// ─────────────────────────────────────────────────────────────────────────────

import puppeteer from "puppeteer-core";
import { writeFile, access } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { setTimeout as wait } from "node:timers/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, "..");

// If a dev server is already running on 4321 we'll reuse it; otherwise we
// spawn a one-off preview on a high port so this script works standalone
// (CI, postbuild, fresh checkouts).
const REUSE_PORT = 4321;
const SPAWN_PORT = 4329;
const OUT = resolve(PROJECT_ROOT, "public/resume/mitul-vaghasiya-resume.pdf");

// Override Chrome's path for non-macOS / CI use:
//   CHROME_PATH=/usr/bin/google-chrome npm run resume:pdf
const CHROME =
  process.env.CHROME_PATH ||
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const log = (msg) => console.log(`[resume:pdf] ${msg}`);
const err = (msg) => console.error(`[resume:pdf] ✗ ${msg}`);

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

// Spawn `astro dev` on SPAWN_PORT and wait until it responds. Returns the
// child process so the caller can kill it on exit.
async function spawnDev() {
  log(`Spawning astro dev on :${SPAWN_PORT}…`);
  const proc = spawn(
    "npx",
    ["astro", "dev", "--port", String(SPAWN_PORT), "--host", "127.0.0.1"],
    { cwd: PROJECT_ROOT, stdio: ["ignore", "pipe", "pipe"] }
  );
  // Forward errors to the user — silent failures here are painful to debug.
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
    process.exit(0); // non-fatal: never block a build/deploy over the PDF
  }

  // Prefer reusing whatever's already on 4321 — saves ~3s startup.
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

  log(`Launching headless Chrome…`);
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    // Render at print layout — the print stylesheet collapses screen
    // affordances (floating bar, page shadow) and sets A4 page geometry.
    await page.emulateMediaType("print");
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30_000 });

    log(`Rendering PDF…`);
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      // @page { size: A4; margin: 0 } inside the print stylesheet handles
      // margins; the .page container's padding owns the visible inset.
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    await writeFile(OUT, pdf);
    const kb = (pdf.length / 1024).toFixed(0);
    log(`✓ Wrote ${kb} KB to ${OUT.replace(PROJECT_ROOT + "/", "")}`);
  } finally {
    await browser.close();
    if (spawnedProc) {
      spawnedProc.kill();
      // Give it a beat to release the port if anything else follows.
      await wait(200);
    }
  }
}

main().catch((e) => {
  err(e.message || String(e));
  process.exit(1);
});
