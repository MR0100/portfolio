"""
Build themed portrait variations from inputs/1718259701626.jpeg.

Palette/FX values come straight from src/styles/globals.css.
NO TYPOGRAPHY in the outputs — visuals only.

Outputs land in inputs/gen_images/.
"""
from __future__ import annotations

import os
import random
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageChops, ImageEnhance
from rembg import remove, new_session

random.seed(42)
np.random.seed(42)

ROOT = Path("/Users/kgk/Desktop/projects/mitul")
SRC = ROOT / "inputs" / "1718259701626.jpeg"
OUT = ROOT / "inputs" / "gen_images"
OUT.mkdir(parents=True, exist_ok=True)

# ── Palette (from globals.css) ────────────────────────────────────────────────
LIGHT = {
    "bg":      (250, 247, 240),
    "paper":   (245, 240, 228),
    "surface": (255, 252, 245),
    "text":    ( 12,  28,  47),
    "muted":   ( 92, 102, 122),
    "accent":  ( 15,  95,  96),
    "sepia":   (175,  88,  31),
    "sepia_s": (232, 197, 159),
    "border":  (222, 213, 196),
    "grid":    (200, 188, 162),
}
DARK = {
    "bg":      ( 11,  17,  26),
    "paper":   ( 17,  24,  39),
    "surface": ( 24,  32,  48),
    "text":    (240, 235, 222),
    "muted":   (167, 169, 178),
    "accent":  ( 94, 234, 212),
    "sepia":   (217, 161,  99),
    "sepia_s": ( 87,  64,  38),
    "border":  ( 47,  56,  74),
    "grid":    ( 56,  67,  84),
}

# ── Load & prep ───────────────────────────────────────────────────────────────
print("→ loading source")
src = Image.open(SRC).convert("RGB")
w, h = src.size
side = min(w, h)
src = src.crop(((w - side) // 2, (h - side) // 2, (w + side) // 2, (h + side) // 2))
src = src.resize((1024, 1024), Image.LANCZOS)
src.save(OUT / "00_source_square.jpg", quality=92)

print("→ background removal (rembg)")
session = new_session("u2net")
cut = remove(src, session=session)  # RGBA with alpha
cut.save(OUT / "01_cutout.png")

# Tighten + feather the alpha so the chair edge doesn't ghost through
alpha = cut.split()[-1]
# Erode a touch (clip soft edges) then blur for a clean halo
alpha_arr = np.asarray(alpha, dtype=np.float32)
alpha_arr = np.clip((alpha_arr - 35) * 1.35, 0, 255)  # push out semi-transparent edges
alpha = Image.fromarray(alpha_arr.astype(np.uint8), "L")
alpha_soft = alpha.filter(ImageFilter.GaussianBlur(1.2))
subject_rgb = cut.convert("RGB")


# ── Helpers ───────────────────────────────────────────────────────────────────
def duotone(img_rgb: Image.Image, shadow: tuple, highlight: tuple) -> Image.Image:
    g = np.asarray(img_rgb.convert("L"), dtype=np.float32) / 255.0
    s = np.array(shadow, dtype=np.float32)
    h = np.array(highlight, dtype=np.float32)
    out = (1.0 - g)[..., None] * s + g[..., None] * h
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), "RGB")


def paper_grain(size, base, strength=10, dot_color=None, dot_spacing=24, dot_alpha=46):
    w, h = size
    arr = np.full((h, w, 3), base, dtype=np.float32)
    noise = (np.random.rand(h, w, 1) - 0.5) * strength
    arr += noise
    arr = np.clip(arr, 0, 255).astype(np.uint8)
    img = Image.fromarray(arr, "RGB")
    if dot_color is not None:
        dots = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        d = ImageDraw.Draw(dots)
        for y in range(0, h, dot_spacing):
            for x in range(0, w, dot_spacing):
                d.point((x, y), fill=(*dot_color, dot_alpha))
        img = Image.alpha_composite(img.convert("RGBA"), dots).convert("RGB")
    return img


