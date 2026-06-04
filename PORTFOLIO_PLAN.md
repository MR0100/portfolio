# PORTFOLIO_PLAN — Mitul R. Vaghasiya

> **Approval gate.** This plan is for your review. Don't approve any sections until you've read through them. Mark any line you want changed and reply with edits before saying "build".
>
> Sources baked into this plan: `PROFILE.md` (compiled from your resume + GitHub README + old portfolio data) and `RESEARCH.md` (web-verified store/site links). Read either if you want the raw evidence trail.

---

## 1. Tech stack — recommended

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro 4** with TypeScript strict | Content-collection model is purpose-built for case studies; zero JS by default gives a 100/100 Lighthouse target out of the box; using Astro (not Next.js again) shows you pick the right tool for the job. Your old `portfolio-next` shipped a heavy Next + Swiper bundle on a content-static site — Astro fixes that. |
| Styling | **Tailwind CSS** + CSS variables for the color tokens | Same Tailwind you already used; tokens make theme-switching trivial. |
| Content | **Astro Content Collections** with **MDX** for case studies | Each case study is its own typed MDX file. Schema-validated frontmatter (title, links, tech stack, hero image, status: verified/internal/unverified). |
| Images | **Astro `<Image>` + Sharp** | Automatic responsive `srcset`, AVIF/WebP, lazy loading. |
| Routing | **Astro View Transitions** | Smooth `/work` → `/work/[slug]` transitions without an SPA's overhead. |
| Forms | **Formspree** or **Resend + serverless endpoint** | Contact form without standing up a backend. |
| SEO | `@astrojs/sitemap` + JSON-LD components | Schema.org `Person` on home; `CreativeWork` per case study. |
| Analytics | **Plausible** (or skip until you ask) | Privacy-respecting, lightweight. |
| Hosting | **Vercel** | Per kit default; zero-config Astro support. |

**If you'd prefer Next.js** (App Router) instead, say so — I'll swap it in. The case-study model translates 1:1 to `app/work/[slug]/page.tsx`.

---

## 2. Site map

```
/                    Home — Hero, About, Skills, Experience, Featured Projects (6), Contact
/work                Full project grid (all 19)
/work/[slug]         Per-project case study (Markdown/MDX)
/resume              Downloadable PDF + on-page rendered version
/contact             Contact form (or anchored to /#contact — see §6)
/sitemap.xml         Auto-generated
/robots.txt          Auto-generated
```

Routes considered and dropped:
- `/blog` — none in current inputs; can add later.
- `/uses` — fun, but optional.
- `/now` — same.

---

## 3. Page-level sections (Home)

| Section | What's in it | Notes |
|---|---|---|
| **Hero** | Name · headline ("Senior Mobile Engineer & Development Lead") · 1-sentence value prop · 2 CTAs ("See projects" → `/work`, "Get in touch" → `/contact`) | Kinetic word-swap ("Flutter / Native bridges / Cross-platform / Real-time systems") — **optional**, marked off by default behind `prefers-reduced-motion`. |
| **About** | 2–3 paragraph bio. Location: Surat, Gujarat, India. Years: 6+. Spoken: English, Hindi, Gujarati. | Drafted from your resume's professional summary — I'll show you the draft copy before baking. |
| **Skills** | Five category groups (Mobile/Native · Architecture · Web/Backend · Leadership · Tools & AI) with chips. Proficiency tier shown subtly (Expert / Strong / Familiar / Learning). | No badges/shields from the GitHub README — those look dated on a hire-me site. Clean text chips instead. |
| **Experience timeline** | KGK InfoTech LLP (Apr 2025–Present, Lead) → Sadguru Soft (Nov 2019–Mar 2025, with promotion arc). | Promotion dates are TODO — once you provide them I'll show the four steps. |
| **Featured projects** | 6 cards (see §5), each linking to its case study. | Order biased to verified + storytelling impact. |
| **Contact** | Email · LinkedIn · GitHub · Twitter/X. Phone gated behind your choice (see TODO). Inline contact form. | |
| **Footer** | Quick links, "Built with Astro" credit, year, source link if you want it open-source. | |

---

## 4. Case-study page template

Every `/work/[slug]` page renders this layout from MDX frontmatter:

