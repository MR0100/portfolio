# AUDIT CHECKLIST — Portfolio fixes

> Action list generated from the 2026-06-05 content + UX audit. Source critique lives in chat; this file is the working checklist.
>
> ## CURRENT SCOPE: CONTENT ONLY
>
> Focus right now: **copy quality, factual accuracy, metadata, naming/wording, case-study narratives, content gaps, missing assets.** No layout changes, no type hierarchy changes, no animation work, no component restructuring.
>
> Anything that touches CSS positioning, animation, sticky behavior, ambient effects, sectioning, or visual hierarchy → parked in the **Deferred — design pass** section at the bottom.
>
> **Conventions:** `- [ ]` = open · `- [x]` = done · `- [~]` = in progress · `- [-]` = decided to skip · `- [⏸]` = deferred to design pass
>
> **Coordinate with the other session before editing shared files.**

---

## ⏸️ Current state — last touched 2026-06-08 (Mon)

### What's landed and verified in the browser
- **Phase 0** — all 13 content decisions made. 5 design decisions parked for later.
- **Phase 1** — critical content/bug fixes (contact form stripped, Pro5 link wired, footer year dynamic, phone removed, lab pages noindex, Resume page TODO cleaned). Carryover: OG PNG.
- **Phase 2** — naming + copy sweep complete. Spec Sheets / Datasheet / Catalog / Vol. I-III vocabulary dropped everywhere except `Plate XX` on case studies (per 0.1). Title tags include role on every page. Story pull-quote rewritten with derived counts. Numbers stats rebalanced.
- **Round 1 + 2 link research** — 14 of 19 case studies enriched with real store metadata. Verified count: 11 → 13.
- **Phase 3 narrative polish** _(2026-06-08)_ — 3 thin case studies (careshare, synergy, warden-tracker) expanded with substantive prose. Other 16 already substantive or intentionally thin.
- **Per-MDX TODO cleanup** _(2026-06-08)_ — 9 of 19 files had resolved `todos:` pruned; 10 retain genuine open items.
- **Phase 4 SEO/metadata** _(2026-06-08)_ — `/resume` and `/contact` descriptions polished from generic placeholders to role-aware sentences. Status-badge legend added under stats grid on `/work`. Sitemap `/lab/*` exclusion verified. JSON-LD already at `MobileApplication` tier (better than original spec).

### What's blocked on the user
1. **Play Store install bands + ratings** for the 9 verified Play Store apps — see `PROJECT_LINKS.md` template. Once provided, I wire them into each Results section in a single batched pass.
2. **1200×630 OG PNG** at `public/og-default.png` — I can't generate PNG. Once dropped, I swap the reference in `Base.astro`.
3. ~~**`site` URL confirmation**~~ — ✅ confirmed 2026-06-08: `https://mitulvaghasiya.com` is the working URL for now.
4. **`/uses` page data** (optional Phase 6) — your setup: editor, shell, hardware (laptop / monitor / phone / keyboard), daily tools. Without this, the page can't be built with real content.
5. **(Optional)** Havitglam KR iOS "Largo 라르고" URL.
6. **(Optional)** Tier 2/3 metrics for any project (crash-free %, retention, customer count).

### What's parked for later
- **Phase 6 additions** beyond `/uses` — talks/press section (only if applicable), blog or `/notes` (deferred design styling).
- **Design pass** — hero hierarchy (0.2), Picks layout (0.3), ambient effects (0.4), section order (0.13), headshot placement (0.12), animation audit. Kicks in once content is locked.

### How to resume
- Read the `Decisions log` section (bottom) for the most recent context.
- Tell me which blocked item you have data for, or just say "continue" and I'll work on whatever isn't blocked.

---

---

## Workflow

1. Answer **Phase 0** content decisions inline (one question at a time via chat).
2. Land **Phase 1** (risk-free content/bug fixes) in parallel.
3. Phases 2–6 roll in order. Each phase is a checkpoint — land, review, move on.
4. Design pass is a separate future phase — do not mix.

---

## Phase 0 — Content decisions (BLOCKING)

Answers logged as they come in. Each decision unlocks specific tasks in Phase 2+.