def add_scanlines(img: Image.Image, alpha=14, period=3) -> Image.Image:
    w, h = img.size
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    for y in range(0, h, period):
        d.line([(0, y), (w, y)], fill=(0, 0, 0, alpha))
    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")


def add_sweep(img: Image.Image, color, alpha=22, band_h_ratio=0.18, center_y_ratio=0.42):
    w, h = img.size
    cy = int(h * center_y_ratio)
    bh = int(h * band_h_ratio)
    overlay = np.zeros((h, w, 4), dtype=np.float32)
    for y in range(h):
        d = abs(y - cy) / max(1, bh)
        if d < 1:
            a = (1 - d) * alpha
            overlay[y, :, 0] = color[0]
            overlay[y, :, 1] = color[1]
            overlay[y, :, 2] = color[2]
            overlay[y, :, 3] = a
    over = Image.fromarray(overlay.astype(np.uint8), "RGBA")
    return Image.alpha_composite(img.convert("RGBA"), over).convert("RGB")


def chromatic_split(img: Image.Image, color_a, color_b, shift=4) -> Image.Image:
    base = img.convert("RGB")
    a = Image.new("RGB", base.size, color_a)
    b = Image.new("RGB", base.size, color_b)
    edges = base.filter(ImageFilter.FIND_EDGES).convert("L")
    edges = edges.filter(ImageFilter.GaussianBlur(0.6))
    mask = edges.point(lambda p: min(255, int(p * 1.4)))
    a_shift = ImageChops.offset(a, -shift, 0)
    b_shift = ImageChops.offset(b, shift, 0)
    out = base.copy()
    out.paste(a_shift, (0, 0), ImageChops.multiply(mask, Image.new("L", mask.size, 90)))
    out.paste(b_shift, (0, 0), ImageChops.multiply(mask, Image.new("L", mask.size, 80)))
    return out


def vignette(img: Image.Image, strength=0.55):
    w, h = img.size
    Y, X = np.mgrid[0:h, 0:w].astype(np.float32)
    cx, cy = w / 2, h / 2
    r = np.sqrt(((X - cx) / cx) ** 2 + ((Y - cy) / cy) ** 2)
    falloff = np.clip(r, 0, 1.4)
    mask = 1.0 - (falloff ** 2) * strength
    arr = np.asarray(img, dtype=np.float32)
    arr = arr * mask[..., None]
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")


def paste_centered(canvas: Image.Image, subject: Image.Image, mask: Image.Image,
                   y_offset=0) -> Image.Image:
    """Center-paste subject; the source is already a centered square so this stays clean."""
    out = canvas.copy()
    cw, ch = canvas.size
    sw, sh = subject.size
    x = (cw - sw) // 2
    y = (ch - sh) // 2 + y_offset
    out.paste(subject, (x, y), mask)
    return out


# ═══════════════════════════════════════════════════════════════════════════════
# 1 — Atlas Specimen (light, sepia duotone, paper, hairline frame only)
# ═══════════════════════════════════════════════════════════════════════════════
print("→ #1 Atlas Specimen")
P = LIGHT
bg = paper_grain((1400, 1400), P["paper"], strength=8,
                 dot_color=P["grid"], dot_spacing=22, dot_alpha=40)

sub_duo = duotone(subject_rgb, shadow=P["text"], highlight=P["sepia"])
sub_duo = ImageEnhance.Contrast(sub_duo).enhance(1.08)

canvas = paste_centered(bg, sub_duo, alpha_soft, y_offset=0)

# Hairline double frame inset (no text)
draw = ImageDraw.Draw(canvas)
cw, ch = canvas.size
inset = 56
draw.rectangle([inset, inset, cw - inset - 1, ch - inset - 1],
               outline=P["border"], width=1)
draw.rectangle([inset + 14, inset + 14, cw - inset - 15, ch - inset - 15],
               outline=P["border"], width=1)

# Small rotated-square caret at each frame midpoint (the .rule::before motif)
def caret(draw, cx, cy, r, color):
    draw.polygon([(cx, cy - r), (cx + r, cy), (cx, cy + r), (cx - r, cy)], fill=color)

