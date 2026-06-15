#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// One-shot (re-runnable) image optimizer for the work screenshots + headshot.
//
// Why: public/work shipped 71MB of raw PNGs (heroes up to 5.9MB) served as
// plain <img> — a brutal LCP/bandwidth hit, especially on mobile. This converts
// every PNG to WebP at a sane display width, deletes the original PNG, and
// rewrites the .png → .webp references in the work content collection. The
// headshot (used only in JSON-LD) is shrunk too.
//
// Idempotent: re-run it after dropping new screenshots into public/work — it
// only touches PNGs/JPGs it finds and updates any new refs.
//
//   npm run optimize:images
// ─────────────────────────────────────────────────────────────────────────────

import sharp from "sharp";
import { readdir, readFile, writeFile, stat, unlink } from "node:fs/promises";
import { resolve, dirname, join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const WORK_DIR = resolve(ROOT, "public/work");
const CONTENT_DIR = resolve(ROOT, "src/content/work");
const HEADSHOT = resolve(ROOT, "public/mitul.jpg");

const WORK_WIDTH = 1600; // screenshots: plenty for retina display + "open full size"
const WORK_QUALITY = 80;
const HEAD_WIDTH = 800;
const HEAD_QUALITY = 82;

const kb = (n) => (n / 1024).toFixed(0) + "KB";
const log = (m) => console.log(`[optimize-images] ${m}`);

async function walk(dir) {
  const out = [];
  let entries;
  try { entries = await readdir(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

async function main() {
  let before = 0, after = 0, converted = 0;

  // 1. Work screenshots: PNG → WebP, delete the PNG.
  const files = await walk(WORK_DIR);
  for (const png of files.filter((f) => extname(f).toLowerCase() === ".png")) {
    const src = (await stat(png)).size;
    const out = png.replace(/\.png$/i, ".webp");
    await sharp(png).resize({ width: WORK_WIDTH, withoutEnlargement: true }).webp({ quality: WORK_QUALITY }).toFile(out);
    const dst = (await stat(out)).size;
    await unlink(png);
    before += src; after += dst; converted++;
    log(`${png.replace(ROOT + "/", "")}  ${kb(src)} → ${kb(dst)}`);
  }

  // 2. Headshot (JSON-LD only): JPG → smaller WebP.
  try {
    const src = (await stat(HEADSHOT)).size;
    const out = HEADSHOT.replace(/\.jpe?g$/i, ".webp");
    await sharp(HEADSHOT).resize({ width: HEAD_WIDTH, withoutEnlargement: true }).webp({ quality: HEAD_QUALITY }).toFile(out);
    const dst = (await stat(out)).size;
    await unlink(HEADSHOT);
    before += src; after += dst;
    log(`public/mitul.jpg  ${kb(src)} → ${kb(dst)} (mitul.webp)`);
  } catch { /* already converted / absent */ }

  // 3. Rewrite .png → .webp references in the work content collection.
  const mdx = (await walk(CONTENT_DIR)).filter((f) => f.endsWith(".mdx"));
  let rewritten = 0;
  for (const file of mdx) {
    const orig = await readFile(file, "utf8");
    const next = orig.replace(/(\/work\/[^\s"')]+)\.png/g, "$1.webp");
    if (next !== orig) { await writeFile(file, next); rewritten++; }
  }

  log(`✓ ${converted} screenshots converted · ${rewritten} content files re-pointed`);
  log(`✓ total: ${kb(before)} → ${kb(after)}  (saved ${kb(before - after)}, ${((1 - after / before) * 100).toFixed(1)}%)`);
}

main().catch((e) => { console.error(`[optimize-images] ✗ ${e.message || e}`); process.exit(1); });