```yaml
title: KGK Buy Diamonds
oneLiner: Global B2B diamond-trading platform across 10+ countries
status: verified            # verified | partially_verified | internal | unverified | unavailable
category: Enterprise & B2B E-Commerce
role: Lead Mobile Engineer
employer: KGK InfoTech LLP
period: 2025–Present
stack: [Flutter, Dart, Clean Architecture, BLoC, REST, …]
links:
  appStore: https://apps.apple.com/in/app/kgk-diamonds-buy-diamonds/id6479595403
  playStore: https://play.google.com/store/apps/details?id=com.kgk.diamonds
  liveSite: https://kgkdiamonds.com/
  github: null
hero: /work/kgk-buy-diamonds/hero.png
gallery:
  - /work/kgk-buy-diamonds/01.png
  - /work/kgk-buy-diamonds/02.png
```

Rendered order on the page:
1. **Hero** — title, one-liner, status badge, link chips (App Store, Play Store, Live, GitHub).
2. **At a glance** — Role · Employer · Period · Category · Stack.
3. **Problem / context** — what the product was solving.
4. **My role** — how I contributed (lead, IC, architect, etc.).
5. **Approach & key decisions** — architecture, key tradeoffs, technical highlights.
6. **Results / impact** — only where I can cite something concrete; otherwise omitted.
7. **Gallery** — screenshots with captions, lazy-loaded, lightbox on click.
8. **Verified links** — clear "Open in App Store / Play Store / Live" buttons.
9. **TODO badges** — shown wherever a section is missing input so we both know.

Status-badge rules (small chip in the hero):
- **Verified** — store/website confirmed and tied to you. Green pill.
- **Partially verified** — link exists but couldn't fully tie publisher. Amber pill. Disclaimer footnote: "Listing exists; publisher account is the client's own developer."
- **Internal** — built for a private/internal use case (e.g. KGK HRMS iOS). Neutral pill, no public link.
- **Unavailable** — confirmed delisted / not in stores anymore. Neutral pill, written explicitly so it doesn't look like a gap.
- **Unverified** — listed by you on your old portfolio but I couldn't confirm a live link. No public store badge; case study still gets a page.

---

## 5. Featured projects (homepage) — ordered  *(updated after Round 2 research)*

Six verified apps spanning six industries and three continents. Each links to its full case study.

| # | Project | Status | Why featured |
|---|---|---|---|
| 1 | **KGK Buy Diamonds** | ✅ verified (iOS + Android) | Current role; enterprise B2B at scale; both stores. |
| 2 | **Lili — Health Data Assistant** | ✅ verified (iOS confirmed; APKPure mirror for Android, unlisted from Play Store) | Health + AI + Fitbit/Apple Health. |
| 3 | **Foresite** (Ukko Agro) | ✅ verified (iOS + Android) | AgTech, offline-first SQLite, sockets + maps; international client (Toronto). |
| 4 | **Locket** | ✅ verified (APKPure mirror; was on Play Store, since unlisted) | Standout tech — native bridges, WebSocket, real-time telemetry. |
| 5 | **Lux ECards** | ✅ verified (Play Store, publisher Verdad IT) | Canvas editor; multi-lingual (Gujarati / Hindi / English) consumer creative tool. |
| 6 | **Studymap** | ✅ verified (iOS JP + Android, publisher Remody Inc., Tokyo) | Japanese ed-tech; group-sync sessions; international client. |

Featured swap candidates if you want a different mix:
- **KGK HRMS** (more recent / current-employer weight)
- **BookMrk** (real consumer brand, but no live store listing)
- **Havitglam** (verified Play Store, consumer lifestyle)
- **Marline Media** (canvas + print-ready exports, real brand but no store listing)

---

## 6. Full project order on `/work` (all 19)  *(updated after Round 2 + user confirmations)*

Verified leads, then brand-verified-only, then internal/private. Every project still gets a case-study page; only the badge changes.