| #    | Decision                                                                                                                                        | Choice                                                                                                                                                                                                                                                  |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1  | Specimen / Datasheet / Catalog vocabulary — `drop entirely` / `keep "Plate 01" on case studies only` / `keep all`                               | **Keep "Plate 01" on case studies only** ✅                                                                                                                                                                                                             |
| 0.5  | Pro5 cert — `provide URL: __________` / `drop until I have it`                                                                                  | **URL: https://drive.google.com/file/d/1O7zn6UVjArLrAM5f_UywToehhe3oCe3-/view?usp=sharing** ✅                                                                                                                                                          |
| 0.6  | Phone number — `publish on /contact` / `gate behind form only` / `remove from public source`                                                    | **Remove from profile.ts entirely (hide everywhere)** ✅                                                                                                                                                                                                |
| 0.7  | Contact form backend — `Formspree, ID: __________` / `strip to mailto + LinkedIn` / `Resend serverless`                                         | **Strip the form — mailto + LinkedIn / GitHub / X buttons only** ✅                                                                                                                                                                                     |
| 0.8  | Story pull-quote — `keep generic` / `rewrite specific (Diamonds / Toronto / Tokyo)` / `custom direction: __________`                            | **Numbers-led, Draft A: "Six years, _nineteen apps shipped_, _eleven still live_ in the stores."** ✅                                                                                                                                                   |
| 0.9  | PostgreSQL label in skills — `Strong` / `Learning` (pick one, not both)                                                                         | **Strong — drop from currentlyLearning** ✅                                                                                                                                                                                                             |
| 0.10 | `/lab/*` pages — `noindex` / `move out of src/pages/` / `delete`                                                                                | **Add `noindex` — keep URLs accessible to you, hide from Google** ✅                                                                                                                                                                                    |
| 0.11 | Real case-study metrics — `I have numbers for: __________` / `none, write all as "metrics private, distribution verified"`                      | **DEFERRED — user will gather Tier 1 (store stats) + Tier 2/3 (where remembered) per-project numbers and reply in a follow-up. Then we redesign Results sections together.** ⏸                                                                          |
| 0.12 | Headshot — `use inputs/old-portfolio/MR0100/assets/mitul.jpg now` / `wait for fresh photo` / `skip headshot entirely`                           | **Image available in inputs/ — display placement deferred (sizing, page, where) is a design discussion** ⏸                                                                                                                                              |
| 0.14 | Client/project name anonymity — confirm which can be public: `Synergy` / `Setera (TPMS partner)` / `Warden Tracker client` / `CareShare client` | **Synergy: use name publicly · Setera: anonymize → "automotive hardware partner, TPMS sensor utility" · Warden Tracker: anonymize → "geo-fencing system, B2B client" · CareShare: anonymize → "consumer health-care client project"** ✅                |
| 0.15 | KGK Diamonds headline metric — `50,000+ certified diamonds` / `120 years` / `neither` / `other: __________`                                     | **Use both — "120-year diamond house, 50,000+ certified inventory"** ✅                                                                                                                                                                                 |
| 0.16 | Today's Quote — confirm the in-app "2D-Game" mechanic (best guess: leaderboard mini-game)                                                       | **Leaderboard mini-game tied to quote engagement** ✅                                                                                                                                                                                                   |
| 0.17 | "Currently learning" list accuracy — currently `Rust / Server-side Dart / PostgreSQL`. Edit?                                                    | **Keep `Rust / Server-side Dart` after PostgreSQL removal** ✅                                                                                                                                                                                          |
| 0.18 | Voice/tone for case-study Results rewrites — `precise technical` / `narrative storytelling` / `bullet-only`                                     | **Keep current — precise technical prose** ✅                                                                                                                                                                                                           |
| 0.19 | Sadguru Soft promotion dates (Jr → Flutter → Expert → Senior) — provide or skip                                                                 | **No exact dates. Foreground the progression as a strong sentence right under the role title (not buried in highlights). Copy: "Promoted four times in 5+ years: Jr Flutter Dev → Flutter Dev → Expert Flutter Dev → Senior Mobile App Developer."** ✅ |
| 0.20 | Resume `bioLong[0]` says "five years at Sadguru Soft", site headline says "6+ years" — reconcile how?                                           | **Keep "6+" headline. Bump to "7+" once 7-year mark hits. Tighten `bioLong[0]` "five years" → "5+ years" for precision (actual: 5y 4m at Sadguru, 1y 3m at KGK = 6y 7m total).** ✅                                                                     |

---

## Phase 1 — Critical content/bug fixes (no decisions, low risk)

- [x] Contact form stripped — replaced with mailto + LinkedIn + GitHub + Twitter/X button row (per 0.7). Panel header changed to "Reach out", verified in browser. → [src/pages/contact.astro](src/pages/contact.astro)
- [x] TODO banner on `/contact` removed (form gone). → [src/pages/contact.astro](src/pages/contact.astro)
- [x] Footer year dynamic — `new Date().getFullYear()`, renders "© 2026" today. → [src/components/Footer.astro:4](src/components/Footer.astro)
- [x] Resume page "TODO: Pro5 verification link" rendering removed. Pro5 link now wired and clickable (Drive URL). → [src/pages/resume.astro](src/pages/resume.astro)
- [x] Phone removed from `profile.ts` (no references in codebase, safe drop). → [src/data/profile.ts](src/data/profile.ts)
- [x] Lab pages noindex — both `/lab/bg-variants` and `/lab/project-variants` already have `<meta name="robots" content="noindex" />` in their head. Sitemap (`sitemap.xml.ts`) explicitly enumerates only `/`, `/work`, `/resume`, `/contact` + work slugs — lab pages excluded by construction.

**Phase 0 cascade applied in same pass:**
- [x] PostgreSQL dropped from `currentlyLearning` (0.9) — home Now console now shows "Rust / Server-side Dart"
- [x] `bioLong[0]` tightened "five years" → "5+ years" (0.20)
- [x] Experience highlights[0] foregrounded — "Promoted four times in 5+ years: Jr Flutter Dev → Flutter Dev → Expert Flutter Dev → Senior Mobile App Developer." (0.19)
- [x] Pro5 cert URL wired into `certifications[0].url` (0.5)