# four carets on the inner frame midpoints
mid_x = cw // 2
mid_y = ch // 2
caret(draw, mid_x, inset + 14, 5, P["accent"])
caret(draw, mid_x, ch - inset - 15, 5, P["accent"])
caret(draw, inset + 14, mid_y, 5, P["sepia"])
caret(draw, cw - inset - 15, mid_y, 5, P["sepia"])

canvas.save(OUT / "01_atlas_specimen.png", optimize=True)
canvas.convert("RGB").save(OUT / "01_atlas_specimen.jpg", quality=92)


# ═══════════════════════════════════════════════════════════════════════════════
# 2 — Cyberpunk Terminal (dark, teal duotone, aura, scanlines, HUD ticks only)
# ═══════════════════════════════════════════════════════════════════════════════
print("→ #2 Cyberpunk Terminal")
P = DARK
bg = paper_grain((1400, 1400), P["bg"], strength=6,
                 dot_color=P["grid"], dot_spacing=26, dot_alpha=24)

sub_teal = duotone(subject_rgb, shadow=(8, 14, 22), highlight=P["accent"])
sub_teal = ImageEnhance.Contrast(sub_teal).enhance(1.12)
sub_teal = ImageEnhance.Brightness(sub_teal).enhance(0.95)

canvas = bg.copy()
cw, ch = canvas.size
sw, sh = sub_teal.size
x = (cw - sw) // 2
y = (ch - sh) // 2

# Teal aura under the silhouette
aura_mask = Image.new("L", canvas.size, 0)
aura_mask.paste(alpha_soft, (x, y))
aura_mask = aura_mask.filter(ImageFilter.GaussianBlur(32))
aura_arr = np.zeros((ch, cw, 4), dtype=np.uint8)
aura_arr[..., 0] = P["accent"][0]
aura_arr[..., 1] = P["accent"][1]
aura_arr[..., 2] = P["accent"][2]
aura_arr[..., 3] = (np.asarray(aura_mask, dtype=np.float32) * 0.55).astype(np.uint8)
aura = Image.fromarray(aura_arr, "RGBA")
canvas = Image.alpha_composite(canvas.convert("RGBA"), aura).convert("RGB")
canvas.paste(sub_teal, (x, y), alpha_soft)

canvas = chromatic_split(canvas, color_a=P["accent"], color_b=P["sepia"], shift=3)
canvas = add_sweep(canvas, color=P["accent"], alpha=26, band_h_ratio=0.20, center_y_ratio=0.38)
canvas = add_scanlines(canvas, alpha=28, period=3)
canvas = vignette(canvas, strength=0.5)

# HUD corner ticks — pure geometric
draw = ImageDraw.Draw(canvas)
inset = 42
size = 32
weight = 2
for (cx0, cy0, dx1, dy1, dx2, dy2) in [
    (inset, inset,                inset + size, inset,           inset,           inset + size),
    (cw - inset, inset,           cw - inset - size, inset,      cw - inset,      inset + size),
    (inset, ch - inset,           inset + size, ch - inset,      inset,           ch - inset - size),
    (cw - inset, ch - inset,      cw - inset - size, ch - inset, cw - inset,      ch - inset - size),
]:
    draw.line([(cx0, cy0), (dx1, dy1)], fill=P["accent"], width=weight)
    draw.line([(cx0, cy0), (dx2, dy2)], fill=P["accent"], width=weight)

canvas.save(OUT / "02_cyberpunk_terminal.png", optimize=True)
canvas.convert("RGB").save(OUT / "02_cyberpunk_terminal.jpg", quality=92)


# ═══════════════════════════════════════════════════════════════════════════════
# 3 — Cartographic Topo (cream paper + topographic contour lines, no text)
# ═══════════════════════════════════════════════════════════════════════════════
print("→ #3 Cartographic Topo")
P = LIGHT
bg = paper_grain((1400, 1400), P["bg"], strength=7,
                 dot_color=P["grid"], dot_spacing=20, dot_alpha=36)

