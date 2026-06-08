# PROJECT LINKS — Source-of-truth for store / mirror URLs

> **How to use this file:**
>
> Each of the 19 case studies has a section below with: current known links (marked ✅) and empty slots for missing ones. Fill in the missing slots — paste URLs into the `_____` fields. Once a project's row is complete, I read the linked stores/mirrors and update the matching MDX in `src/content/work/`.
>
> **Heuristic:** if an app is unlisted from Play Store / App Store, check [apkpure.com](https://apkpure.com) or [apkpure.net](https://apkpure.net) for a mirror before treating it as "no public link." (Per 0.14 decision.)
>
> **Conventions:** `✅` = known link · `_____` = needs URL · `❌` = confirmed no link exists (mark with this if you've checked and it isn't available anywhere) · `📝` = note / context.

---

## Round 1 findings — 2026-06-05

**MDX files updated with real metrics:** KGK Buy Diamonds, BookMrk, Marline Media, Physio Mobile, Locket, Foresite, Lili.

**Schema mismatches fixed (would have broken Zod build):**
- `setera-tpms.mdx`: `livesite` → `liveSite` (and inline JSON → YAML)
- `studymap.mdx`: `website` → `liveSite`
- `marline-media.mdx`: `apkpure` → `apkPure`
- `physio-mobile.mdx`: `apkpure` → `apkPure`

**Status upgrades:**
- Marline Media: `brand-verified` → `verified` (APKPure mirror confirmed)
- BookMrk: `brand-verified` → `verified` (APKPure mirror confirmed)
- → bumps verified count from 11 to 13 (auto-reflected on `/work` and the Numbers section)

**All 6 open issues resolved (2026-06-06):**
1. ✅ **Studymap rebranded → Remody.** User confirmed both store URLs are dead and the client renamed the product. Status `verified` → `unlisted`; store links removed; brand site `remody.co.jp` kept; case study body rewritten to mention the rename. Verified count: 14 → 13.
2. ✅ **Setera identity goes public.** Status `internal` → `verified`; client/publisher named; brand site link kept; Results section expanded with hardware product line context. Verified count: 13 → 14.
3. ✅ **Marline Media:** kept case-study title "Marline Media"; Results body mentions actual store title "Invitation Card & Lenses Maker" by Marline Apps. Already done.
4. ✅ **Foresite:** softened to "enterprise build serves both agronomist and grower workflows." Already done.
5. ✅ **KGK Diamonds:** kept generic 95%/99.9% line, added TODO to swap for project-specific Crashlytics number when available. Already done.
6. ✅ **Lili Play Store stays unlisted.** User confirmed it's unlisted; APKPure URL visible as proof. Current MDX already correct, no changes needed.

**Final verified count after Round 1: 14** (was 11 at start; +Marline Media, +BookMrk, +Setera; -Studymap which went to unlisted).

---

## Round 2 findings — 2026-06-06

**MDX files updated with real metrics + iOS rebrands:**
- **Tarot Cat** — confirmed iOS rebrand to **"MyTarot 마이타로"** (`id6446103793`, 1zlabs, **4.7 ★ on 2,100 reviews**, v8.0.0, 43.5 MB, last shipped 2 Feb 2025). Added appStore link + Sources entry. Removed the MyTarot TODO.
- **Havitglam** — Updated Results with the real store description (photo-verified habit tracker with seven-day challenges; vitamins/fitness/yoga/water/reading verticals). KR rebrand "Largo 라르고" not surfaced in latest search; iOS link still pending.
- **Today's Quote** — Confirmed the in-app mechanic name: **"Play Games with Quotes"** (leaderboard). Updated Results with the three-pillar store positioning. Removed the mini-game-mechanic TODO.
- **Lux ECards** — Confirmed actual store title: **"Indian Invitation Cards Maker"** by Verdad IT. Multi-language (Gujarati / Hindi / English). Updated Results with category catalogue (wedding, baby shower, engagement, business openings, obituaries).
- **KGK HRMS** — Added store-listing description fragment ("comprehensive tool designed to empower employees with seamless access to their personal and professional details"). Play Store install/rating data not extractable via WebFetch.

**Anonymity/cleanup pass:**
- **Synergy** — removed the "confirm anonymise" TODO (0.14 decided: keep name). Added APKPure-check-came-up-empty note.
- **Warden Tracker** — removed the "confirm client safe" TODO (0.14 decided: anonymize). Body already generic. Added APKPure-check note.
- **CareShare** — removed the "confirm anonymise" TODO (0.14 decided: anonymize). Body already generic. Added APKPure-check note.
- **BookMrk Delivery** — added note linking parent BookMrk APKPure mirror as evidence of the consumer-app delisting.

**Final verified count after Round 2: 14** (unchanged from Round 1; Round 2 was content enrichment, not status changes).

**Still couldn't surface via web research:**
- KGK HRMS, KGK Diamonds, Foresite, Studymap, Havitglam, Tarot Cat, Today's Quote, Physio Mobile, Lux ECards — Play Store install bands + rating counts. WebFetch returns truncated Play Store HTML; WebSearch indexes don't expose install counts for low-volume B2B apps. **Action: user can copy install bands + ratings directly from each Play Store listing in a browser — 1-minute task per app — and I'll wire them in.**
- Havitglam KR iOS ("Largo 라르고") — not found in any search variant. Possibly removed from KR store, or only under a non-Latin search term we haven't tried.
- Lux ECards iOS — no listing found. Probably Android-only by design.
- Today's Quote iOS — no listing found. Probably Android-only.
- Lux ECards site fetch failed (SSL chain validation error from WebFetch).

---

## ⏸️ Paused 2026-06-05 — pickup template for Monday

When you have a moment before/during Monday, fill in any of these. Paste the line back in chat or edit in place. Skip apps you can't easily check.

```
KGK Diamonds (com.kgk.diamonds):              ___K+ installs / _.__ ★ on ___ reviews
KGK HRMS (com.kgkhrms.app):                    ___K+ installs / _.__ ★ on ___ reviews
Foresite (com.ukkoag.enterprise):              ___K+ installs / _.__ ★ on ___ reviews
Lux ECards (com.luxecard.app):                 ___K+ installs / _.__ ★ on ___ reviews
Havitglam (com.onezlabs.havitglam):            ___K+ installs / _.__ ★ on ___ reviews
Tarot Cat (com.onezlabs.tarot_cat):            ___K+ installs / _.__ ★ on ___ reviews
Today's Quote (com.onezlabs.todaysquote):      ___K+ installs / _.__ ★ on ___ reviews
Physio Mobile (com.physiomoboile.training_app):___K+ installs / _.__ ★ on ___ reviews
Studymap/Remody (jp.co.remody.remody):         ___K+ installs / _.__ ★ on ___ reviews
```

Once I have these, I'll wire them into each Results section in a single batched pass, and update the verified-count display if any status changes shift.

**Still-to-research (next round):**
- KR rebrand URLs for Havitglam ("Largo 라르고") and Tarot Cat ("MyTarot 마이타로")
- KGK HRMS Play Store metrics
- Today's Quote Play Store metrics
- Lux ECards Play Store + iOS check (site SSL was broken on my fetch)
- Studymap Play Store metrics (didn't try)
- APKPure check for: Synergy, BookMrk Delivery, CareShare, Radio Station, KGK HRMS

---

## 01. KGK Buy Diamonds

- Status: `verified` · Period: 2025 — Present · Region: South Asia (Surat)

| Platform | URL |
|---|---|
| iOS App Store | ✅ https://apps.apple.com/in/app/kgk-diamonds-buy-diamonds/id6479595403 |
| Android Play Store | ✅ https://play.google.com/store/apps/details?id=com.kgk.diamonds |
| APKPure mirror | _____ (optional — Play Store is live) |
| Live site | ✅ https://kgkdiamonds.com/ |

**Metrics to grab from the listings (Tier 1):**
- iOS rating + review count: _____
- Play Store install band (e.g. 10K+, 100K+, 1M+): _____
- Play Store rating + review count: _____
- Last updated date (iOS / Android): _____

**Per-decision notes:**
- 📝 0.15 → headline metric: "120-year diamond house, 50,000+ certified inventory"

---

## 02. Lili — Health Data Assistant

- Status: `verified` · Period: 2021 — 2023 · Region: International

| Platform | URL |
|---|---|
| iOS App Store | ✅ https://apps.apple.com/gb/app/lili-health-data-assistant/id1549377844 |
| Android Play Store | 📝 unlisted by publisher |
| APKPure mirror | ✅ https://apkpure.com/lili-health-data-assistant/com.itslili.lili |
| Live site | _____ (publisher: "AI Assistant Lili" — check if there's a marketing site) |

**Metrics to grab (Tier 1):**
- iOS rating + review count: _____
- APKPure download / version info: _____
- Last updated date (iOS): _____

**Per-decision notes:**
- 📝 Still pending decision: show APKPure link, or hide Android entirely, or show APKPure + note the Play Store unlisting

---

## 03. Foresite (Ukko Agro)

- Status: `verified` · Period: 2022 — 2024 · Region: North America (Toronto)

| Platform | URL |
|---|---|
| iOS App Store | ✅ https://apps.apple.com/ca/app/foresite/id1604668353 |
| Android Play Store | ✅ https://play.google.com/store/apps/details?id=com.ukkoag.enterprise |
| APKPure mirror | _____ (optional) |
| Live site | _____ (publisher: Ukko Agro Inc. — likely ukkoagro.com or similar) |

**Metrics to grab (Tier 1):**
- iOS rating + review count: _____
- Play Store install band: _____
- Play Store rating + review count: _____
- Last updated date (iOS / Android): _____

**Per-decision notes:**
- 📝 App role decided: agronomist-facing field tool. Case study to note Ukko ships a separate grower-facing companion.

---

## 04. Locket

- Status: `verified` · Period: 2022 — 2023 · Region: International

| Platform | URL |
|---|---|
| iOS App Store | _____ (check if there's a publisher Wanderlust Inc. listing) |
| Android Play Store | 📝 was on Play Store, since delisted |
| APKPure mirror | ✅ https://apkpure.com/locket-location-sharing-app/io.locket |
| Live site | _____ (publisher: Wanderlust Inc.) |

**Metrics to grab (Tier 1):**
- APKPure download / version info: _____
- iOS rating + review count (if listing exists): _____

---

## 05. Lux ECards

- Status: `verified` · Period: 2021 — 2023 · Region: South Asia (Surat)

| Platform | URL |
|---|---|
| iOS App Store | _____ (publisher: Verdad IT — check) |
| Android Play Store | ✅ https://play.google.com/store/apps/details?id=com.luxecard.app |
| APKPure mirror | _____ (optional) |
| Live site | ✅ https://lux-ecards.com/ |

**Metrics to grab (Tier 1):**
- Play Store install band: _____
- Play Store rating + review count: _____
- Last updated date: _____

---

## 06. Studymap

- Status: `verified` · Period: 2022 — 2024 · Region: East Asia (Tokyo)

| Platform | URL |
|---|---|
| iOS App Store (JP) | ✅ https://apps.apple.com/jp/app/studymap/id1613502226 |
| Android Play Store | ✅ https://play.google.com/store/apps/details?id=jp.co.remody.remody |
| APKPure mirror | _____ (optional) |
| Live site | _____ (publisher: Remody Inc. — check remody.jp or similar) |

**Metrics to grab (Tier 1):**
- iOS rating + review count: _____
- Play Store install band: _____
- Play Store rating + review count: _____
- Last updated date (iOS / Android): _____

📝 Region-gated discoverability — JP store URLs may redirect for non-JP browsers. Note this in the case study.

---

## 07. KGK HRMS

- Status: `verified` · Period: 2025 — Present · Region: South Asia (Surat)

| Platform | URL |
|---|---|
| iOS App Store | 📝 internal-only (not on public App Store) |
| Android Play Store | ✅ https://play.google.com/store/apps/details?id=com.kgkhrms.app |
| APKPure mirror | _____ (check) |
| Live site | _____ (likely internal — confirm) |

**Metrics to grab (Tier 1):**
- Play Store install band: _____ (likely low — internal HR app)
- Last updated date: _____

**Per-decision notes:**
- 📝 Still pending: hide iOS badge entirely / show "iOS — internal" badge with no link / drop the case study

---

## 08. Havitglam

- Status: `verified` · Period: 2022 — 2023 · Region: East Asia (Seoul)

| Platform | URL |
|---|---|
| iOS App Store (KR rebrand "Largo 라르고") | _____ (per 0.14 — find KR store listing) |
| Android Play Store | ✅ https://play.google.com/store/apps/details?id=com.onezlabs.havitglam |
| APKPure mirror | _____ (optional) |
| Live site | _____ (publisher: 1zLabs / onezlabs — check) |

**Metrics to grab (Tier 1):**
- Play Store install band: _____
- Play Store rating + review count: _____
- iOS Largo rating (if found): _____

**Per-decision notes:**
- 📝 0.14 → cross-link iOS "Largo 라르고" once URL is found

---

## 09. Tarot Cat

- Status: `verified` · Period: 2022 — 2023 · Region: East Asia (Seoul)

| Platform | URL |
|---|---|
| iOS App Store (KR rebrand "MyTarot 마이타로") | _____ (per 0.14 — find KR store listing) |
| Android Play Store | ✅ https://play.google.com/store/apps/details?id=com.onezlabs.tarot_cat |
| APKPure mirror | _____ (optional) |
| Live site | _____ (publisher: 1zLabs / onezlabs) |

**Metrics to grab (Tier 1):**
- Play Store install band: _____
- Play Store rating + review count: _____
- iOS MyTarot rating (if found): _____

**Per-decision notes:**
- 📝 0.14 → cross-link iOS "MyTarot 마이타로" once URL is found

---

## 10. Today's Quote — Be Inspired

- Status: `verified` · Period: 2022 — 2023 · Region: East Asia (Seoul)

| Platform | URL |
|---|---|
| iOS App Store | _____ (check if onezlabs published an iOS version) |
| Android Play Store | ✅ https://play.google.com/store/apps/details?id=com.onezlabs.todaysquote |
| APKPure mirror | _____ (optional) |
| Live site | _____ |

**Metrics to grab (Tier 1):**
- Play Store install band: _____
- Play Store rating + review count: _____

**Per-decision notes:**
- 📝 0.16 → in-app mechanic = leaderboard mini-game tied to quote engagement (explains the legacy "2D-Game" tag)

---

## 11. Physio Mobile

- Status: `verified` · Period: 2021 — 2023 · Region: Europe (Berlin)

| Platform | URL |
|---|---|
| iOS App Store | ✅ https://apps.apple.com/us/app/physio-mobile/id6448959919 |
| Android Play Store | ✅ https://play.google.com/store/apps/details?id=com.physiomoboile.training_app |
| APKPure mirror | _____ (optional) |
| Live site | _____ (publisher: Robin Brunner — check) |

**Metrics to grab (Tier 1):**
- iOS rating + review count: _____
- Play Store install band: _____
- Play Store rating + review count: _____
- Last updated date: _____

---

## 12. BookMrk

- Status: `brand-verified` · Period: 2020 — 2022 · Region: South Asia

| Platform | URL |
|---|---|
| iOS App Store | _____ (check — was it ever on iOS?) |
| Android Play Store | _____ (check — likely unlisted) |
| APKPure mirror | _____ (check — likely candidate) |
| Live site | ✅ https://www.bookmrk.in/ |

**Metrics to grab (Tier 1):**
- APKPure download / version info (if found): _____

---

## 13. BookMrk Delivery

- Status: `brand-verified` · Period: 2020 — 2022 · Region: South Asia

| Platform | URL |
|---|---|
| iOS App Store | _____ (check) |
| Android Play Store | _____ (check) |
| APKPure mirror | _____ (check) |
| Live site | ✅ https://www.bookmrk.in/ (shared with parent BookMrk brand) |

---

## 14. Marline Media

- Status: `brand-verified` → upgrade to `verified` once APKPure link confirmed in MDX · Period: 2021 — 2023 · Region: International

| Platform | URL |
|---|---|
| iOS App Store | _____ (check — may exist) |
| Android Play Store | 📝 unlisted |
| APKPure mirror | ✅ https://apkpure.net/invitation-card-lenses-maker/com.marlinemedia.invitation.card.maker.filter.mm |
| Live site | ✅ https://marlinemedia.com/ |

**Metrics to grab (Tier 1):**
- APKPure download / version info: _____

---

## 15. Synergy

- Status: `unlisted` · Period: 2021 — 2022 · Region: International

| Platform | URL |
|---|---|
| iOS App Store | _____ (check) |
| Android Play Store | 📝 unlisted |
| APKPure mirror | _____ (check) |
| Live site | _____ |

**Per-decision notes:**
- 📝 0.14 → keep "Synergy" product name publicly

---

## 16. Setera TPMS

- Status: `internal` · Period: 2023 — 2024 · Region: International

| Platform | URL |
|---|---|
| iOS App Store | _____ (likely none — hardware utility) |
| Android Play Store | _____ (check) |
| APKPure mirror | _____ (check) |
| Live site | _____ |

**Per-decision notes:**
- 📝 0.14 → anonymize as "automotive hardware partner, TPMS sensor utility" (drop "Setera" name from MDX body + frontmatter `client:`)

---

## 17. Warden Tracker

- Status: `internal` · Period: 2022 — 2023 · Region: International

| Platform | URL |
|---|---|
| iOS App Store | _____ (check) |
| Android Play Store | _____ (check) |
| APKPure mirror | _____ (check) |
| Live site | _____ |

**Per-decision notes:**
- 📝 0.14 → anonymize as "geo-fencing system, B2B client" (drop any client-revealing copy)

---

## 18. CareShare

- Status: `unlisted` · Period: 2021 — 2022 · Region: International

| Platform | URL |
|---|---|
| iOS App Store | _____ (check) |
| Android Play Store | _____ (check) |
| APKPure mirror | _____ (check) |
| Live site | _____ |

**Per-decision notes:**
- 📝 0.14 → anonymize as "consumer health-care client project"

---

## 19. Radio Station

- Status: `early` · Period: 2020 · Region: International

| Platform | URL |
|---|---|
| iOS App Store | _____ (likely none) |
| Android Play Store | _____ (likely none) |
| APKPure mirror | _____ (check) |
| Live site | _____ |

**Per-decision notes:**
- 📝 Pending decision: keep as small "earlier work" entry / hide entirely / decide after APKPure check

---

## Summary table — quick fill-in view

| # | Slug | iOS | Android | APKPure | Live site |
|---|---|---|---|---|---|
| 01 | kgk-buy-diamonds | ✅ | ✅ | _ | ✅ |
| 02 | lili | ✅ | unlisted | ✅ | _ |
| 03 | foresite | ✅ | ✅ | _ | _ |
| 04 | locket | _ | delisted | ✅ | _ |
| 05 | lux-ecards | _ | ✅ | _ | ✅ |
| 06 | studymap | ✅ JP | ✅ | _ | _ |
| 07 | kgk-hrms | internal | ✅ | _ | _ |
| 08 | havitglam | _ Largo | ✅ | _ | _ |
| 09 | tarot-cat | _ MyTarot | ✅ | _ | _ |
| 10 | todays-quote | _ | ✅ | _ | _ |
| 11 | physio-mobile | ✅ | ✅ | _ | _ |
| 12 | bookmrk | _ | _ | _ | ✅ |
| 13 | bookmrk-delivery | _ | _ | _ | ✅ |
| 14 | marline-media | _ | unlisted | ✅ | ✅ |
| 15 | synergy | _ | unlisted | _ | _ |
| 16 | setera-tpms | _ | _ | _ | _ |
| 17 | warden-tracker | _ | _ | _ | _ |
| 18 | careshare | _ | _ | _ | _ |
| 19 | radio-station | _ | _ | _ | _ |

---

## Notes for me (Claude) when you hand this back

Once links are filled in, I'll:
1. Read each linked store listing for: title, rating, review count, install band, last-updated date, store description language.
2. Update `src/content/work/<slug>.mdx` frontmatter `links:` block with the new URLs.
3. Update Overview / Results sections with the metrics actually found.
4. Promote `brand-verified` → `verified` where APKPure mirrors now exist.
5. Update `featured: ...` and `order: ...` if any project's standing changes.

Until handed back, I won't edit any MDX `links:` blocks.