**Phase 1 carryover (needs you, not me):**
- [ ] Replace `og-default.svg` with 1200×630 OG PNG — I can't generate PNG. Drop a generated image at `public/og-default.png` and I'll swap the reference in `Base.astro:21`.

---

## Phase 2 — Naming + copy sweep (content only)

Wording changes only. No type sizing, no hierarchy, no layout work.

### Nav + page chrome (text labels only)

- [x] Nav labels: `00 — Index / 01 — Catalog / 02 — Datasheet / 03 — Contact` → `Home / Work / Resume / Contact` → [src/components/Nav.astro](src/components/Nav.astro)
- [x] Nav tagline `Spec. Sheets Vol. I` removed → [src/components/Nav.astro](src/components/Nav.astro)
- [x] `/work` H1 `Catalog.` → `Work.` → [src/pages/work/index.astro](src/pages/work/index.astro)
- [x] `/work` ribbon → `Work / N projects` → [src/pages/work/index.astro](src/pages/work/index.astro)
- [x] `/work` Base `title=` prop → `Work`, description updated
- [x] `/work` SpecimenHeading titles → `Atlas` (was `Plate · atlas of work`) and `All projects` (was `Catalog · specimen index`)
- [x] `/work` sort label `Order` → `Featured`
- [x] `/resume` kicker `Curriculum vitae` → `Resume` (H1 stays as the name; the kicker now carries the "Resume" word for SEO/searchability)
- [x] `/resume` ribbon → `Resume · 2026.06` → [src/pages/resume.astro](src/pages/resume.astro)
- [x] `/resume` Base `title=` prop → `Resume`, description updated
- [x] `/resume` section headings → `Experience` / `Skills` / `Education` / `Contact` (was `travel log / atlas key / Schooling / channels`)
- [x] `/resume` "Specimens shipped here" → "Projects shipped here"
- [x] `/contact` ribbon → drop `Vol. III`, replace right-side `Initiate transmission` → `Email is fastest`
- [x] Case-study ribbon `Specimen Sheets · Vol. I · Plate XX` → keep `Plate XX` only; `← Catalog` → `← Work` → [src/layouts/CaseStudy.astro](src/layouts/CaseStudy.astro)
- [x] Case-study right-rail `Specimen` label → `Plate` (matches the ribbon)
- [x] Footer subtitle `Specimen Sheets · Atlas of Work · Vol. I` removed → [src/components/Footer.astro](src/components/Footer.astro)
- [x] Title tag pattern → includes role on every page (`Mitul Vaghasiya — Senior Mobile Engineer & Development Lead`) → [src/layouts/Base.astro](src/layouts/Base.astro)

### Micro-copy

- [x] CTAs — `See the work →` → `View work →`, `Read the resume` → `Read resume` → [src/components/home/Lead.astro](src/components/home/Lead.astro)
- [x] Contact form submit — N/A; form was stripped in Phase 1 per 0.7
- [x] `/work` sort label `Order` → `Featured` → [src/pages/work/index.astro](src/pages/work/index.astro)
- [x] Now console header — `//` separator → `·` (cleaner)
- [x] Now `Shipping` subtitle — `B2B diamond trading · iOS + Android` → `Live in app stores · iOS + Android` (decoupled from KGK Diamonds; correct for any KGK shipping project)

### Phase 0 cascade items (rolled in alongside Phase 2)

- [x] Story pull-quote rewritten with Draft A — copy now `Six years, <accent italic>{N} apps shipped</accent italic>, <accent italic>{verified} still live</accent italic> in the stores.` Numbers derived from `getCollection("work")` so they auto-stay-in-sync. Word forms via a `numberWord()` helper. → [src/components/home/Story.astro](src/components/home/Story.astro)
- [x] Numbers stats rebalanced — lead with `Live in app stores` (most verifiable), then `Cities served / Across N continents`, then `Apps shipped`, then `Years in the field`, then `Industries`. Continents now derived via a region→continent map (Asia / North America / Europe / South America = 4 today). → [src/components/home/Numbers.astro](src/components/home/Numbers.astro)

### Phase 2 leftovers (intentionally not touched)

- `src/styles/globals.css` still has dev-only comments (`/* Datasheet stat */`, `/* Specimen hairline */`, etc.) — not visible to users; updating them would be a refactor of class-name conventions, deferred to design pass.
- The case-study CaseStudy.astro `Gallery` heading still says `${N} plates` in its trailing — kept because "plates" here means screenshots, which reads cleanly alongside the per-case-study `Plate XX` numbering.

---

## Phase 3 — Content rewrites

Drafted in chat, approved by you, then committed.

### Home