gray = np.asarray(subject_rgb.convert("L"), dtype=np.float32)
amask = np.asarray(alpha_soft.resize(subject_rgb.size, Image.LANCZOS), dtype=np.float32) / 255.0
heights = gray * amask + (1 - amask) * 0
h_img = Image.fromarray(heights.astype(np.uint8), "L").filter(ImageFilter.GaussianBlur(4))
heights = np.asarray(h_img, dtype=np.float32)

contour_levels = np.linspace(20, 235, 18)
contour_canvas = np.full((heights.shape[0], heights.shape[1], 3), P["bg"], dtype=np.float32)
ink = np.array(P["text"], dtype=np.float32)
sepia = np.array(P["sepia"], dtype=np.float32)
accent = np.array(P["accent"], dtype=np.float32)

for i, lvl in enumerate(contour_levels):
    band = (np.abs(heights - lvl) < 1.5).astype(np.float32)
    if i % 7 == 0:
        col = accent
    elif i % 4 == 0:
        col = sepia
    else:
        col = ink
    contour_canvas = contour_canvas * (1 - band[..., None]) + col * band[..., None]

fill_alpha = np.clip((heights / 255.0) * 0.18, 0, 0.35)
contour_canvas = contour_canvas * (1 - fill_alpha[..., None]) + sepia * fill_alpha[..., None]

contour_img = Image.fromarray(np.clip(contour_canvas, 0, 255).astype(np.uint8), "RGB")
contour_arr = np.asarray(contour_img, dtype=np.float32)
sil = amask[..., None]
combined = contour_arr * sil + np.asarray(bg.resize(contour_img.size), dtype=np.float32) * (1 - sil)
contour_img = Image.fromarray(np.clip(combined, 0, 255).astype(np.uint8), "RGB")

canvas = bg.copy()
cw, ch = canvas.size
sw, sh = contour_img.size
x = (cw - sw) // 2
y = (ch - sh) // 2
canvas.paste(contour_img, (x, y))

# Just a hairline frame + compass rose (geometric only, no letters)
draw = ImageDraw.Draw(canvas)
inset = 52
draw.rectangle([inset, inset, cw - inset - 1, ch - inset - 1],
               outline=P["border"], width=1)

# Compass rose — concentric circles + cross + N arrow only (no letter)
rose_cx, rose_cy = cw - inset - 90, inset + 90
for r in (36, 22):
    draw.ellipse([rose_cx - r, rose_cy - r, rose_cx + r, rose_cy + r],
                 outline=P["sepia"], width=1)
draw.line([(rose_cx, rose_cy - 36), (rose_cx, rose_cy + 36)], fill=P["sepia"], width=1)
draw.line([(rose_cx - 36, rose_cy), (rose_cx + 36, rose_cy)], fill=P["sepia"], width=1)
# Filled triangle "north arrow"
draw.polygon([(rose_cx, rose_cy - 48), (rose_cx - 7, rose_cy - 30),
              (rose_cx + 7, rose_cy - 30)], fill=P["accent"])

# Latitude tick marks along left edge (lines only, no numbers)
for i in range(4):
    y_ = inset + 120 + i * 200
    draw.line([(inset, y_), (inset + 14, y_)], fill=P["muted"], width=1)

canvas.save(OUT / "03_cartographic_topo.png", optimize=True)
canvas.convert("RGB").save(OUT / "03_cartographic_topo.jpg", quality=92)


# ═══════════════════════════════════════════════════════════════════════════════
# 4 — Editorial Halftone (high-contrast stipple, teal disc accent, no text)
# ═══════════════════════════════════════════════════════════════════════════════
print("→ #4 Editorial Halftone")
P = LIGHT
bg = paper_grain((1400, 1400), P["surface"], strength=5,
                 dot_color=P["grid"], dot_spacing=28, dot_alpha=20)

