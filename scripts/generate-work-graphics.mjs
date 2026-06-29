// Work graphics generator — exploration build v2.
// THUMBNAIL = the only image with the app name. FEATURE images = rich graphic
// compositions (vectors / patterns / scenes), NO name — themed to the app's
// sampled colors (per-project) AND the portfolio teal. All procedural SVG —
// no AI / MCP / paid generation. Real app screens cut from source.
// Output: public/graphics-review/ + gallery index.html.
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(ROOT, "public/graphics-review");
const W = 1600, H = 1000;

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toHex = (r, g, b) => "#" + [r, g, b].map((x) => clamp(Math.round(x), 0, 255).toString(16).padStart(2, "0")).join("");
function rgbToHsl(r, g, b) { r /= 255; g /= 255; b /= 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b); let h = 0, s = 0, l = (mx + mn) / 2; if (mx !== mn) { const d = mx - mn; s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h *= 60; } return [h, s, l]; }
function hsl(h, s, l) { h = (h % 360 + 360) % 360; const c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2; let [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x]; return toHex((r + m) * 255, (g + m) * 255, (b + m) * 255); }
const mulberry32 = (a) => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const hash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };

async function pickHue(buf) {
  const { data } = await sharp(buf).resize(64, 64, { fit: "fill" }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const b = new Array(18).fill(0);
  for (let i = 0; i < data.length; i += 3) { const [h, s, l] = rgbToHsl(data[i], data[i + 1], data[i + 2]); if (s > 0.32 && l > 0.25 && l < 0.75) b[Math.floor(h / 20) % 18] += s * (1 - Math.abs(l - 0.5)); }
  let bi = 0; for (let i = 1; i < 18; i++) if (b[i] > b[bi]) bi = i; return bi * 20 + 10;
}

function colors(theme, hue) {
  if (theme === "portfolio") return { bg1: "#070d18", bg2: "#0a1322", bg3: "#060a12", pal: ["#8cc6fa", "#5aa0e6", "#a9b4ff"], glow: "#8cc6fa" };
  return { bg1: hsl(hue, 0.42, 0.07), bg2: hsl(hue + 12, 0.40, 0.10), bg3: hsl(hue - 10, 0.45, 0.05), pal: [hsl(hue, 0.78, 0.66), hsl(hue + 40, 0.70, 0.62), hsl(hue - 32, 0.72, 0.64)], glow: hsl(hue, 0.80, 0.62) };
}
const esc = (s) => String(s ?? "").replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

async function makePhone(src, rect, screenH) {
  const sw = Math.round(screenH * (rect.width / rect.height)), sr = Math.round(sw * 0.085);
  const scr = await sharp(src).extract(rect).resize(sw, screenH, { fit: "fill" }).toBuffer();
  const mask = Buffer.from(`<svg width="${sw}" height="${screenH}"><rect width="${sw}" height="${screenH}" rx="${sr}"/></svg>`);
  const screen = await sharp(scr).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
  const pad = 15, fw = sw + pad * 2, fh = screenH + pad * 2, fr = sr + pad;
  const frame = Buffer.from(`<svg width="${fw}" height="${fh}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bz" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="#2a3445"/><stop offset="0.5" stop-color="#0c121d"/><stop offset="1" stop-color="#04070c"/></linearGradient></defs><rect width="${fw}" height="${fh}" rx="${fr}" fill="url(#bz)"/><rect x="1" y="1" width="${fw - 2}" height="${fh - 2}" rx="${fr - 1}" fill="none" stroke="#fff" stroke-opacity="0.16" stroke-width="1.5"/></svg>`);
  const glare = Buffer.from(`<svg width="${sw}" height="${screenH}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="0.7" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0.16"/><stop offset="0.3" stop-color="#fff" stop-opacity="0.03"/><stop offset="0.55" stop-color="#fff" stop-opacity="0"/></linearGradient><clipPath id="c"><rect width="${sw}" height="${screenH}" rx="${sr}"/></clipPath></defs><g clip-path="url(#c)"><rect width="${sw}" height="${screenH}" fill="url(#g)"/></g></svg>`);
  const png = await sharp(frame).composite([{ input: screen, left: pad, top: pad }, { input: glare, left: pad, top: pad }]).png().toBuffer();
  return { png, w: fw, h: fh };
}

// ── graphic treatments → { bg, fg } svg fragments ──
const TREATMENTS = {
  bloom: { place: "left", draw: (c, b, r) => ({ bg: `<g filter="url(#blur)"><ellipse cx="${b.cx + 120}" cy="${b.cy - 80}" rx="460" ry="430" fill="${c.pal[0]}" fill-opacity="0.30"/><ellipse cx="${W - 320}" cy="${H - 180}" rx="380" ry="440" fill="${c.pal[1]}" fill-opacity="0.22"/><ellipse cx="${W - 220}" cy="200" rx="300" ry="300" fill="${c.pal[2]}" fill-opacity="0.16"/></g>`, fg: "" }) },
  orbit: { place: "center", draw: (c, b, r) => { let g = "", dots = ""; for (let i = 1; i <= 8; i++) { const rad = 150 + i * 110; g += `<circle cx="${b.cx}" cy="${b.cy}" r="${rad}" fill="none" stroke="${c.pal[0]}" stroke-opacity="${(0.15 - i * 0.012).toFixed(3)}" stroke-width="1.4"/>`; const a = r() * Math.PI * 2; dots += `<circle cx="${(b.cx + Math.cos(a) * rad).toFixed(0)}" cy="${(b.cy + Math.sin(a) * rad).toFixed(0)}" r="${(3 + r() * 5).toFixed(1)}" fill="${c.pal[i % 3]}" fill-opacity="0.8"/>`; } return { bg: g + dots, fg: "" }; } },
  ribbons: { place: "left", draw: (c, b, r) => { let s = `<defs><linearGradient id="rb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c.pal[0]}" stop-opacity="0.0"/><stop offset="0.5" stop-color="${c.pal[0]}" stop-opacity="0.5"/><stop offset="1" stop-color="${c.pal[1]}" stop-opacity="0.0"/></linearGradient></defs>`; for (let i = 0; i < 4; i++) { const y = 120 + i * 200 + r() * 60; s += `<rect x="-200" y="${y}" width="2200" height="${60 + i * 14}" rx="40" fill="url(#rb)" transform="rotate(-24 ${W / 2} ${H / 2})" opacity="${0.5 - i * 0.07}"/>`; } return { bg: s, fg: "" }; } },
  scatter: { place: "left", draw: (c, b, r) => { let s = "", f = ""; for (let i = 0; i < 130; i++) { const x = 560 + r() * (W - 600), y = 60 + r() * (H - 120), k = r(), op = (0.10 + r() * 0.4) * Math.min(1, (x - 560) / 500 + 0.3); const col = c.pal[i % 3]; if (k < 0.6) s += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(1.5 + r() * 3).toFixed(1)}" fill="${col}" fill-opacity="${op.toFixed(2)}"/>`; else if (k < 0.85) s += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(5 + r() * 6).toFixed(1)}" fill="none" stroke="${col}" stroke-opacity="${op.toFixed(2)}" stroke-width="1.4"/>`; else { const L = 7 + r() * 6; s += `<path d="M${x - L} ${y}H${x + L}M${x} ${y - L}V${y + L}" stroke="${col}" stroke-opacity="${op.toFixed(2)}" stroke-width="1.4"/>`; } } return { bg: s, fg: f }; } },
  arcs: { place: "left", draw: (c, b, r) => { let s = ""; const ox = W + 60, oy = -60; for (let i = 0; i < 5; i++) { const rad = 520 + i * 150; s += `<circle cx="${ox}" cy="${oy}" r="${rad}" fill="none" stroke="${c.pal[i % 2]}" stroke-opacity="${(0.22 - i * 0.03).toFixed(2)}" stroke-width="${4 - i * 0.5}"/>`; } return { bg: s, fg: "" }; } },
  waves: { place: "left", draw: (c, b, r) => { let s = `<defs><linearGradient id="wv" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${c.pal[0]}" stop-opacity="0"/><stop offset="0.5" stop-color="${c.pal[0]}" stop-opacity="0.6"/><stop offset="1" stop-color="${c.pal[1]}" stop-opacity="0"/></linearGradient></defs>`; for (let i = 0; i < 7; i++) { const y = 130 + i * 110, a = 30 + r() * 40; s += `<path d="M-50 ${y} C 420 ${(y - a).toFixed(0)}, 1100 ${(y + a).toFixed(0)}, 1660 ${(y - a / 2).toFixed(0)}" fill="none" stroke="url(#wv)" stroke-opacity="${(0.5 - i * 0.04).toFixed(2)}" stroke-width="2"/>`; } return { bg: s, fg: "" }; } },
  facets: { place: "center", draw: (c, b, r) => { let s = ""; for (let i = 0; i < 6; i++) { const x = 200 + r() * (W - 400), y = 120 + r() * (H - 240), z = 180 + r() * 260; const p = [[x, y - z], [x + z * 0.9, y + z * 0.5], [x - z * 0.9, y + z * 0.5]].map((q) => q.map(Math.round).join(",")).join(" "); s += `<polygon points="${p}" fill="${c.pal[i % 3]}" fill-opacity="${(0.05 + r() * 0.06).toFixed(2)}" stroke="${c.pal[i % 3]}" stroke-opacity="0.10" stroke-width="1"/>`; } return { bg: s, fg: "" }; } },
  cards: { place: "left", draw: (c, b, r) => { let s = "", f = ""; for (let i = 0; i < 7; i++) { const x = 640 + r() * (W - 760), y = 120 + r() * (H - 380), w = 150 + r() * 80, h = w * 1.5, rot = (r() * 50 - 25).toFixed(1), col = c.pal[i % 3]; const rect = `<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" rx="18" fill="${col}" fill-opacity="${(0.06 + r() * 0.08).toFixed(2)}" stroke="${col}" stroke-opacity="0.18" stroke-width="1.2" transform="rotate(${rot} ${(x + w / 2).toFixed(0)} ${(y + h / 2).toFixed(0)})"/>`; if (i === 6) f += rect; else s += rect; } return { bg: s, fg: f }; } },
};

function defs(c, box) {
  return `<defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.55" y2="1"><stop offset="0" stop-color="${c.bg1}"/><stop offset="0.55" stop-color="${c.bg2}"/><stop offset="1" stop-color="${c.bg3}"/></linearGradient>
    <radialGradient id="rim" cx="${(box.cx / W).toFixed(3)}" cy="${(box.cy / H).toFixed(3)}" r="0.42"><stop offset="0" stop-color="${c.glow}" stop-opacity="0.20"/><stop offset="0.6" stop-color="${c.glow}" stop-opacity="0.04"/><stop offset="1" stop-color="${c.glow}" stop-opacity="0"/></radialGradient>
    <radialGradient id="vig" cx="0.5" cy="0.45" r="0.78"><stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.5"/></radialGradient>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="110"/></filter>
    <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope="0.05"/></feComponentTransfer><feComposite operator="in" in2="SourceGraphic"/></filter>
  </defs>`;
}

async function build({ app, slug, screenKey, theme, treatment, named, out }) {
  const c = colors(theme, app._hue);
  const t = TREATMENTS[treatment];
  const screenH = named ? 820 : 780;
  const p = await makePhone(app.src, app.screens[screenKey], screenH);
  const px = t.place === "center" ? Math.round((W - p.w) / 2) : 150;
  const py = Math.round((H - p.h) / 2);
  const box = { x: px, y: py, w: p.w, h: p.h, cx: px + p.w / 2, cy: py + p.h / 2 };
  const r = mulberry32(hash(slug + theme + treatment));
  const { bg, fg } = t.draw(c, box, r);

  let nameSvg = "";
  if (named) {
    const ax = t.place === "center" ? 90 : px + p.w + 70;
    nameSvg = `<rect x="${ax}" y="372" width="52" height="3" rx="1.5" fill="${c.pal[0]}"/>
      <text x="${ax}" y="408" font-family="ui-monospace,monospace" font-size="20" font-weight="600" letter-spacing="5" fill="#8c9bb3">${esc(app.meta)}</text>
      <text x="${ax}" y="534" font-family="Georgia,'Times New Roman',serif" font-size="124" font-weight="700" fill="#f6f8fc">${esc(app.name)}</text>`;
  }

  const plate = Buffer.from(`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${defs(c, box)}
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    ${bg}
    <ellipse cx="${box.cx}" cy="${box.cy}" rx="500" ry="540" fill="url(#rim)"/>
    <rect width="${W}" height="${H}" fill="url(#vig)"/>
    <rect width="${W}" height="${H}" fill="#fff" filter="url(#grain)" opacity="0.5"/>
    ${nameSvg}
  </svg>`);
  const fgSvg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">${defs(c, box)}${fg}</svg>`);
  const refMask = Buffer.from(`<svg width="${p.w}" height="${p.h}"><defs><linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0.16"/><stop offset="0.5" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><rect width="${p.w}" height="${p.h}" fill="url(#f)"/></svg>`);
  const reflection = await sharp(p.png).flip().composite([{ input: refMask, blend: "dest-in" }]).png().toBuffer();

  await sharp(plate).composite([
    { input: reflection, left: px, top: py + p.h + 6 },
    { input: p.png, left: px, top: py },
    { input: fgSvg, left: 0, top: 0 },
  ]).webp({ quality: 90 }).toFile(resolve(OUT, out));
  return out;
}

const APPS = {
  lili: { src: "/tmp/gfx/src/lili-01.png", name: "Lili", meta: "HEALTH & AI · APP STORE", screens: { chat: { left: 430, top: 318, width: 628, height: 1512 }, stats: { left: 1352, top: 556, width: 668, height: 1500 } }, primary: "chat" },
  "tarot-cat": { src: "/tmp/gfx/src/tarot-cat-01.png", name: "Tarot Cat", meta: "CONSUMER · TAROT", screens: { pick: { left: 470, top: 520, width: 1330, height: 2740 } }, primary: "pick" },
};
const THEMES = ["portfolio", "project"];

await mkdir(OUT, { recursive: true });
const made = [];
for (const [slug, app] of Object.entries(APPS)) {
  app._hue = await pickHue(await sharp(app.src).extract(app.screens[app.primary]).toBuffer());
  console.log(`${slug}: hue ${Math.round(app._hue)}°`);
  const screenKeys = Object.keys(app.screens);
  for (const theme of THEMES) {
    // 1 named thumbnail
    made.push(await build({ app, slug, screenKey: app.primary, theme, treatment: "bloom", named: true, out: `${slug}__${theme}__THUMB.webp` }));
    // feature graphics — every treatment, no name, cycling screens
    let i = 0;
    for (const treatment of Object.keys(TREATMENTS)) {
      const sk = screenKeys[i % screenKeys.length]; i++;
      made.push(await build({ app, slug, screenKey: sk, theme, treatment, named: false, out: `${slug}__${theme}__feat-${treatment}.webp` }));
    }
  }
}

const card = (f) => `<figure><img loading="lazy" src="./${f}"><figcaption>${f.replace(".webp", "").replace(/__/g, " · ")}</figcaption></figure>`;
const html = `<!doctype html><meta charset="utf8"><title>Work graphics — review</title><style>body{margin:0;background:#06080d;color:#cdd6e6;font:15px/1.5 ui-sans-serif,system-ui,Arial}h1{font:600 22px ui-monospace,monospace;letter-spacing:2px;padding:28px 32px 4px}p.sub{padding:0 32px 14px;color:#7d8aa0;margin:0;max-width:900px}h2{font:600 13px ui-monospace,monospace;letter-spacing:3px;color:#8cc6fa;text-transform:uppercase;padding:24px 32px 4px;border-top:1px solid #161c28;margin-top:14px}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(430px,1fr));gap:18px;padding:12px 32px 36px}figure{margin:0;background:#0b0f17;border:1px solid #1a2230;border-radius:12px;overflow:hidden}img{width:100%;display:block;aspect-ratio:16/10;object-fit:cover}figcaption{font:12px ui-monospace,monospace;color:#8c9bb3;padding:9px 12px}</style>
<h1>WORK GRAPHICS — REVIEW</h1><p class="sub">THUMBNAIL = the one image with the app name. FEATURE images = graphic compositions (no name) — 8 treatments × 2 themes (portfolio teal · per-project sampled color). All procedural vectors, no AI. Tell me which treatments + theme to keep and I'll roll them across every project.</p>
${["THUMB", "lili__portfolio", "lili__project", "tarot-cat__portfolio", "tarot-cat__project"].map((g) => { const items = made.filter((f) => g === "THUMB" ? f.includes("THUMB") : (f.startsWith(g) && !f.includes("THUMB"))); const label = g === "THUMB" ? "Thumbnails (named)" : g.replace(/__/g, " · ") + " — feature graphics"; return items.length ? `<h2>${label}</h2><div class="grid">${items.sort().map(card).join("")}</div>` : ""; }).join("")}`;
await writeFile(resolve(OUT, "index.html"), html);
console.log(`\n✓ ${made.length} images → public/graphics-review/  (open /graphics-review/)`);
