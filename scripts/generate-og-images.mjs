#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// Per-project Open Graph cards — one 1200×630 share image per case study,
// rendered from the SAME frontmatter the page uses (title, one-liner, employer,
// period, category, accent). So when a hiring manager forwards a specific
// project on LinkedIn/Slack, the unfurl shows THAT project, not a generic card.
//
// Pure data → SVG → PNG via the already-installed sharp (no headless browser).
// Runs as a build step, so cards stay in sync with content edits.
//
//   npm run og:images
// ─────────────────────────────────────────────────────────────────────────────

import sharp from "sharp";
import { readdir, readFile, mkdir } from "node:fs/promises";
import { resolve, dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const CONTENT = resolve(ROOT, "src/content/work");
const OUT = resolve(ROOT, "public/og");

const ACCENT_DEFAULT = "#8cc6fa";
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Minimal frontmatter scalar reader (avoids a YAML dep for the few fields we need).
function field(fm, name) {
  const m = fm.match(new RegExp(`^${name}:\\s*(.+?)\\s*$`, "m"));
  if (!m) return "";
  return m[1].replace(/^["']|["']$/g, "");
}

function wrap(text, max, maxLines) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = "";
  for (const w of words) {
    const test = cur ? cur + " " + w : w;
    if (test.length <= max) cur = test;
    else { if (cur) lines.push(cur); cur = w; if (lines.length >= maxLines) break; }
  }
  if (cur && lines.length < maxLines) lines.push(cur);
  if (lines.length > maxLines) lines.length = maxLines;
  const consumed = lines.join(" ").split(/\s+/).filter(Boolean).length;
  if (consumed < words.length) lines[lines.length - 1] += "…";
  return lines;
}

function card({ title, oneLiner, employer, period, category, accent }) {
  const a = /^#[0-9a-fA-F]{3,8}$/.test(accent) ? accent : ACCENT_DEFAULT;
  const titleLines = wrap(title, 24, 2);
  const lede = wrap(oneLiner, 62, 2);
  const eyebrow = ["CASE STUDY", category].filter(Boolean).join("  ·  ").toUpperCase();
  const footRight = [employer, period].filter(Boolean).join("  ·  ");

  const tStart = 250, tStep = 78;
  const titleSvg = titleLines.map((l, i) => `<text x="90" y="${tStart + i * tStep}">${esc(l)}</text>`).join("");
  const lStart = tStart + titleLines.length * tStep + 18, lStep = 44;
  const ledeSvg = lede.map((l, i) => `<text x="90" y="${lStart + i * lStep}">${esc(l)}</text>`).join("");

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#070c16"/><stop offset="1" stop-color="#0d1526"/>
  </linearGradient></defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="10" height="630" fill="${a}"/>
  <text x="90" y="135" font-family="Helvetica, Arial, sans-serif" font-size="21" font-weight="600" letter-spacing="5" fill="#7e8a9c">${esc(eyebrow)}</text>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="62" font-weight="700" fill="#f4f4f5">${titleSvg}</g>
  <g font-family="Helvetica, Arial, sans-serif" font-size="29" fill="#9aa6b4">${ledeSvg}</g>
  <circle cx="96" cy="560" r="6" fill="${a}"/>
  <text x="114" y="568" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="600" fill="#f4f4f5">Mitul Vaghasiya</text>
  <text x="1110" y="568" font-family="Helvetica, Arial, sans-serif" font-size="21" fill="#7e8a9c" text-anchor="end">${esc(footRight)}</text>
</svg>`;
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const files = (await readdir(CONTENT)).filter((f) => f.endsWith(".mdx"));
  let n = 0;
  for (const file of files) {
    const slug = basename(file, ".mdx");
    const raw = await readFile(join(CONTENT, file), "utf8");
    const fm = (raw.match(/^---\n([\s\S]*?)\n---/) || [, ""])[1];
    const svg = card({
      title: field(fm, "title") || slug,
      oneLiner: field(fm, "oneLiner"),
      employer: field(fm, "employer"),
      period: field(fm, "period"),
      category: field(fm, "category"),
      accent: field(fm, "accent"),
    });
    await sharp(Buffer.from(svg)).png().toFile(join(OUT, `${slug}.png`));
    n++;
  }
  console.log(`[og:images] ✓ generated ${n} per-project OG cards → public/og/`);
}

main().catch((e) => { console.error(`[og:images] ✗ ${e.message || e}`); process.exit(1); });