gray = np.asarray(subject_rgb.convert("L"), dtype=np.float32)
amask = np.asarray(alpha_soft.resize(subject_rgb.size, Image.LANCZOS), dtype=np.float32) / 255.0
gray = np.clip((gray - 80) * 1.45 + 80, 0, 255)

cell = 7
H, W = gray.shape
ht_canvas = Image.new("RGB", (W, H), P["surface"])
htd = ImageDraw.Draw(ht_canvas)
for yy in range(0, H, cell):
    for xx in range(0, W, cell):
        block = gray[yy:yy + cell, xx:xx + cell]
        m_block = amask[yy:yy + cell, xx:xx + cell]
        if block.size == 0 or m_block.mean() < 0.12:
            continue
        lum = block.mean() / 255.0
        a = m_block.mean()
        r = (1.0 - lum) * (cell * 0.55) * (0.7 + 0.3 * a)
        if r < 0.4:
            continue
        cx_ = xx + cell // 2
        cy_ = yy + cell // 2
        htd.ellipse([cx_ - r, cy_ - r, cx_ + r, cy_ + r], fill=P["text"])

canvas = bg.copy()
cw, ch = canvas.size
x = (cw - W) // 2
y = (ch - H) // 2

# Teal half-disc behind the head — drawn BEFORE the halftone
disc_layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
dd = ImageDraw.Draw(disc_layer)
disc_r = 340
dx, dy = cw // 2, ch // 2 - 80
dd.ellipse([dx - disc_r, dy - disc_r, dx + disc_r, dy + disc_r],
           fill=(*P["accent"], 46))
canvas = Image.alpha_composite(canvas.convert("RGBA"), disc_layer).convert("RGB")

# Composite halftone using silhouette as transparency
ht_arr = np.asarray(ht_canvas, dtype=np.float32)
bg_crop = np.asarray(canvas.crop((x, y, x + W, y + H)), dtype=np.float32)
sil = amask[..., None]
mixed = ht_arr * sil + bg_crop * (1 - sil)
canvas.paste(Image.fromarray(np.clip(mixed, 0, 255).astype(np.uint8), "RGB"), (x, y))

# Sepia hairline rule lower third — a single geometric flourish, no letters
draw = ImageDraw.Draw(canvas)
ry = int(ch * 0.84)
draw.line([(160, ry), (cw - 160, ry)], fill=P["sepia"], width=1)
# Small accent square at left end
draw.rectangle([150, ry - 4, 158, ry + 4], fill=P["accent"])

canvas.save(OUT / "04_editorial_halftone.png", optimize=True)
canvas.convert("RGB").save(OUT / "04_editorial_halftone.jpg", quality=92)


# ═══════════════════════════════════════════════════════════════════════════════
# Contact sheet — no labels
# ═══════════════════════════════════════════════════════════════════════════════
print("→ contact sheet")
thumbs = [
    Image.open(OUT / "01_atlas_specimen.jpg").convert("RGB"),
    Image.open(OUT / "02_cyberpunk_terminal.jpg").convert("RGB"),
    Image.open(OUT / "03_cartographic_topo.jpg").convert("RGB"),
    Image.open(OUT / "04_editorial_halftone.jpg").convert("RGB"),
]
tw_, th_ = 700, 700
sheet_w = tw_ * 2 + 60
sheet_h = th_ * 2 + 60
sheet = Image.new("RGB", (sheet_w, sheet_h), LIGHT["paper"])
sd = ImageDraw.Draw(sheet)
for i, t in enumerate(thumbs):
    col = i % 2
    row = i // 2
    th = t.resize((tw_, th_), Image.LANCZOS)
    x = 20 + col * (tw_ + 20)
    y = 20 + row * (th_ + 20)
    sheet.paste(th, (x, y))
    sd.rectangle([x, y, x + tw_, y + th_], outline=LIGHT["border"], width=1)
sheet.save(OUT / "00_contact_sheet.jpg", quality=90)

print("\nDONE. outputs in", OUT)
for p in sorted(OUT.iterdir()):
    print("  -", p.name, f"({p.stat().st_size // 1024} KB)")
