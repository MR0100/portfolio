# Mitul Vaghasiya — Portfolio

Personal portfolio for **Mitul R. Vaghasiya**, Senior Mobile Engineer & Development Lead.
Built with Astro 4 · TypeScript · Tailwind CSS · MDX content collections.

> Looking for the build history? See [`PROFILE.md`](./PROFILE.md), [`PORTFOLIO_PLAN.md`](./PORTFOLIO_PLAN.md), and [`RESEARCH.md`](./RESEARCH.md).

---

## Local development

```bash
npm install        # if you haven't already
npm run dev        # starts the dev server at http://localhost:4321
```

Astro's dev server has fast HMR — edits to MDX, components, and styles reload instantly.

## Build & preview

```bash
npm run build      # builds the production bundle into ./dist
npm run preview    # serves ./dist locally (useful for double-checking production output)
```

The first build takes ~1s on a warm install.

## Deploy to Vercel

This site is a static Astro build — Vercel auto-detects it.

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo.
3. Vercel will detect Astro and use:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Confirm the import. The first deploy takes ~30 seconds.
5. (Optional) Add a custom domain in **Project Settings → Domains**. Set the `site` field in [`astro.config.mjs`](./astro.config.mjs) to match — that's the URL used in the sitemap, OG tags, and JSON-LD.

CLI alternative:

```bash
npx vercel        # interactive deploy
npx vercel --prod # promote to production
```

---

## Adding or updating a case study

Every project page lives in `src/content/work/<slug>.mdx`. The frontmatter is type-checked by Zod (schema in `src/content/config.ts`).

```yaml
---
title: "Project name"
oneLiner: "One-sentence pitch."
status: "verified"            # verified | brand-verified | internal | unlisted | early
category: "Enterprise & B2B"
role: "Mobile Lead"
employer: "KGK InfoTech LLP"
client: "KGK Group"           # optional
publisher: "KGK Diamonds BVBA" # optional, shown next to the badge
period: "2025 — Present"
featured: true                # shows on the homepage's Selected Work
order: 1                      # sort order (lower = first)
stack:
  - "Flutter"
  - "BLoC"
links:
  appStore: "https://..."
  playStore: "https://..."
  liveSite: "https://..."
  apkPure: "https://..."
  github: "https://..."
  press: ["https://..."]
hero: "/work/<slug>/01.png"
gallery:
  - "/work/<slug>/01.png"
  - "/work/<slug>/02.png"
accent: "236 242 255"          # rgb triplet for card-corner tint
needsAssets: false             # set true if screenshots aren't there yet
todos:
  - "Anything still missing"
---

## At a glance
…body content (MDX — Markdown + JSX)…
```

Screenshots go under `public/work/<slug>/`. Reference them in `hero` and `gallery` with absolute paths starting at `/work/<slug>/`.

The slug is derived from the filename (`kgk-buy-diamonds.mdx` → `/work/kgk-buy-diamonds`) — do not put `slug:` in the frontmatter.

---

## Updating profile / skills / experience

Single source of truth: [`src/data/profile.ts`](./src/data/profile.ts).

- `profile` — name, headline, tagline, bio, contact, socials
- `skillGroups` — categorised skills with proficiency tiers (`expert` / `strong` / `familiar` / `learning`)
- `experience` — roles in reverse-chronological order
- `education`, `certifications`

The home page, resume page, contact page, and JSON-LD all read from this file.

---

## Design tokens

CSS variables live in `src/styles/globals.css`. They're mapped into Tailwind theme colors in `tailwind.config.ts`:

| Token | Light | Dark |
|---|---|---|
| `bg` | warm off-white | near-black |
| `surface` | white | charcoal |
| `text` | near-black | off-white |
| `muted` | grey-600 | grey-400 |
| `accent` | deep amethyst `#6D28D9` | softer violet `#A78BFA` |

Theme switching is a single CSS class on `<html>` (`.dark`). The toggle component (`src/components/ThemeToggle.astro`) persists choice to `localStorage` and respects the system preference on first paint.

---

## SEO & structured data

- **Per-page meta** is emitted by `src/layouts/Base.astro`. Title, description, canonical, OG, Twitter card.
- **Person JSON-LD** on `/` via `src/components/PersonJsonLd.astro`.
- **MobileApplication / CreativeWork JSON-LD** on each `/work/[slug]` via `src/components/CreativeWorkJsonLd.astro`.
- **Sitemap** at `/sitemap.xml` (custom endpoint in `src/pages/sitemap.xml.ts` — enumerates static pages + every case study).
- **robots.txt** at the project root in `public/robots.txt`.

Update the `SITE` constant in `src/pages/sitemap.xml.ts` and the `site` field in `astro.config.mjs` if you change domain.

---

## Contact form

`src/pages/contact.astro` is wired to **Formspree**. Replace `YOUR_FORMSPREE_ID` in the form's `action` URL with your actual form ID (free tier available at [formspree.io](https://formspree.io)).

Alternative: swap for **Resend** + a Vercel serverless function — straightforward upgrade if you'd rather not depend on Formspree.

---

## Stack & dependencies

- **[Astro 4](https://astro.build/)** — static site framework with content collections
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first CSS
- **[MDX](https://mdxjs.com/)** — Markdown + JSX for case studies
- **TypeScript strict mode**
- **Sharp** — image optimization for the Astro `<Image>` component

No client framework (no React / Vue / Svelte). Each page ships ~zero JS by default; only the theme toggle and reveal-on-scroll observer use small inline scripts.

---

## Folder structure

```
mitul/
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── public/
│   ├── favicon.svg
│   ├── og-default.svg
│   ├── robots.txt
│   ├── resume/mitul-vaghasiya-resume.pdf
│   └── work/<slug>/*.png        # project screenshots
├── src/
│   ├── content/
│   │   ├── config.ts            # Zod schema for the `work` collection
│   │   └── work/                # 19 MDX case studies
│   ├── components/              # Hero, Nav, ProjectCard, ThemeToggle, etc.
│   ├── data/
│   │   └── profile.ts           # single source of truth for profile data
│   ├── layouts/
│   │   ├── Base.astro
│   │   └── CaseStudy.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── work/index.astro
│   │   ├── work/[slug].astro
│   │   ├── resume.astro
│   │   ├── contact.astro
│   │   └── sitemap.xml.ts
│   └── styles/globals.css
├── inputs/                       # raw materials (resume PDF, old portfolios, links)
├── PROFILE.md                    # compiled profile (Phase 1)
├── PORTFOLIO_PLAN.md             # design + build plan (Phase 3)
├── RESEARCH.md                   # web verification audit (Phase 2 + 3)
└── README.md                     # this file
```
