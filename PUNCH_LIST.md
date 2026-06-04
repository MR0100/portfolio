# PUNCH LIST — things you still need to provide

Phase 4 shipped a fully working, build-passing site with 23 pages. This list is what's left to make it launch-ready.

The site builds and serves today even with everything below left as-is — those items just surface placeholder content or "TODO" badges until you fill them in.

---

## 1. Site-wide settings

| Item | Where | Required for |
|---|---|---|
| **Your real domain** in `astro.config.mjs` (`site:` field) and `src/pages/sitemap.xml.ts` (`SITE` const) — currently `https://mitulvaghasiya.com` placeholder | 2 files | Sitemap, OG tags, JSON-LD |
| **Formspree form ID** in `src/pages/contact.astro` — replace `YOUR_FORMSPREE_ID` | 1 file | Contact form submission |
| **Decide visibility of your phone number** — currently in `profile.ts` but not shown on the site. Move it into `contact.astro` if you want it public | 1 file | Contact page |
| **Pro5 certification URL** — add to `certifications[0].url` in `src/data/profile.ts` | 1 file | Resume + Experience timeline |
| **(Optional)** Plausible / PostHog analytics snippet — add a `<script>` in `Base.astro` `<head>` | 1 file | Analytics |
| **(Optional)** Promotion dates for Sadguru Soft (Jr → Flutter → Expert → Senior) — extend `highlights` in `src/data/profile.ts` | 1 file | Experience timeline |

---

## 2. Per-project confirmations (small)

These are the in-MDX `todos:` arrays — each project's page surfaces its own list. Quick highlights:

| Project | Open question |
|---|---|
| **KGK Buy Diamonds** | Confirm whether to feature "50,000+ certified diamonds" / "120 years" headline metric |
| **KGK HRMS** | Confirm we should not show an iOS badge (current default — internal-only iOS) |
| **Lili** | Decide: show or hide the Android link (Play Store currently unlisted, APKPure mirror is the working install path) |
| **Foresite** | Confirm app role (agronomist-facing field tool vs. grower-facing companion) |
| **Tarot Cat** | Confirm whether to also link iOS "MyTarot 마이타로" (likely same product, KR-only) |
| **Havitglam** | Confirm whether to also link iOS "Largo 라르고" (likely same product, KR-only) |
| **Today's Quote** | Confirm the in-app mechanic for the 2D mini-game (current best guess: "Play Games with Quotes — leaderboard") |
| **Physio Mobile** | Confirm whether to feature any specific outcome metric |
| **Marline Media** | Confirm wording — directly mention delisting, or just frame as "client project" |
| **Synergy** | Confirm whether to mention the "Synergy" product name on the public site or anonymise |
| **Setera TPMS** | Confirm "Setera" client name is safe to mention publicly |
| **Warden Tracker** | Confirm client/use-case is safe to mention publicly |
| **CareShare** | Confirm whether to anonymise client or use the public name |
| **Radio Station** | Decide whether to keep it (currently full case study) or hide |
| **Most projects** | Confirm dates (years) — I used educated guesses based on resume + research |

These are also visible on each `/work/[slug]` page inside the amber TODO box, so when you walk through the site you'll see them in context.

---

## 3. Missing assets

The build inserts a clean placeholder SVG wherever a project has no screenshot. Replace these to remove the placeholder:

| Project | What's needed | Where to put it |
|---|---|---|
| KGK Buy Diamonds | hero + 3–5 screenshots | `public/work/kgk-buy-diamonds/` |
| KGK HRMS | hero + 2–3 screenshots | `public/work/kgk-hrms/` |
| Locket | hero + 3 screenshots | `public/work/locket/` |
| Studymap | hero + 3 screenshots (Japanese UI is fine — part of the story) | `public/work/studymap/` |
| Setera TPMS | screenshots if any (internal tool may not have any) | `public/work/setera-tpms/` |
| Warden Tracker | screenshots if any | `public/work/warden-tracker/` |

Naming convention: `01.png`, `02.png`, `03.png`. Then update the case-study frontmatter's `hero:` and `gallery:` arrays to reference them, and set `needsAssets: false`.

**Nice-to-have, not strictly required:**
- A fresh professional headshot (the one in `inputs/old-portfolio/MR0100/assets/mitul.jpg` is on disk but not used on the live site yet — let me know if you want it inserted into the About section).
- App icons (1024×1024) for the case-study heroes — would look great as decorative elements in each project page.
- Higher-resolution versions of the existing screenshots if you have them. The current ones in `public/work/*/0X.png` were copied from your old portfolio.

---

## 4. Social link choices

Currently visible on the site:
- ✅ GitHub
- ✅ LinkedIn
- ✅ Twitter
- ✅ Email

Currently hidden — say the word and I'll add them:
- Instagram (`https://www.instagram.com/mr_vaghasiya_0100/` — from old portfolio data)
- Stack Overflow (`https://stackoverflow.com/users/16161382/mitul-vaghasiya` — from old portfolio data)
- Buy Me a Coffee (`https://www.buymeacoffee.com/mrvaghasiya` — from GitHub README)
- Previous GitHub (`https://github.com/MR0100-zz` — from GitHub README, "Previous Account" badge)
- Facebook (placeholder in old portfolio; no real URL provided)

---

## 5. Copy review

I drafted all the copy from your resume + research — no fabrication, but it would be worth a fast read-through to make sure the tone matches you. Suggested order:

1. **`src/data/profile.ts`** — `bioShort` and `bioLong[]` (used on home About + resume Summary).
2. **`src/components/Hero.astro`** — the `tagline` (currently pulled from `profile.tagline`).
3. **`src/content/work/*.mdx`** — each project's "Problem / My role / Approach" paragraphs.

Edit in place, save, dev server reloads.

---

## 6. After launch

Useful follow-ups once the site is live:

- Add a `/blog` content collection if you want to start writing.
- Add a "Press" or "Talks" section if you've spoken at any meetups / conferences.
- Add a `/uses` page (the indie-dev tradition) listing your tools.
- Wire up an RSS feed (`@astrojs/rss`) when you have posts to syndicate.
- Add structured "Open Graph" PNG generation (e.g. `@vercel/og`) for richer link previews per project.

---

## How to preview locally right now

```bash
npm run dev
```

Then open <http://localhost:4321/>. Every page is wired:

- `/` — Home
- `/work` — All 19 projects
- `/work/<slug>` — Each case study (e.g. `/work/kgk-buy-diamonds`)
- `/resume` — Resume page with PDF download
- `/contact` — Contact page + form

Try toggling dark/light mode from the nav bar — both themes are tuned and accessible.