| # | Project | Status | Stores / brand / link |
|---|---|---|---|
| 1 | **KGK Buy Diamonds** | ✅ verified | iOS + Android · kgkdiamonds.com |
| 2 | **KGK HRMS** | ✅ verified | Android only (iOS internal) |
| 3 | **Lili — Health Data Assistant** | ✅ verified | iOS · APKPure mirror for Android (Play Store unlisted) |
| 4 | **Foresite** (Ukko Agro) | ✅ verified | iOS CA + Android · publisher Ukko Agro Inc., Toronto |
| 5 | **Studymap** | ✅ verified | iOS JP + Android · publisher Remody Inc., Tokyo |
| 6 | **Locket** | ✅ verified | APKPure mirror (was on Play Store, now unlisted) |
| 7 | **Lux ECards** | ✅ verified | Android · publisher Verdad IT |
| 8 | **Havitglam** | ✅ verified | Android · publisher onezlabs/1zlabs (iOS likely "Largo" on KR store) |
| 9 | **Tarot Cat** | ✅ verified | Android · publisher onezlabs/1zlabs (iOS likely "MyTarot" on KR store) |
| 10 | **Today's Quote** | ✅ verified | Android · publisher onezlabs/1zlabs ("Today's Quote — Be Inspired", has leaderboard mini-game → explains "2D-Game" tag) |
| 11 | **Physio Mobile** | ✅ verified | iOS + Android · publisher Robin Brunner |
| 12 | **BookMrk** | 🟡 brand verified | bookmrk.in (apps not in stores) |
| 13 | **BookMrk-Delivery** | 🟡 companion | (apps not in stores) |
| 14 | **Marline Media** | 🟡 brand verified (app delisted) | marlinemedia.com (Wayback evidence app existed; no live link) |
| 15 | **Synergy** | ⚠️ unlisted / likely removed | No public link. Frame as "Match-making & dating, client project." |
| 16 | **Setera TPMS** | ⚠️ internal / B2B | No public link. |
| 17 | **Warden Tracker** | ⚠️ internal / B2B | No public link. |
| 18 | **CareShare** | ⚠️ likely removed | No public link. |
| 19 | **Radio Station** | ⚠️ early project | No public link. |