- [x] Rewrite pull-quote in Story (per 0.8) — landed in Phase 2 with derived counts → [src/components/home/Story.astro](src/components/home/Story.astro)
- [x] Rebalance Numbers stats — landed in Phase 2 → [src/components/home/Numbers.astro](src/components/home/Numbers.astro)
- [x] Decouple "Shipping" subtitle from KGK Diamonds — landed in Phase 2 → [src/components/home/Now.astro](src/components/home/Now.astro)
- [x] Resolve `currentlyLearning` ↔ `skillGroups.PostgreSQL` contradiction per 0.9 — landed in Phase 1 → [src/data/profile.ts](src/data/profile.ts)
- [x] Reconcile "five years at Sadguru Soft" vs "6+ years" framing per 0.20 — landed in Phase 1 → [src/data/profile.ts](src/data/profile.ts)
- [x] Update "Currently learning" list per 0.17 — landed in Phase 1 → [src/data/profile.ts](src/data/profile.ts)

### Case-study Results pass (19 files)

Rewrite Results section per 0.11 + 0.18. **Status: all 19 case studies have had their non-badge Results sections enriched via Round 1+2 link research, anonymity decisions, or the 2026-06-08 narrative polish pass.** Per-file Play Store metric injection still pending (blocked on user-supplied install bands + ratings — see queue item #1).

- [x] [kgk-buy-diamonds.mdx](src/content/work/kgk-buy-diamonds.mdx) — Round 1 metrics + 0.15 metric line applied; pending project-specific crash-free number (open `todos:` line in file).
- [x] [kgk-hrms.mdx](src/content/work/kgk-hrms.mdx) — Round 2 Results enrichment with store-listing positioning.
- [x] [lili.mdx](src/content/work/lili.mdx) — Round 1 metrics + APKPure framing.
- [x] [foresite.mdx](src/content/work/foresite.mdx) — Round 1 metrics + 2026-06-06 agronomist/grower softening.
- [x] [studymap.mdx](src/content/work/studymap.mdx) (formerly remody) — 2026-06-06 rebrand documented in body; brand site link only, store URLs removed.
- [x] [locket.mdx](src/content/work/locket.mdx) — Round 1 metrics, delisting + APKPure framing.
- [x] [lux-ecards.mdx](src/content/work/lux-ecards.mdx) — Round 2 Results enrichment.
- [x] [havitglam.mdx](src/content/work/havitglam.mdx) — Round 2 Results enrichment with store-listing positioning. KR "Largo 라르고" URL still open in `todos:`.
- [x] [tarot-cat.mdx](src/content/work/tarot-cat.mdx) — Round 2 with confirmed MyTarot iOS rebrand (4.7★ / 2,100 reviews).
- [x] [todays-quote.mdx](src/content/work/todays-quote.mdx) — Round 2 Results enrichment, 0.16 mechanic confirmed in body.
- [x] [physio-mobile.mdx](src/content/work/physio-mobile.mdx) — Round 1 metrics.
- [x] [bookmrk.mdx](src/content/work/bookmrk.mdx) — Round 1 with APKPure mirror, status upgrade to verified.
- [x] [bookmrk-delivery.mdx](src/content/work/bookmrk-delivery.mdx) — Round 1 with parent-app framing.
- [x] [marline-media.mdx](src/content/work/marline-media.mdx) — Round 1 with APKPure mirror, status upgrade.
- [x] [synergy.mdx](src/content/work/synergy.mdx) — 0.14 anonymity applied (body already generic); 2026-06-08 narrative polish.
- [x] [setera-tpms.mdx](src/content/work/setera-tpms.mdx) — 2026-06-06 0.14 partially reversed: Setera identity went public; Results updated.
- [x] [warden-tracker.mdx](src/content/work/warden-tracker.mdx) — 0.14 applied; 2026-06-08 narrative polish.
- [x] [careshare.mdx](src/content/work/careshare.mdx) — 0.14 applied; 2026-06-08 narrative polish.
- [x] [radio-station.mdx](src/content/work/radio-station.mdx) — intentionally thin per 0.18 voice + own narrative ("interesting work is everything that came after").

### Per-MDX inline `todos:` cleanup

Each case study has a `todos:` array surfaced as a visible "Editor's notes" amber box. Once content rewrites land, these should be either resolved (deleted) or moved to internal-only notes.

- [x] Walk every MDX, resolve or remove `todos:` entries → 19 files (9 pruned, 10 genuine open items remain — dates, asset gaps, optional decisions)

---

## Phase 4 — Content polish (SEO, metadata, copy)

- [x] Per-page `description` on `/work`, `/resume`, `/contact` — `/work` was already substantive; `/resume` and `/contact` polished from generic placeholders to specific, role-aware sentences (2026-06-08).
- [x] Title tag includes role on every page (also covered by Phase 2)
- [x] Status-badge legend copy — added under the stats grid on `/work`: "Verified live in a public store today · Brand-verified client brand confirmed, store listing delisted or unlisted · Unlisted previously listed, now removed · Internal B2B or staff-only, never on public stores · Early pre-2021 small project." (2026-06-08).
- [x] Set real `site` URL in `astro.config.mjs` and `src/pages/sitemap.xml.ts` — user confirmed 2026-06-08: `https://mitulvaghasiya.com` is the working URL for now. Existing config in [astro.config.mjs:6](astro.config.mjs) and [sitemap.xml.ts:4](src/pages/sitemap.xml.ts) is correct. Revisit if/when a different domain is chosen.
- [x] Verify `/sitemap.xml` excludes `/lab/*` after 0.10 decision — confirmed: `sitemap.xml.ts` enumerates only `["/", "/work", "/resume", "/contact"]` + work slugs by construction. Lab pages excluded.
- [x] CreativeWork JSON-LD — already at `MobileApplication` schema (a `SoftwareApplication` subtype) when an app-store/Play/APKPure link exists; falls back to `CreativeWork` otherwise. Better than spec'd in the original task. → [src/components/CreativeWorkJsonLd.astro:20](src/components/CreativeWorkJsonLd.astro)

---

## Phase 5 — Asset gaps

For each delivered asset: flip `needsAssets: false` in the matching MDX.

- [ ] KGK Buy Diamonds — hero + 3–5 screenshots → `public/work/kgk-buy-diamonds/`
- [ ] KGK HRMS — hero + 2–3 → `public/work/kgk-hrms/`
- [ ] Locket — hero + 3 → `public/work/locket/`
- [ ] Studymap — hero + 3 (JP UI is fine) → `public/work/studymap/`
- [ ] Setera TPMS — any available → `public/work/setera-tpms/`
- [ ] Warden Tracker — any available → `public/work/warden-tracker/`
- [ ] 1200×630 OG PNG for link previews → `public/og-default.png` (replace the SVG that doesn't render on Slack/LinkedIn/iMessage)
- [⏸] Headshot placement — image available in `inputs/`; where/how to show TBD in design pass
- [ ] Optional: 1024×1024 app icons for case-study heroes

---

## Phase 6 — Optional content additions

- [ ] `/uses` page (your tools, IDEs, hardware) — content-only addition
- [ ] Talks / press / writing section if you have any
- [ ] Blog or `/notes` — content collection setup (deferred design styling)

---

## DEFERRED — Design / layout / animation pass

Decisions logged here for when we get to the design phase. **Do not implement these in the current content pass.**

| #    | Decision                                                                                                                | Choice / status                                                                               |
| ---- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 0.2  | Hero name-vs-role hierarchy                                                                                             | **Decided: name-first, implementation deferred** ⏸                                            |
| 0.3  | Selected Work layout (sticky carousel vs grid vs hybrid)                                                                | **Open — defer to design pass** ⏸                                                             |
| 0.4  | Ambient effects (drones / scanlines / glitch / scramble / parallax / atmosphere / section FX) — keep all, trim, or cut? | **Open — defer to design pass** ⏸                                                             |
| 0.13 | Home section order                                                                                                      | **Keep current (deferred — current order shares parallax grid-zone across Lead/Now/Story)** ⏸ |

Design-pass open work items (move from Phase 2/4 to here):

- [⏸] Flip hero type hierarchy (name large, role smaller) — [src/components/home/Lead.astro:31-40](src/components/home/Lead.astro)
- [⏸] Reorder home sections — [src/pages/index.astro](src/pages/index.astro)
- [⏸] Audit ambient effects, disable cuts
- [⏸] Hide `BackgroundFX` in print stylesheet
- [⏸] Mobile QA — sticky Picks on iOS Safari, rotator CLS, world map under 375px
- [⏸] Picks layout decision per 0.3
- [⏸] Skills surface decision (searchable on home vs resume)
- [⏸] Status-badge tooltip / hover design

---

## Decisions log

> Append non-trivial decisions with date + reason so future passes don't relitigate.

- _2026-06-05_ — Checklist created from chat audit.
- _2026-06-05_ — **0.1 decided: Keep "Plate 01" numbering on case studies only.** Drop "Specimen Sheets / Datasheet / Catalog / Atlas / Vol. I-III" from nav, page H1s, ribbons, footer, and section headings. Reason: vocabulary overwhelms the name+role on first paint; recruiter speed-scan needs plain labels. Cascade: Phase 2 nav + page chrome edits unblocked.
- _2026-06-05_ — **0.2 decided (impl deferred): Flip hero to name-first.** Name large, role smaller. Implementation moved to design pass because it touches type sizing / layout.
- _2026-06-05_ — **0.13 deferred: Keep current home section order.** Reason: current order shares the `.grid-zone` dot-grid parallax across Lead/Now/Story and reveal staggers depend on the sequence. Reordering = design pass.
- _2026-06-05_ — **Scope tightened: CONTENT ONLY for current pass.** Per user direction, all layout / animation / hierarchy changes moved to a future design pass. Phase 2 now contains only wording/labels/copy. Design decisions (0.3, 0.4) deferred. Phase 4 split — content polish stays, layout polish moved out.
- _2026-06-05_ — **0.9 decided: PostgreSQL is Strong, drop from "Currently learning".** Reason: production usage confirmed. Cascade: `profile.ts` edits — keep Strong in skillGroups Data block; remove from `currentlyLearning` array.
- _2026-06-05_ — **0.17 decided: Keep `currentlyLearning = ["Rust", "Server-side Dart"]` after PostgreSQL is removed.** Two-item list reads as focused; matches GitHub README signal.
- _2026-06-05_ — **0.20 decided: Keep `yearsExperience: "6+"`.** Actual: 6 years 7 months total (5y 4m Sadguru + 1y 3m KGK as of 2026-06). User will manually bump to "7+" once they hit the mark. Sub-decision: tighten `bioLong[0]` "five years" → "5+ years" for precision consistency.
- _2026-06-05_ — **0.5 decided: Pro5 cert URL provided.** `https://drive.google.com/file/d/1O7zn6UVjArLrAM5f_UywToehhe3oCe3-/view?usp=sharing`. Wire into `certifications[0].url`. Heads-up: Drive links can be blocked on some corporate networks — consider mirroring as `/public/certifications/pro5-flutter.pdf` later for max reach. For now, the Drive link is the source.
- _2026-06-05_ — **0.6 decided: Remove phone number from profile.ts entirely.** Reason: not currently shown on the site anyway; leaking to repo scrapers buys nothing. Cascade: delete the `phone` field + TODO comment from `src/data/profile.ts:17`.
- _2026-06-05_ — **0.7 decided: Strip the contact form. Replace with mailto + LinkedIn + GitHub + X buttons only.** Reason: zero backend dependencies, no 3rd-party signups, recruiters prefer email. Cascade: rewrite `src/pages/contact.astro` form section as a button row; delete the Formspree form + TODO banner; mirror the home `GetInTouch.astro` button pattern.
- _2026-06-05_ — **0.10 decided: `noindex` the `/lab/*` pages.** Reason: keep accessible for personal reference but hide from search engines and the sitemap. Cascade: add `noindex={true}` prop to Base layout on each lab page; verify `src/pages/sitemap.xml.ts` excludes them.
- _2026-06-05_ — **0.12 deferred: Headshot.** Image available in `inputs/`. Display placement (which page, sizing, treatment) is a design decision — moved to design pass.
- _2026-06-05_ — **0.19 decided: No promotion dates, but foreground the progression.** Move the "Promoted from Jr → Flutter → Expert → Senior" bullet out of the highlights list and into a strong sentence directly under the role title in `experience[1]`. Copy: "Promoted four times in 5+ years: Jr Flutter Dev → Flutter Dev → Expert Flutter Dev → Senior Mobile App Developer." Renders both in `Track.astro` (home) and `/resume`. Cascade: data model in `profile.ts` may need a new `subtitle` field on `Role`, or just rework the highlights ordering.
- _2026-06-05_ — **0.11 deferred: Case-study metrics.** User to gather Tier 1 (Play Store install band + iOS/Android ratings + review count + last-updated date) for the 10 verified apps + any Tier 2/3 they recall. Then we co-rewrite Results sections. Until then, case-study Results pass in Phase 3 is BLOCKED — do not start MDX edits to Results sections until numbers land.
- _2026-06-05_ — **0.18 decided: Keep current voice — precise technical prose.** Existing voice (see Foresite, Lili) is editorial-but-technical, prose-leaning, reads as a senior engineer who writes. Continue across all 19 rewrites. No bullet-conversion, no narrative-storytelling shift.
- _2026-06-05_ — **0.8 decided: Numbers-led pull-quote.** Final copy: `Six years, <accent italic>nineteen apps shipped</accent italic>, <accent italic>eleven still live</accent italic> in the stores.` Replaces existing `"feel fast and don't fall over"` line in `Story.astro:11`. Two accent-italic emphasis points matches existing pattern. Numbers derived from `getCollection("work")` — same source as Numbers.astro, so they stay in sync.
- _2026-06-05_ — **0.15 decided: KGK Diamonds headline metric = both numbers.** Open the case study with "120-year diamond house, 50,000+ certified inventory." Heritage + scale in one line. Pays off into the engineering narrative about high-volume data grids.
- _2026-06-05_ — **0.16 decided: Today's Quote = leaderboard mini-game tied to quote engagement.** Public-evidence best-guess from store listing. Explains the legacy "2D-Game" tag in the old portfolio. Cascade: update `todays-quote.mdx` Overview/Architecture sections to mention the leaderboard mechanic.
- _2026-06-05_ — **0.14 decided: Per-project anonymity choices.** Synergy → keep product name publicly. Setera TPMS → anonymize as "automotive hardware partner, TPMS sensor utility" (drop `client: "Setera (automotive hardware partner)"` from frontmatter). Warden Tracker → anonymize as "geo-fencing system, B2B client" (drop client-revealing copy from MDX). CareShare → anonymize as "consumer health-care client project" (already has no `client:` field; clean up any name in body copy). Cascade: 4 MDX files updated.
- _2026-06-05_ — **Foresite role: agronomist-facing field tool (default).** Bundle ID `com.ukkoag.enterprise` matches the enterprise agronomist build. Case study to note in passing that Ukko ships a separate grower-facing companion.
- _2026-06-05_ — **Havitglam: cross-link iOS "Largo 라르고" on the case study.** Add iOS App Store URL to frontmatter links once researched.
- _2026-06-05_ — **Tarot Cat: cross-link iOS "MyTarot 마이타로" on the case study.** Add iOS App Store URL to frontmatter links once researched.
- _2026-06-05_ — **Marline Media: link APKPure mirror.** `https://apkpure.net/invitation-card-lenses-maker/com.marlinemedia.invitation.card.maker.filter.mm`. Update status from `brand-verified` → `verified` (now has a working install path), or keep `brand-verified` with APKPure as supplementary. Cascade: research APKPure for all other unlisted/internal apps too.
- _2026-06-05_ — **APKPure-first research heuristic (user-added).** For any app currently flagged `unlisted` / `brand-verified` / `internal`, check APKPure before treating as no-public-link. Candidates to check: Synergy, BookMrk, BookMrk Delivery, CareShare, Radio Station, KGK HRMS (iOS), Setera TPMS, Warden Tracker. Status upgrades possible if APKPure mirrors exist.
- _2026-06-06_ — **Round 1 link research complete (7 apps fetched, metrics now in MDX).** Schema mismatches fixed in 4 files. Status upgrades applied: Marline Media + BookMrk → `verified` (APKPure mirrors confirmed). Real metrics now in MDX for KGK Diamonds, Foresite, Lili, Locket, BookMrk, Marline Media, Physio Mobile. Verified count: 11 → 13.
- _2026-06-06_ — **0.14 partially reversed: Setera identity goes public.** User voluntarily added `setera.seg.br` link. Setera = Brazilian fleet-telemetry hardware company (STR-1010+ tracker, CANBUS, TPMS, driver-monitoring cameras). Updates: status `internal` → `verified`, `client: "Setera"`, added `publisher: "Setera (setera.seg.br)"`, `region: "South America"`, `country: "Brazil"`. Body + Results + Sources updated to name Setera and reference brand site. Verified count: 13 → 14.
- _2026-06-06_ — **Marline Media decision: keep case-study title "Marline Media", mention actual store title "Invitation Card & Lenses Maker" in body.** Already implemented in Results section rewrite.
- _2026-06-06_ — **Foresite decision: soften to neutral (agronomist + grower).** Updated Challenges bullet — replaced strict "agronomist tool" claim with "enterprise build serves both agronomist and grower workflows across the field decision-making cycle." Reason: store-listing description leans grower-facing; bundle ID `enterprise` doesn't pin to one persona.
- _2026-06-06_ — **KGK Diamonds: 95% crash-free / 99.9% uptime kept with replacement TODO.** Added to frontmatter `todos:` array: "Replace generic '95% crash-free / 99.9% uptime' line in Results with a project-specific Crashlytics number when available." Renders as an editor's note on the case study.
- _2026-06-06_ — **Studymap rebranded → Remody.** User confirmed: both store URLs are dead; client renamed the product from "Studymap" to "Remody" mid-life. Status `verified` → `unlisted`. Removed `appStore` + `playStore` from frontmatter `links:`. Kept `liveSite: https://www.remody.co.jp/`. Body rewritten: Overview, Architecture/Distribution, Challenges, Results & impact, Sources all updated to mention the rename and reference the Remody brand site (AI-powered personalised learning plans for cert / uni entrance exams, Tokyo Shinagawa). Verified count: 14 → 13 net. **Open question for user: Studymap is still `featured: true` — should it stay on the homepage Picks now that it's unlisted, or get demoted to /work only?**
- _2026-06-06_ — **Lili: no changes needed.** User confirmed Play Store unlisted; APKPure URL stays as the Android proof. Current MDX already reflects this state correctly.
- _2026-06-06_ — **Studymap stays featured despite unlisted status.** User chose: engineering work stands on its own; brand site link + honest unlisted badge is acceptable framing. Featured count stays at 6 (KGK Diamonds, Lili, Foresite, Locket, Lux ECards, Studymap).
- _2026-06-06_ — **Round 2 enrichment landed.** Tarot Cat got the confirmed MyTarot iOS rebrand link (4.7 ★ / 2,100 reviews — high-impact metric). Havitglam, Today's Quote, Lux ECards, KGK HRMS all got real store-description content in their Results sections. Synergy + Warden Tracker + CareShare anonymity TODOs cleared (decisions already applied; bodies already generic). BookMrk Delivery linked to its parent's APKPure mirror as delisting evidence.
- _2026-06-06_ — **Outstanding fetch gaps.** Play Store install bands + ratings are not extractable via WebFetch (Google anti-scraping); next move is for the user to manually copy install bands + ratings from each Play Store listing in their browser. The few remaining unsurfaced items are: Havitglam KR iOS "Largo 라르고" (not in search), Lux ECards iOS (probably Android-only), Today's Quote iOS (probably Android-only), Lux ECards site (SSL chain error from WebFetch).
- _2026-06-06_ — **Pull-quote number drift flagged.** Draft A says "eleven still live in the stores." After Round 1+2 status changes, verified count is now 14. When Story.astro is updated with Draft A in the Phase 2 sweep, change "eleven" → "fourteen" (or wire to `getCollection("work")` count so it stays in sync).
- _2026-06-06_ — **Phase 1 landed and verified in browser.** Contact form stripped to mailto + LinkedIn + GitHub + X buttons (Reach out panel). Footer year dynamic. Pro5 cert link wired + visible TODO removed. Phone removed from profile.ts. PostgreSQL out of currentlyLearning. bioLong tightened. Promotion sentence rewritten. Lab pages already had noindex meta tags. Sitemap excludes lab pages by construction. Verified at `/contact`, `/`, `/resume` via Claude_Preview snapshots — no errors, copy renders correctly. **One Phase 1 carryover:** user must generate `public/og-default.png` (1200×630) to replace the SVG that Slack/LinkedIn/iMessage can't preview-render — I can't generate PNG files.
- _2026-06-08_ — **Site URL confirmed as `https://mitulvaghasiya.com` for now.** User confirmed the existing config in `astro.config.mjs` and `sitemap.xml.ts` is correct as the working URL. No code change needed; status flipped from "blocked" to "confirmed (revisit on domain change)."
- _2026-06-08_ — **Custom 404 page + robots.txt tightening landed.** Added `src/pages/404.astro` matching the site's voice: ribbon "404 · Off the map" / "No such plate", H1 "Lost.", subtitle "That URL doesn't match anything shipped…", then four navigation cards (Home / Work / Resume / Contact) each with a one-liner descriptor. Page has `noindex={true}` so search engines don't index dead URLs. Updated `public/robots.txt` to add `Disallow: /lab/` — belt-and-braces with the existing noindex meta on lab pages. Verified both: 404 returns proper 404 status with custom HTML; robots.txt returns 200 with the new directive.
- _2026-06-08_ — **Phase 4 content polish landed (4 of 5 items).** Polished `/resume` description from `"Full resume for X — experience, skills, education, contact."` to a role-aware specific sentence; same for `/contact` (was `"Get in touch with X."`). Added a status-badge legend under the stats grid on `/work` — single line explaining verified / brand-verified / unlisted / internal / early. Verified `sitemap.xml.ts` already excludes `/lab/*` by enumeration. Confirmed `CreativeWorkJsonLd.astro` already uses `MobileApplication` (a `SoftwareApplication` subtype) when there's an app-store link — the original task spec was actually less specific than the live code. **Outstanding:** `site` URL is still `https://mitulvaghasiya.com` in `astro.config.mjs` and `sitemap.xml.ts` — original audit flagged this as placeholder; user to confirm whether this is the real domain or a placeholder that needs replacement.
- _2026-06-08_ — **Phase 3 narrative polish landed (scoped down).** After re-reading all 19 case studies in full to assess where the body copy was actually thin, only 3 needed real expansion: `careshare`, `synergy`, `warden-tracker`. Each had its Overview, Problem & context, My approach, and Challenges sections extended with substantive prose — no invented facts, just unpacking the reasoning behind each existing bullet. Voice matches the foresite/lili gold-standard per 0.18. The other 16 case studies were either already substantive from Round 1+2 enrichment (most) or intentionally thin by design (radio-station). Net effect: the "9 case studies to walk" estimate was conservative; actual scope was 3.
- _2026-06-08_ — **Per-MDX TODO cleanup pass landed.** 9 of 19 case studies had resolved `todos:` entries pruned (bookmrk-delivery, bookmrk, foresite, kgk-hrms, lili, locket, lux-ecards, marline-media, studymap). Removed items were either already answered in prior decisions (foresite role focus, lili Android, studymap rebrand) or already documented in the body copy (bookmrk install path, kgk-hrms iOS framing, locket release window, marline delisting). The remaining 10 files keep genuine open items — mostly `Confirm dates.` and asset-gap requests (screenshots). No content/body edits made; frontmatter only.
- _2026-06-06_ — **Phase 2 landed and verified in browser.** Spec Sheets / Datasheet / Catalog / Vol. I-III vocabulary dropped from nav, page H1s, ribbons, footer, Base titles, and SpecimenHeading instances. Plate numbering kept on case studies per 0.1. Title tag pattern includes role on every page. Story pull-quote rewritten with derived counts (currently "Six years, nineteen apps shipped, thirteen still live in the stores"). Numbers stats rebalanced to lead with verified count and fold cities+continents into one tile. Lead.astro CTAs cleaned. Now console separator and Shipping subtitle decoupled from KGK Diamonds. Verified via fetch-based eval across `/`, `/work`, `/resume`, `/contact`, `/work/kgk-buy-diamonds` — no server errors, all page titles include the role, no visible Spec Sheets vocabulary remaining (only dev-only CSS comments). One verified-count clarification: 11 → 13 (not 14) — math: 11 original + Marline Media + BookMrk + Setera - Studymap = 13. Pull-quote auto-displays "thirteen" correctly.

---

## Coordination notes

- **Other session active** — confirm what they own before editing overlapping files.
- Suggested split: that session = components/layout/design, this session = content (MDX + profile.ts + copy).
- If the other session is doing design work, we are naturally complementary (we do copy, they do shapes).