**Optionally:** items 18 (Today's Quote) and 19 (Radio Station) could be tucked into a "Earlier work / explorations" strip as small cards rather than full case studies. Default: full case studies for all 19.

---

## 7. Confirmations — status after your replies

| # | Project | Outcome |
|---|---|---|
| 1 | Locket (io.locket) | ❌ Not yours. Round 2 found the real one — **APKPure mirror under `io.locket` published by Wanderlust Inc.** Was on Play Store, now delisted. |
| 2 | Lili | ✅ Confirmed yours. Round 2 confirms iOS GB listing live; Android unlisted from Play Store, APKPure mirror works. |
| 3 | Havitglam + Tarot Cat | ✅ Both for onezlabs/1zlabs. |
| 4 | Lux ECards | ✅ Verdad IT confirmed. |
| 5 | Physio Mobile | ✅ Robin Brunner client confirmed. |

**One remaining open question** (won't block the build):

- **Today's Quote** — Round 2 couldn't locate the right app even with deeper search. Your old portfolio tagged it "2D-Game" which is unusual for a quote app — was there a small game inside? Anything that would help identify it (publisher name, year, target country)? If nothing comes to mind, I'll list it as a small early Flutter project with no store badge — same approach as Radio Station.

---

## 8. Design direction — recommended

### Concept A — "Premium engineer's portfolio" *(recommended)*

A confident, refined design that says senior + product-minded. Distinctive but never gimmicky.

- **Typography**
  - Display: **Fraunces** (variable serif with character — used for the hero name, project titles)
  - Body: **Inter** (variable, neutral)
  - Mono: **JetBrains Mono** (code, technical metadata, the resume page)
- **Color tokens** (used as Tailwind theme + CSS variables, so light/dark switch is one prop)

  | Token | Light | Dark |
  |---|---|---|
  | `bg` | `#FAFAF7` warm off-white | `#0B0B0F` near-black |
  | `surface` | `#FFFFFF` | `#16161B` |
  | `text` | `#0B0B0F` | `#F4F4F5` |
  | `muted` | `#5C5C66` | `#A0A0AA` |
  | `accent` | `#6D28D9` deep amethyst | `#A78BFA` softer violet |
  | `accent-hover` | `#5B21B6` | `#C4B5FD` |
  | `border` | `#E5E5E5` | `#27272A` |

  The accent is a single, restrained violet — a nod to your existing GitHub gradient (`#667eea → #764ba2`) but pulled in tighter. Project cards re-use the old portfolio's pastel category chips (mint, lilac, peach, sky) as 5%-opacity card-corner accents — that's the one place we cash in your existing identity.

- **Motion** (all behind `prefers-reduced-motion`)
  - Sections fade-up 8px / 250ms on scroll into view.
  - Project cards lift 2px + soft shadow on hover.
  - View Transitions between work-index → case study (native browser API via Astro).
  - **No** auto-rotating carousels, no custom cursor, no parallax. (Your old portfolio had a Swiper autoplay — we kill it.)

- **Layout**
  - Container max 1100px; long-form copy at ~680px line length.
  - Asymmetric hero (text-left, accent slab right).
  - Project grid: 2-column on desktop, 1-column on mobile. Cards 4:3 with the screenshot above the fold.

### Concept B — "Engineer's notebook" *(runner-up — only if you want more developer-y)*

- IBM Plex Mono for headlines + Inter for body.
- Near-black background with a warm amber accent (`#F59E0B`).
- Subtle ASCII dividers, code-block flourishes.
- Reads as more dev-tools / systems-engineer, less product-led.

### Concept C — "Editorial" *(not recommended)*

- Big serif headlines, narrow text columns, mostly black + white + 1 muted accent.
- Feels journalistic — would work for a writer but undersells "I ship mobile apps."

**Default I'll build:** Concept A. Tell me to swap if you'd rather B.

---

## 9. Performance, SEO & accessibility targets

| Category | Target | How |
|---|---|---|
| Lighthouse Performance | ≥ 95 (mobile) | Astro zero-JS pages, optimized images via Sharp. |
| Lighthouse SEO | 100 | Meta tags per page, OG images, JSON-LD, sitemap. |
| Lighthouse Accessibility | ≥ 95 | Semantic HTML, visible focus, AA contrast on all text/background pairs. |
| LCP | < 1.8s | Hero image optimized + preloaded. |
| CLS | < 0.05 | Explicit image dimensions; no late-loading layout shifts. |
| Color contrast | 4.5:1 body, 3:1 large text | Tested against both themes. |
| Reduced motion | All animations gated | `@media (prefers-reduced-motion: reduce)`. |
| Keyboard nav | Full | Tab order verified, skip-to-content link. |
| Screen-reader | Alt text on every image (project name + screenshot description) | Generated from MDX frontmatter. |

Structured data emitted:
- `<script type="application/ld+json">` Person on `/`
- `<script type="application/ld+json">` CreativeWork on each `/work/[slug]`

---

## 10. Repo layout (what I'll build at the project root)

```
mitul/                                  (this directory)
├─ astro.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
├─ package.json
├─ public/
│  ├─ resume/mitul-vaghasiya-resume.pdf  (copy of your inputs/resume PDF)
│  └─ work/<slug>/*.png                  (project screenshots — copies from inputs/)
├─ src/
│  ├─ content/
│  │  ├─ config.ts                       (Zod schema for case-study frontmatter)
│  │  └─ work/
│  │     ├─ kgk-buy-diamonds.mdx
│  │     ├─ kgk-hrms.mdx
│  │     ├─ lili.mdx
│  │     ├─ … (19 total)
│  ├─ components/
│  │  ├─ Nav.astro
│  │  ├─ Hero.astro
│  │  ├─ AboutSection.astro
│  │  ├─ SkillsSection.astro
│  │  ├─ ExperienceTimeline.astro
│  │  ├─ ProjectCard.astro
│  │  ├─ ProjectGrid.astro
│  │  ├─ StatusBadge.astro
│  │  ├─ LinkChip.astro
│  │  ├─ ThemeToggle.astro
│  │  ├─ ContactForm.astro
│  │  └─ Footer.astro
│  ├─ layouts/
│  │  ├─ Base.astro
│  │  └─ CaseStudy.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ work/index.astro
│  │  ├─ work/[slug].astro               (renders MDX)
│  │  ├─ resume.astro
│  │  └─ contact.astro
│  ├─ styles/
│  │  ├─ globals.css
│  │  └─ tokens.css
│  └─ data/
│     ├─ profile.ts                      (single source for name, links, skills)
│     └─ experience.ts
├─ inputs/                                (kept untouched — your raw materials)
├─ PROFILE.md                             (compiled profile — kept for reference)
├─ PORTFOLIO_PLAN.md                      (this file)
├─ RESEARCH.md                            (verification audit trail)
└─ README.md                              (build/deploy instructions, written in Phase 5)
```

---

## 11. What I'll do in Phase 4 (the build)

In order, once you approve:

1. Scaffold Astro + Tailwind + MDX + Content Collections.
2. Set up the design tokens, theme toggle, base layout.
3. Build the component library (Hero, Skills, ProjectCard, StatusBadge, etc.).
4. Wire up `src/data/profile.ts` from PROFILE.md (no other source of truth).
5. Create one MDX file per project (19 total). Each starts populated with everything I know and explicit TODOs for what I don't.
6. Build `/`, `/work`, `/work/[slug]`, `/resume`, `/contact` pages.
7. Copy your screenshots from `inputs/old-portfolio/portfolio-next/public/portfolio/<slug>/*.png` into `public/work/<slug>/*.png`.
8. For projects without screenshots, ship a clean SVG placeholder (project name + status, no fake fidelity).
9. Add JSON-LD, OG images, sitemap, robots.
10. Run Lighthouse and pass the targets.
11. Write `README.md` and the "needs from me" punch list.

---

## 12. Punch list — things you'll still need to provide for the site to be fully shipped

(I'll repeat this in Phase 5; previewing it here so you can start gathering.)

**Confirmations** (§7 above — 5 items).

**Copy review**
- Approve / edit the About-section copy I'll draft from your resume summary.
- Approve / edit the hero headline + value-prop sentence.
- Approve / edit each case study's "Problem / My role / Approach" once written.

**Personal info choices**
- Phone number on public site? (yes / no / contact-form-only)
- Which socials to show? (Instagram / Stack Overflow / Buy Me a Coffee / `MR0100-zz` / Facebook)
- The Pro5 certification URL.
- Promotion dates at Sadguru Soft (Jr → Flutter → Expert → Senior).
- The 95%+ crash-free / 99.9% uptime metric — keep generic in About, or tie it to a specific project?

**Assets you don't yet have here**
- Screenshots / app icons for: KGK Buy Diamonds, KGK HRMS, Locket, Setera TPMS, Warden Tracker, Studymap.
- A current professional headshot (the only one I have is `inputs/old-portfolio/MR0100/assets/mitul.jpg` — fine but a fresh one is better if you have it).
- Higher-resolution versions of any existing project screenshots, if you've got them.
- App icons (1024×1024) for each project, if available — used in the case-study hero.

**Phase 2 unknowns (won't block build, may block "launch")**
- "2D-Game" tag on Today's Quote — typo or genuine? (If typo, I'll drop it.) Plus: any hint you can give on which app Today's Quote was, since Round 2 couldn't find it.
- CareShare + Radio Station are unverified but you confirmed earlier you want them included — I'll write case studies for both with the honest "no longer in stores" label.

---

## 13. Open trade-offs you can override

| Decision I made | Alternative |
|---|---|
| Astro + Tailwind | Next.js (App Router) + Tailwind — say so and I'll swap. |
| Concept A (premium) | Concept B (engineer's notebook) — say "B" and I'll redesign. |
| Featured projects = 6 | 4 (more curated) or 8 (more breadth). |
| Order on `/work` by verification confidence | Could order chronologically (newest first) or by category. |
| Include Today's Quote + Radio Station as full case studies | Group them in an "Earlier work" strip. |
| Single contact form on `/contact` | Inline contact on home only, no separate page. |
| Astro View Transitions on/work navigation | Plain SSR navigation (simpler, slightly less polished). |
| Plausible analytics deferred | Add it now if you have a Plausible account / want PostHog. |

---

## 14. Ready to build?

When you reply, give me:
1. **Approve / edit any of §1, §5, §6, §8, §13** (stack, featured set, full order, design concept, trade-offs).
2. **Answer the 5 confirmations in §7** (Locket, Lili, Havitglam+Tarot Cat, Lux ECards, Physio Mobile).
3. Say **"build"**.

I'll then run Phase 4 end-to-end and Phase 5 (README + final punch list).
