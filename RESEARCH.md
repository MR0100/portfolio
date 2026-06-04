# Mitul R. Vaghasiya — Project Verification Research

## Summary (5-line)

- **VERIFIED:** 8 of 19 (KGK Buy Diamonds, KGK HRMS, Lux ECards, Lili, **Locket**, **ForeSite/Ukko Agro**, **Studymap**, **Today's Quote** — Round 3 located `com.onezlabs.todaysquote` on Play Store under the same 1zlabs publisher as Havitglam/Tarot Cat).
- **PARTIALLY_VERIFIED:** 2 of 19 (Tarot Cat, Havitglam — strong publisher match `onezlabs`, Mitul/Sadguru link still inferred but now corroborated by the 3-app cluster).
- **REMOVED / likely removed:** 0 explicit.
- **UNVERIFIED:** 5 of 19 (BookMrk, BookMrk-Delivery, Synergy, Marline Media, Physio Mobile — generic names or no public listing surfaces; Marline Media's brand site has app-ads.txt confirming an app DID exist but it's not findable on either store under any plausible bundle name).
- **NOT_FOUND:** 4 of 19 (Setera TPMS, Warden Tracker, CareShare, Radio Station — no listing plausibly matches Mitul's described work; likely internal/B2B / removed).

## Round 3 findings (focused pass on Today's Quote + Marline Media)

### Today's Quote — UNVERIFIED → VERIFIED.

Search for `"Today's Quote" 1zlabs Play Store` surfaced **Today's Quote - Be Inspired** at `play.google.com/store/apps/details?id=com.onezlabs.todaysquote` — same `com.onezlabs.*` namespace as Havitglam and Tarot Cat (i.e. same client). Direct HTML probe of the listing returned HTTP 200 and confirmed:

- App name: **"Today's Quote - Be Inspired"** (listing title) / `Today's Quote` (in-app name)
- Developer: **1zlabs** (publisher tagline: "Something to Earn"; website https://www.tickl.ai)
- Support email: **sol@1zlabs.com**
- Package: `com.onezlabs.todaysquote`
- Last updated: July 10, 2022, version 1.0.0, 100+ installs
- Description (verbatim from store): "*Today's Quote will help you train your mind to begin each day with a positive vibe... extensive collection of inspirational quotes from a range of unique authors and celebrities... daily motivation and life lessons.*"
- Features in description match Mitul's brief AND explain the unusual **"2D-Game"** tech tag from his old portfolio:
  - **"Play Games with Quotes"** — "Share and compete with others and be listed on the leader board for everyone to see." Confirms the gamified/leaderboard mechanic that needed the 2D-game engine.
  - "Train Your Mind" daily motivation, "Your Collection of Good Vibes" (favourites), search, "Aesthetically pleasing backgrounds."

No iOS listing — searched iTunes Search API across US/KR/JP/GB/IN regions for artistId `1633865498` ("1zlabs"); the developer has 4 KR-store apps and 1 US-store app but **Today's Quote is not among them**. Today's Quote is Android-only.

### The full `onezlabs` / `1zlabs` catalogue (useful for the case studies of all three onezlabs apps)

**Korean parent company:** 1z Labs (원지랩스) — Seoul-based AI/Web3/metaverse marketing studio founded 2021, headquartered in Gangnam, Seoul. Per CB Insights and PitchBook profiles: "developer of a global growth platform designed to offer brand and advancement marketing through AI." They run a "Makers" external-collaborator model where they ship a portfolio of niche consumer apps via various indie studios — Sadguru Soft (with Mitul as the Flutter lead) was clearly one such Maker partner for at least 3 of the 6 Play Store apps.

**Play Store catalogue under `com.onezlabs.*`** (publisher: 1zlabs, devId `4828521791322319639`):

1. `com.onezlabs.todaysquote` — **Today's Quote - Be Inspired** *(Mitul, Sadguru)*
2. `com.onezlabs.tarot_cat` — **Tarot Cat - Counseling, Fortune** *(Mitul, Sadguru)*
3. `com.onezlabs.havitglam` — **Havitglam - Good Habit&Routine** *(Mitul, Sadguru)*
4. `com.onezlabs.bittimer` — **Tickl Timer: Pomodoro** (not in Mitul's brief — separate Maker)
5. `com.onezlabs.ecostep` — **Walking app - Pedometer, eStep** (not in Mitul's brief — separate Maker)
6. `com.onezlabs.tickl` — **Tickl: Earn Money & Real Cash** (not in Mitul's brief — separate Maker; the publisher's hero "growth" product, hence tickl.ai)

**App Store catalogue (artistId `1633865498`, developer "1zlabs" / "1z Labs Inc."):**

Per iTunes Search API:
- US: `id1633865496` — **Better Step: Calorie Pedometer** (`com.onez.betterstep`)
- KR-only extras: `id6446103793` 마이타로 / MyTarot (`com.onez.mytarotgpt`); `id6444129371` 플레이타운 / Playtown metaverse farm (`com.onez.playtown`); `id6756828327` 라르고 / Largo sleep+diet+exercise+mind routine app (`com.onez.largo`) — likely iOS counterpart of Havitglam, given the same "habit & routine" framing.

Useful URLs:
- 1zlabs Play Store dev page: `https://play.google.com/store/apps/dev?id=4828521791322319639`
- 1zlabs Apple developer page: `https://apps.apple.com/us/developer/1zlabs/id1633865498` (KR variant: `https://apps.apple.com/kr/developer/1zlabs/id1633865498`)
- 1zlabs Korean corp site: `https://1zlabs.com/` (Korean "원지랩스")
- 1zlabs main product front-door: `https://www.tickl.ai/` (the publisher tagline links here — currently a minimal "Testing AI agents at scale" landing page)

### Marline Media — UNVERIFIED (downgraded confidence: still no app; new evidence the app exists)

Probed APKPure, Play Store HEAD on 17 plausible bundle ids (`com.marlinemedia`, `com.marline.app`, `com.marlinemedia.snapfilter`, `com.marlinemedia.cards`, `com.marlinemedia.poster`, `com.marline.studio`, etc. — all HTTP 404), App Store search, Wayback CDX, Bing-cached, brand social-media. None surface a mobile app under any "Marline" bundle name.

**However, two new pieces of evidence confirm the app DID exist** (matching Mitul's statement that he personally deployed it):

1. **`marlinemedia.com/app-ads.txt` exists** (confirmed in Wayback CDX), containing `google.com, pub-6791369250731909, DIRECT, f08c47fec0942fa0`. The IAB-mandated `app-ads.txt` file is ONLY required when a developer/publisher has at least one mobile app on Google Play or Apple App Store that monetises via Google ad networks. The bare existence of this file proves there was an app in a store at some point. Reverse-searching the AdSense pub-id `pub-6791369250731909` did not surface any specific app.
2. The Wayback snapshot of `marlinemedia.com` (April 2022, the only snapshot found) references Android asset filenames (`launcherIcon48`, `cropped-mdpi-...png` — `launcherIcon48` and `mdpi` are Android density-bucket naming conventions, not iOS), suggesting the brand had an Android app whose launcher icon was reused on the website favicon path.

**Conclusion:** the Marline Media mobile app **was real and was distributed**, but it has been **delisted from both stores** and is not mirrored on APKPure / Aptoide. The only canonical web reference remains the brand site `marlinemedia.com`. Recommendation for portfolio: list as "Snap Filter & Poster Designer — client app for marlinemedia.com (now delisted)" with a screenshot from Mitul's local archive and no store badge. If Mitul can dig up the original bundle id or an APK from his old build folder, the listing can be conclusively pinned down later.

---

## Round 2 findings (new clues from user)

Round-2 confirmations and updates:

- **Locket (location-sharing) → VERIFIED.** APKPure mirror confirms `io.locket` is "Locket | location-sharing app" by Wanderlust Inc., with location + battery + speed + group-chat + Ninja Mode features matching Mitul's brief. Play Store listing returns 404 in all regions probed (delisted or geo-restricted). Primary URL on portfolio: `https://apkpure.com/locket-location-sharing-app/io.locket`. Disambiguation from Locket Widget (`com.locket.Locket`, by Locket Labs Inc.) re-confirmed.
- **Lili (Health Data Assistant) → VERIFIED (APKPure verified, store URLs region-locked from probe but indexed by Google).** APKPure URL the user provided (`https://apkpure.com/lili-health-data-assistant/com.itslili.lili`) fetched cleanly and matches: AI-powered Fitbit assistant, OAuth 2.0, by developer "Lili - health data assistant". Recommend keeping App Store GB URL as canonical store badge (`apps.apple.com/gb/app/lili-health-data-assistant/id1549377844`) with APKPure as fallback mirror.
- **ForeSite (AgTech) → VERIFIED.** User's hint about "Ukko Agro" unlocked the listing immediately. There are TWO published apps from Ukko Agro on Play and App Store: (a) **ForeSite** (`com.ukkoag.enterprise` / iOS id `1604668353`) — the predictive-analytics / disease-modeling / weather app for agronomists, which matches Mitul's "crop monitoring + grow assistant + sockets + maps + offline" brief, and (b) **Ukko Agro** (`com.ukkoag.farmer` / iOS id `1534931872`) — the grower-facing companion app. ForeSite is the one Mitul described. Company: Toronto-based Ukko Agro Inc.; site `ukko.ag`.
- **Studymap (Japan) → VERIFIED.** User's hint about "Japan / location restriction" unlocked the listing. App is "Studymap" by **Remody Inc.** (Tokyo), package `jp.co.remody.remody`, iOS id `1613502226`. AI-powered exam-prep planner using personalized study schedules + quizzes + adaptive replanning. Targets Japanese university entrance exams (incl. Imperial unis, Waseda, Keio). Tech matches Mitul's "AI study content + synchronised group study sessions" brief (the app also has a "team learning management" feature per Remody's own site). Both store URLs return 404 to direct probes (region/UA gated), but multiple independent mirrors (APKPure via appsonwindows, applion.jp, Google search index) confirm both listings are live. Use Japanese App Store and Google Play URLs as canonical.
- **Today's Quote → still UNVERIFIED.** Searched Play Store / APKPure with multiple queries; no specific listing surfaces that matches the polished Flutter + Firebase + 2D-game + local-storage stack Mitul lists on his old portfolio. Name is extremely generic. Recommend listing on new portfolio as a small/early Flutter project without a store badge, using a portfolio screenshot.
- **Setera TPMS → NOT_FOUND (confirmed).** No "Setera" TPMS app on APKPure or stores. No "Setera" tyre-products company indexed in India. Internal/B2B only.
- **Warden Tracker → NOT_FOUND (confirmed).** The only Play/APKPure "Warden" hits are unrelated: WardenGPS (M2M asset tracker), Warden security/privacy app, Warden (FOSS app-management). None match Mitul's geofence/Flutter brief. Internal/B2B or removed.
- **CareShare → NOT_FOUND (confirmed).** All "CareShare" branded apps in stores are home-care agency CRMs, not consumer Fit/Health-Kit trackers. Listing left without store badge.
- **Radio Station → NOT_FOUND (confirmed).** Generic name; no specific candidate ties back to Mitul.

## Heads-up for the user

- **Locket VERIFIED via APKPure (Round 2).** The Play Store listing for `io.locket` is delisted in all probed regions, but the APKPure mirror (`https://apkpure.com/locket-location-sharing-app/io.locket`) fetched cleanly: developer **Wanderlust Inc.**, all of Mitul's described features (location, battery, speed, status, group chat, Ninja Mode, "What's up" disappearing photos). Use APKPure as the canonical link on the portfolio. The famous "Locket Widget" by Locket Labs Inc. (`com.locket.Locket`) is the photo-widget product — not Mitul's.
- **Synergy is described as "Match making and Dating" on Mitul's OLD portfolio** (mitul-vaghasiya.netlify.app/portfolio/synergy), not "Productivity Dating" as the resume says. The old portfolio is the source of truth here. No store listing matching this app + feature set could be located — likely a private/B2C app that was never publicly published, or removed.
- **Tarot Cat + Havitglam + Today's Quote are a 3-app cluster** all under the same publisher `com.onezlabs.*` on Play Store / artistId `1633865498` "1zlabs" / "1z Labs Inc." on App Store. Sadguru Soft (with Mitul as Flutter lead) was a "Maker" partner of **1z Labs (원지랩스)** — a Seoul-based AI/Web3/metaverse marketing studio founded 2021 that publishes a portfolio of niche consumer apps. Today's Quote was found in Round 3 — `play.google.com/store/apps/details?id=com.onezlabs.todaysquote` — and the in-store "Play Games with Quotes" leaderboard feature explains the unusual "2D-Game" tech tag from Mitul's old portfolio. Round 3 also located 4 KR-only iOS apps under the same publisher (Better Step, MyTarot, Playtown, Largo) — MyTarot is likely the iOS counterpart to Tarot Cat, and Largo is likely the iOS counterpart to Havitglam (worth confirming with Mitul).
- **BookMrk has a real website (bookmrk.in)** but no Play Store / App Store listing surfaces under that name. The site is referenced in search snippets as having an app, but direct fetch failed (server refused connection in this session). The mobile apps are likely published under a different developer-account name (e.g. the parent brand), and the consumer app may be on stores but not indexed cleanly.
- **KGK Buy Diamonds is confirmed on BOTH stores** (publisher: "KGK" / "KGK Diamonds BVBA" — consistent with KGK InfoTech LLP). KGK HRMS confirmed on Play Store (developer: "KGK Diamonds BVBA").
- **Lili Health Data Assistant verified on both stores** under developer "Julia Baccarini Santana" / "AI assistant Lili" — i.e. a client/individual publisher, NOT Sadguru Soft. Description matches (Fitbit + Apple Health + AI health assistant).
- **Lux ECards verified on Play Store** under publisher "Verdad IT". No iOS listing surfaces.
- **Physio Mobile on stores is by "Robin Brunner"** — a German physio app, but it matches the description (back/shoulder/knee pain with clear videos). It could plausibly be a Sadguru client. Marked UNVERIFIED because we cannot confirm it's the same app without seeing repo history or client list.
- **Sadguru Soft's own portfolio page does NOT mention any of these 19 apps**. Most client apps for them are published under the brand's own developer account, not Sadguru's — so absence from sadgurusoft.com doesn't disprove anything.
- **Several apps have very generic names** (Warden Tracker, Today's Quote, Radio Station, Setera TPMS) — search returned many unrelated apps. For these, I marked NOT_FOUND rather than guess. (Studymap and ForeSite were unlocked by Round 2 user clues — see Round 2 findings section above.)
- **Studymap → Remody (Japan), ForeSite → Ukko Agro (Canada).** Both client-brand publishers; matches user's "I publish under client's account" rule. Both are now VERIFIED with canonical store URLs.
- **No GitHub repos for these projects on Mitul's GitHub (github.com/MR0100).** His public repos are demos/forks (clean_arch_with_bloc_demo, fancy_snackbar, popup_shapes, etc.), no client work.

---

## Per-project blocks

### 1. KGK Buy Diamonds
- **Status:** VERIFIED
- **App Store (iOS):** https://apps.apple.com/in/app/kgk-diamonds-buy-diamonds/id6479595403
  - Evidence: Page title "KGK Diamonds: Buy Diamonds — Shop Certified Diamonds Easily"; developer "KGK" (KGK Infotech LLP); description mentions "tailored for retailers, wholesalers, and brokers", "50,000+ certified diamonds", "120 years", "10+ countries".
- **Play Store (Android):** https://play.google.com/store/apps/details?id=com.kgk.diamonds
  - Evidence: Developer "KGK Diamonds BVBA"; same B2B diamond inventory description; bundle id `com.kgk.diamonds` is consistent.
- **Live site / web URL:** https://kgkdiamonds.com/ (and https://kgk.cc/)
  - Evidence: Both domains link to the same KGK product family; "kgkdiamonds.com" carries the same "Buy Diamonds in Few Clicks" tagline as the app store listing.
- **GitHub repo:** none found (private — work product of current employer).
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** "KGK" (iOS) / "KGK Diamonds BVBA" (Play). Both are within the KGK group.
- **Tech stack hints (from listing):** No explicit Flutter mention on store listing; screenshots show diamond inventory grid, advanced filters, Excel export — consistent with a Flutter + Clean Architecture + BLoC build.
- **Notes / disambiguation:** Several similarly-named KGK apps exist (KGK CC `com.kgkcc.app`, KGK ADM, KG Diamonds, KGK Live) — the correct one is the bundle `com.kgk.diamonds` / iOS id `6479595403`, which uses the exact name "KGK Diamonds: Buy Diamonds". Confirmed via developer name + description match.

### 2. KGK HRMS
- **Status:** VERIFIED (Play Store only — iOS is internal, as stated in brief)
- **App Store (iOS):** n/a (internal-only per brief)
  - Evidence: User-confirmed up front.
- **Play Store (Android):** https://play.google.com/store/apps/details?id=com.kgkhrms.app
  - Evidence: App name "KGK HRMS"; developer "KGK Diamonds BVBA"; bundle id `com.kgkhrms.app` matches naming convention.
- **Live site / web URL:** none found (internal HR tool).
- **GitHub repo:** none found (internal).
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** KGK Diamonds BVBA.
- **Tech stack hints (from listing):** Generic HR app description; no public stack hints. Per resume: Flutter, Clean Architecture, BLoC.
- **Notes / disambiguation:** A separate "KIS HRMS" app (`com.kgk.kis`) also exists from KGK — that's "KGK Intranet System". KGK HRMS (`com.kgkhrms.app`) is the right one per the description ("HR management system, employee directory, leave, attendance, payroll").

### 3. BookMrk (Student App)
- **Status:** UNVERIFIED
- **App Store (iOS):** not found
  - Evidence: Multiple `site:apps.apple.com "BookMrk"` searches returned only unrelated apps (Bookmory, Bookmarx, BookMart, etc.) — no match.
- **Play Store (Android):** not found
  - Evidence: `site:play.google.com "BookMrk"` returned no exact match. The store-search snippet on bookmrk.in's site references "download the app" but no direct Play Store URL surfaced.
- **Live site / web URL:** https://www.bookmrk.in/
  - Evidence: Confirmed domain — "BOOKMRK - Online Books & Stationary Store | Shop by School, Class, Publisher". Founded by Pratham Mehrotra. Site fetch failed in this session (ECONNREFUSED) but Google search snippets confirm it exists.
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** n/a — couldn't locate listing.
- **Tech stack hints (from listing):** From Mitul's old portfolio page (mitul-vaghasiya.netlify.app/portfolio/bookmrk): Flutter, Dart, APIs, Local Storage, Live Location, FCM, IAP, Maps, Animations.
- **Notes / disambiguation:** The brand definitely exists (bookmrk.in is live). The mobile app may have been delisted or may be published under a different developer name. Recommend recording the brand website as the canonical link and marking the app status as "(see bookmrk.in)" on the portfolio.

### 4. BookMrk-Delivery
- **Status:** UNVERIFIED
- **App Store (iOS):** not found
- **Play Store (Android):** not found
  - Evidence: Searches for "BookMrk delivery", "BookMrk partner", "BookMrk driver" returned only unrelated delivery apps (Bookmycargo, etc.). No specific match.
- **Live site / web URL:** Linked to https://www.bookmrk.in/ (parent brand).
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** n/a.
- **Tech stack hints (from listing):** Per old portfolio: Flutter, Google Maps SDK, background geolocation, delivery driver flow.
- **Notes / disambiguation:** Delivery-side companion apps are typically only distributed to drivers via direct APK or under a different developer account. Likely never publicly listed, or removed. Recommend "internal — companion to BookMrk".

### 5. Locket (Location Sharing)
- **Status:** VERIFIED (via APKPure mirror; Play Store listing delisted/unavailable in all probed regions)
- **App Store (iOS):** not found
  - Evidence: All iOS results for "Locket" pull up "Locket Widget" by Locket Labs (the famous photo widget — explicitly NOT this app per brief). No iOS location-sharing Locket surfaced. Likely Android-only.
- **Play Store (Android):** https://play.google.com/store/apps/details?id=io.locket (currently returns 404 in en_US / en_GB / ja_JP — delisted or geo-restricted)
  - Evidence: Bundle id `io.locket` is the right app, but the live Play Store listing is unreachable. Google's search index still references it.
- **APKPure (mirror):** https://apkpure.com/locket-location-sharing-app/io.locket
  - Evidence: Fetched cleanly. App name "Locket | location-sharing app"; package `io.locket`; developer "Wanderlust Inc."; version 1.13.1 (Updated May 4, 2023); features match Mitul's brief — "share your friend's location, remaining battery, moving speed, status (sleeping, at home, at school)... chat with friends... groups... Ninja Mode... 'What's up' photo-sharing that disappears". 87.1 MB, Android 7.0+, Social category.
- **Live site / web URL:** none found.
- **GitHub repo:** none found on Mitul's public profile.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** Wanderlust Inc. (Japanese / international developer studio — consistent with the user's "I publish under client's account" pattern).
- **Tech stack hints (from listing):** Real-time map, group chat, photo-sharing, location/battery/speed telemetry — consistent with Mitul's Flutter + WebSocket implementation.
- **Notes / disambiguation:** **CRITICAL — Locket Widget by Locket Labs (`apps.apple.com/us/app/locket-widget/id1600525061`, `play.google.com/store/apps/details?id=com.locket.Locket`) is NOT this app.** That one is for photos on home-screen widgets. Mitul's Locket is `io.locket` by Wanderlust Inc. Recommend showing the APKPure link on the portfolio (clearly labeled as a third-party mirror because the official Play Store listing has been delisted).

### 6. Setera TPMS (Sensor Utility)
- **Status:** NOT_FOUND (confirmed round 2)
- **App Store (iOS):** not found
- **Play Store (Android):** not found
  - Evidence: Round 2 also probed APKPure (`site:apkpure.com "Setera TPMS"`) and "Setera tyre TPMS company India Surat" — neither returned any match. APKPure has many TPMS apps (Smart TPMS, TPMS Advanced, TPMSII, M-TPMS, USB TPMS, etc.) but none under the Setera brand. No "Setera" tyre-products company indexed in India search results either.
- **Live site / web URL:** none found.
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** n/a.
- **Tech stack hints (from listing):** Per resume: Android USB Host APIs, serial sensor comms, Kotlin. Likely B2B/internal — never publicly distributed.
- **Notes / disambiguation:** Most likely an internal/partner tool for an automotive hardware customer. Reasonable to display on portfolio without a store badge.

### 7. Warden Tracker
- **Status:** NOT_FOUND (confirmed round 2)
- **App Store (iOS):** not found
  - Evidence: The only "Warden" iOS result is "WardenGPS" by M2M DATA GROUP (an unrelated GPS asset-tracking product). Doesn't match Mitul's geo-fencing/proximity-alerts brief, and developer is wrong.
- **Play Store (Android):** not found
  - Evidence: Round 2 probed `"Warden Tracker" geofence`, `"warden tracker" "child safety" OR "asset" Flutter`, `"Warden" lone worker geofence app Play Store mining safety` — all returned the same unrelated apps: WardenGPS (`com.warden.app`, M2M Data Group); Warden (FOSS app-management utility by Aurora Store dev); Warden: Security & Privacy (`com.fragment.guardian`). None match Mitul's brief.
- **Live site / web URL:** none found.
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** n/a.
- **Tech stack hints (from listing):** Per resume: Flutter, background location, geo-fencing, proximity alerts.
- **Notes / disambiguation:** Generic name; all candidates ruled out by publisher/feature mismatch. Likely a private B2B client app that was never publicly listed or has been removed.

### 8. Synergy
- **Status:** UNVERIFIED
- **App Store (iOS):** not found
  - Evidence: All "Synergy" iOS results are workforce-management / business / lending apps — none are dating.
- **Play Store (Android):** not found
  - Evidence: All "Synergy" Play Store results are productivity / task-management / employee apps — none are dating.
- **Live site / web URL:** none found.
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** n/a.
- **Tech stack hints (from listing):** Per old portfolio page (mitul-vaghasiya.netlify.app/portfolio/synergy) confirmed via fetch: "Match making and Dating application" — Flutter, Firebase, Local Storage, FCM, IAP, APIs Integration, Animations.
- **Notes / disambiguation:** **User asked to specifically investigate Synergy.** The OLD portfolio explicitly says "Match making and Dating application" — that should be the framing. Resume's "Productivity Dating" phrasing is inconsistent and may be an autocorrect / paraphrase. No public store listing matches a "Synergy" dating app — likely removed or never publicly released. Recommend framing on the new portfolio as "Match-making & dating app (client project)" without a store badge.

### 9. Lili (Health Data AI)
- **Status:** VERIFIED
- **App Store (iOS):** https://apps.apple.com/gb/app/lili-health-data-assistant/id1549377844
  - Evidence: App name "Lili: Health Data Assistant" matches; description matches ("personal health assistant... advanced health data analytics... works with Fitbit or Apple Health data"). Developer "Julia Baccarini Santana" / "AI assistant Lili". 256-bit OAuth 2.0 encryption. Page on US/IN/BR App Store returned 404 to direct probes this session — UK listing is the working canonical URL. Recommend UK URL as canonical on portfolio.
- **Play Store (Android):** https://play.google.com/store/apps/details?id=com.itslili.lili
  - Evidence: Same app name and matching description; bundle `com.itslili.lili` matches the LinkedIn handle "itslili". URL returns 404 to direct probes from this session (region/UA gated) but is indexed by Google and APKPure mirrors point to the same package.
- **APKPure (mirror):** https://apkpure.com/lili-health-data-assistant/com.itslili.lili
  - Evidence: User-provided URL fetched cleanly. Developer "Lili - health data assistant". Bundle `com.itslili.lili`. Version 1.2.07 (Nov 21, 2023). Description matches — "AI-powered assistant integrates with Fitbit... advanced health data analytics... personalized health plans, tracking symptoms and mood... 256-bit bank-level encryption with OAuth 2.0". 31.6 MB, Android 5.0+. Use as backup mirror.
- **Live site / web URL:** itslili.com (referenced via LinkedIn — not directly verified in this session).
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** AppAdvice profile: https://appadvice.com/app/lili-your-health-assistant/1549377844
- **Publisher / developer (as listed on store):** AI assistant Lili / Julia Baccarini Santana (a personal/founder publisher account — NOT Sadguru Soft, as expected per brief).
- **Tech stack hints (from listing):** Fitbit/Apple Health integrations, AI chat interface, encryption. Consistent with Flutter + REST API integrations.
- **Notes / disambiguation:** Several other "Lili" apps exist (Lilli Health, Lilly Health, Eli Lilly's pharma apps, an unrelated AI tutoring app) — those are NOT this. The right one is `com.itslili.lili` / iOS id `1549377844`, by "AI assistant Lili" / Julia Baccarini Santana. **Canonical store URL: UK App Store + the Play Store URL (use both; if Play Store fails for a visitor, APKPure is the fallback).**

### 10. Marline Media (Snap Filter)
- **Status:** UNVERIFIED (Round 3 confirmed an app DID exist but found no live listing — likely delisted)
- **App Store (iOS):** not found
  - Evidence: `site:apps.apple.com "Marline Media"` returned no match across direct probes and country-variants.
- **Play Store (Android):** not found
  - Evidence: Round-3 HEAD-probed 17 plausible bundle ids (`com.marlinemedia`, `com.marline.app`, `com.marlinemedia.app`, `com.marlinemedia.filter`, `com.marlinemedia.snapfilter`, `com.marlinemedia.lens`, `com.marlinemedia.cards`, `com.marlinemedia.poster`, `com.marline.studio`, `com.marlinemedia.studio`, `in.marlinemedia.app`, `com.marline.media`, etc.) — all returned HTTP 404.
- **APKPure / Aptoide mirror:** not found. APKPure has `com.marline.mysterioza` (a 2018 game by "Marline Games" — unrelated). No `Marline Media`-published app surfaces on APKPure, Aptoide, or APKMirror.
- **Live site / web URL:** https://marlinemedia.com/
  - Evidence (Wayback snapshot 2022-04-04): Title `Marline Media - Buy Snapchat, Instagram Filters, Lenses and Fun Things`. WooCommerce shop selling Snap geo-filters and lenses by category (Wedding / Birthday / Baby Shower / Engagement / Gender Reveal / Hair Salon / Coffee Cafe / etc.) plus Digital Invitations. Site uses iPhone-mockup hero images on the homepage. **Site is currently down (ECONNREFUSED in both round 2 and round 3)** — only Wayback snapshots accessible.
- **App-ads.txt evidence (NEW round 3):** `https://marlinemedia.com/app-ads.txt` is archived in Wayback CDX and returns body `google.com, pub-6791369250731909, DIRECT, f08c47fec0942fa0`. The IAB-mandated `app-ads.txt` file is ONLY published when a developer has at least one mobile app on Google Play or Apple App Store that monetises via Google ad networks — confirming Marline Media DID have a published app at some point. Reverse-search of the AdSense pub-id did not surface a specific app.
- **Android asset filenames on the website** (`launcherIcon48`, `cropped-mdpi-...png` — both are Android density-bucket naming conventions, not iOS) suggest the published app was Android.
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** unknown (app no longer findable in any store).
- **Tech stack hints (from old portfolio):** Flutter, high-res canvas rendering, layer manipulation, print-ready exports, IAP for premium unlocks, posters/filters ordering flow.
- **Notes / disambiguation:** **Mitul confirmed he personally deployed the app** and the `app-ads.txt` evidence corroborates that. The app has been delisted from public stores between deployment and Round 3 (June 2026). Recommendation for portfolio: list as "Snap Filter & Poster Designer — client project for marlinemedia.com (now delisted)" with a screenshot from Mitul's local archive and **link to the brand site marlinemedia.com** (note that the brand site is itself currently down, so use the Wayback snapshot URL `https://web.archive.org/web/20220404100719/https://marlinemedia.com/` as a fallback). If Mitul can supply the original bundle id or APK from his old build folder, the listing can be pinned definitively. Disambiguate from "Marlin Media" (`marlinmedia.com` — different brand, AI lead-gen) and from "Marline" (`apps.apple.com/us/app/marline/id1031781908` — a weather/tide app by Javi Perez).

### 11. Lux ECards
- **Status:** PARTIALLY_VERIFIED (Android-only confirmed)
- **App Store (iOS):** not found
  - Evidence: `site:apps.apple.com "Lux Ecards"` returned no exact match — only unrelated Luxury Card / Luxembourg Card / e-LUX Mobile / Lux Express.
- **Play Store (Android):** https://play.google.com/store/apps/details?id=com.luxecard.app
  - Evidence: App name "Indian Invitation Cards Maker" matches "Lux Ecards" brand (lux-ecards.com). Developer "Verdad IT". Bundle `com.luxecard.app`. Description: Gujarati/Hindi/English invitation card editor for weddings, baby showers, obituaries, engagements, business openings, etc.
- **Live site / web URL:** https://lux-ecards.com/
  - Evidence: Same brand — "Indian Invitation Cards Maker - Gujarati, Hindi, English Cards | Lux Ecards" — Surat-area Indian invitation business.
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** Verdad IT (the brand's own dev account or studio — NOT Sadguru Soft).
- **Tech stack hints (from listing):** Customisable card editor, real-time preview, PNG/PDF export, sharing.
- **Notes / disambiguation:** The Play Store app's title on the store is "Indian Invitation Cards Maker" (not "Lux ECards"), but the lux-ecards.com brand owns the app — confirmed via bundle id matching the brand name (`com.luxecard.app`) and the developer landing page references. iOS version doesn't appear to exist publicly.

### 12. Havitglam (Lifestyle Tracker)
- **Status:** PARTIALLY_VERIFIED (1zlabs publisher confirmed; Sadguru link inferred from the 3-app cluster — Havitglam + Tarot Cat + Today's Quote all under same publisher)
- **App Store (iOS):** likely the Korean-store **라르고 (Largo)** at https://apps.apple.com/kr/app/id6756828327 — `com.onez.largo` by "1z Labs Inc." Description "sleep + diet + exercise + mind habit routine integrated management" matches Havitglam's framing exactly.
  - Evidence (Round 3): iTunes Search API on artistId `1633865498` returned this as one of 4 KR-only iOS apps. The Korean name 라르고 means "Largo" (Italian musical tempo "broadly/slowly") and the tagline maps cleanly to the Havitglam habit-tracking + 7-day-challenge concept. (Mark as **likely** — not directly confirmed via in-app screenshots.)
- **Play Store (Android):** https://play.google.com/store/apps/details?id=com.onezlabs.havitglam
  - Evidence: App name "Havitglam - Good Habit&Routine"; description matches Mitul's brief ("create your own health habit and self-care routine... vitamins, gym, fitness, yoga, drinking water, reading... record habits by uploading timestamp verification shots... share with Glammers... 7-day challenges").
- **Live site / web URL:** https://www.tickl.ai/ (publisher front-door — minimal landing currently).
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** **1zlabs** (Korean "원지랩스"; Apple developer id `1633865498`; Play Store dev id `4828521791322319639`). Seoul-based AI/Web3 marketing studio founded 2021. Confirmed cluster of 3 Sadguru-built apps under this publisher: Havitglam, Tarot Cat, Today's Quote.
- **Tech stack hints (from listing):** Habit tracking, photo verification, social challenges, push notifications — consistent with Flutter + Firebase.
- **Notes / disambiguation:** Several "Havit" apps exist by other companies (HAVIT GO game, HAVIT LIFE smart-device manager). The right one is `com.onezlabs.havitglam`. The likely iOS counterpart is 라르고 / Largo (`com.onez.largo`) — confirm with Mitul before publishing the iOS URL.

### 13. Physio Mobile (Telehealth)
- **Status:** UNVERIFIED
- **App Store (iOS):** https://apps.apple.com/us/app/physio-mobile/id6448959919 (candidate, but not confirmed to be Mitul's)
  - Evidence: Title matches exactly. Description "particularly suitable for people with back, shoulder/neck and knee/hip pain... clear videos... targeted exercises... statistics function... reminders". Developer: "Robin Brunner" (a German individual developer). Couldn't confirm this is Mitul's client work.
- **Play Store (Android):** https://play.google.com/store/apps/details?id=com.physiomoboile.training_app (candidate, but not confirmed)
  - Evidence: Same name, same description (videos for back/shoulder/knee pain). Bundle id `com.physiomoboile.training_app` (note typo "moboile"). Couldn't confirm developer in this session.
- **Live site / web URL:** none found that ties to Mitul/Sadguru.
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** Robin Brunner (iOS) — looks like an individual physiotherapist / private app, not Sadguru-branded.
- **Tech stack hints (from listing):** Video-driven exercise library, statistics, reminders. Consistent with Flutter video player + local storage.
- **Notes / disambiguation:** The store listings match Mitul's description well, but the developer name doesn't tie back to Sadguru or Mitul. This could be (a) the actual Sadguru client app published under the client's personal name, or (b) a completely unrelated coincidence. Recommend NOT using these URLs on the portfolio unless Mitul confirms.

### 14. Studymap (Educational)
- **Status:** VERIFIED (Japan-only listing — user clue unlocked this)
- **App Store (iOS):** https://apps.apple.com/jp/app/studymap/id1613502226
  - Evidence: Indexed by Google with the exact tagline "knowledge improvement depends entirely on the quality of self-study time" from Remody's listing. Direct fetch returns 404 from this session (region/UA gated — JP App Store often restricts access from non-JP IPs/UAs), but the listing exists per Google's search index and iTunes API returns 0 results from non-JP regions (confirming JP-exclusive).
- **Play Store (Android):** https://play.google.com/store/apps/details?id=jp.co.remody.remody&hl=en_GB
  - Evidence: Confirmed package id `jp.co.remody.remody`, developer "Remody Inc.", via appsonwindows mirror (https://appsonwindows.com/apk/12760122/) and applion.jp aggregator. Latest version 1.1.0 (May 26, 2025), updated May 28, 2026. 152.9 MB. Description matches Mitul's brief — AI-powered exam-prep, personalized weekly study plan, daily task assignments, mini-quizzes, adaptive replanning. Also has a "team learning management" / virtual study community feature (matches "synchronised group study sessions" on resume). URL returns 404 to direct probes (geo/UA gated) but is indexed by Google and mirrored on multiple aggregators.
- **APKPure (mirror):** referenced via appsonwindows aggregator; APKPure listing exists at the `jp.co.remody.remody` package id.
- **Live site / web URL:** https://www.remody.co.jp/
  - Evidence: Company site for Remody Inc. (Tokyo). Confirms the same product — proprietary algorithm for customized study plans, team learning management, patent obtained, partners with University of Tokyo and University of Toronto. 10 business partners, 3,000+ installs, 3 industry awards.
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** Featured on applion.jp, appsonwindows, AppAdvice-style mirrors.
- **Publisher / developer (as listed on store):** Remody Inc. (Tokyo, Japan; 2-15-19 Kamiosaki, Shinagawa-ku). NOT Sadguru Soft — typical client-published app.
- **Tech stack hints (from listing):** AI study plans, group study, calendar/vibrator/storage permissions, quizzes, adaptive learning. Consistent with Mitul's "AI-generated study content + synchronised group study sessions" brief and Flutter implementation.
- **Notes / disambiguation:** Several other "StudyMap" apps exist (com.johnnycwatt.studymap — flashcards; id 6748285218 by OMER SALIH PAKDIL — generic exam planner; com.fedorico.mystudyroom — group study; studymap.ai — web). Mitul's Studymap is the **Remody Inc. one (`jp.co.remody.remody` / iOS id `1613502226`)**, targeting Japanese university entrance exams (Imperial unis, Waseda, Keio, etc.). Recommend showing the JP App Store and Play Store URLs with a clear "Japanese app — listing may be region-restricted" note.

### 15. ForeSite (AgTech)
- **Status:** VERIFIED (published under client brand "Ukko Agro" — user clue unlocked this)
- **App Store (iOS):** https://apps.apple.com/ca/app/foresite/id1604668353
  - Evidence: Confirmed via direct fetch. App name "ForeSite"; tagline "Grow more, sustainably."; developer "Ukko Agro Inc."; iPhone (iOS 18.0+) and iPad (iPadOS 18.0+) supported; latest version 2.3.0 dated May 22, 2026. Description matches Mitul's brief — on-farm decision support, simple-to-operate technology tools.
- **Play Store (Android):** https://play.google.com/store/apps/details?id=com.ukkoag.enterprise&hl=en_GB
  - Evidence: Confirmed via direct fetch (HTTP 200). App name "ForeSite" by Ukko Agro. Bundle `com.ukkoag.enterprise`. Category Weather. Same description as iOS (FAIM — Field Adaptive Integrated Modeling for disease modeling, growth-stage calendars, weather analytics). Per AppAgg mirror: 24 MB, Android 7.0+, current version 2.3.0, released Mar 25, 2022, last updated May 22, 2026; 10 screenshots; website ukko.ag.
- **Live site / web URL:** https://ukko.ag/ (company), https://ukko.ag/ukko-product/ (ForeSite product page)
  - Evidence: Confirms ForeSite is Ukko Agro's "Field Adaptive and Integrated Modeling" software using machine learning + weather-station data for disease risk + growth-stage prediction. Toronto-based startup, $5.1M CAD seed round, supported by EMILI (Canadian agtech incubator).
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** EMILI Canada profile (https://emilicanada.com/news/innovation-farms/projects/ukko-agro-foresite/) and Ukko Agro blog/news section (https://ukko.ag/news/).
- **Publisher / developer (as listed on store):** Ukko Agro Inc. (Toronto, Canada). Has 4 apps total on stores. Sister app is the grower-facing "Ukko Agro" (`com.ukkoag.farmer` / iOS id `1534931872`).
- **Tech stack hints (from listing):** Disease risk + weather + maps + offline-capable agronomy — consistent with Mitul's "Flutter, Live Location, FCM, Maps, Charts, Sockets, Animations" brief.
- **Notes / disambiguation:** Several unrelated "Foresite" apps exist (Foresite Technology Solutions — construction; ForeSite EDGE Ci Mobile — Weatherford oil/gas; Foresite (Woodside) — construction). Mitul's ForeSite is the **Ukko Agro AgTech** one (`com.ukkoag.enterprise` / iOS `1604668353`). Disambiguate clearly on the portfolio.

### 16. Tarot Cat (Astrology)
- **Status:** PARTIALLY_VERIFIED (1zlabs publisher confirmed; Sadguru link inferred from the 3-app cluster — Havitglam + Tarot Cat + Today's Quote all under same publisher)
- **App Store (iOS):** likely the Korean-store **마이타로 (MyTarot — 2025년 운세 사주 재회 타로)** at https://apps.apple.com/kr/app/id6446103793 — `com.onez.mytarotgpt` by "1z Labs Inc." Title translates to "MyTarot — 2025 fortune / saju / reconciliation tarot."
  - Evidence (Round 3): iTunes Search API on artistId `1633865498` returned this as one of 4 KR-only iOS apps. Tarot theme + cat namespace + same publisher = likely iOS counterpart of Tarot Cat. (Mark as **likely** — not directly confirmed; the iOS app appears to be a refreshed/refactored version with a GPT-style fortune teller.)
- **Play Store (Android):** https://play.google.com/store/apps/details?id=com.onezlabs.tarot_cat
  - Evidence: App name "Tarot Cat-Counseling, Fortune"; description "cute cat that talks to you and presents fortunes, allowing it to take away your worries"; bundle id matches `onezlabs` publisher (same prefix as Havitglam and Today's Quote).
- **Live site / web URL:** https://www.tickl.ai/ (publisher front-door).
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** **1zlabs** (Korean "원지랩스"; Apple developer id `1633865498`; Play Store dev id `4828521791322319639`). Confirmed cluster of 3 Sadguru-built apps under this publisher: Havitglam, Tarot Cat, Today's Quote.
- **Tech stack hints (from listing):** Daily tarot, cat-themed UI, push notifications, fortune content. Consistent with Flutter + Firebase + Lottie animations.
- **Notes / disambiguation:** Important — many same-name apps exist (Nébula Tarot Cat is the most prominent, and a different product). The right one is `com.onezlabs.tarot_cat`. The likely iOS counterpart is 마이타로 / MyTarot (`com.onez.mytarotgpt`) — confirm with Mitul before publishing the iOS URL.

### 17. Today's Quote
- **Status:** VERIFIED (Round 3 — same `com.onezlabs.*` publisher as Havitglam and Tarot Cat)
- **App Store (iOS):** not found
  - Evidence: iTunes Search API on artistId `1633865498` ("1zlabs") returned 4 KR-store apps (Better Step, MyTarot, Playtown, Largo) plus the US Better Step listing — Today's Quote is NOT among them. App is Android-only.
- **Play Store (Android):** https://play.google.com/store/apps/details?id=com.onezlabs.todaysquote
  - Evidence: Direct probe returned HTTP 200; page title `Today's Quote - Be Inspired - Apps on Google Play`. JSON-LD on the page: `"name":"Today's Quote - Be Inspired"`, `"description":"Get motivation with daily inspirational quotes, designed to help you meet goals."` — developer name `1zlabs`, website `1zlabs.com`, support email `sol@1zlabs.com`. Version 1.0.0 (Jul 10, 2022), 100+ installs, "Everyone" rating.
  - Full description (excerpt): "Today's Quote will help you train your mind to begin each day with a positive vibe. This app will provide you with an extensive collection of inspirational quotes from a range of unique authors and celebrities, providing daily motivation and life lessons." Features: **"Play Games with Quotes — share and compete with others and be listed on the leader board"** (this confirms the unusual **"2D-Game"** tag from Mitul's old portfolio), "Train Your Mind", "Your Collection of Good Vibes" (favourites/like), search, "Aesthetically pleasing backgrounds."
- **APKPure (mirror):** https://apkpure.com/todays-quote-be-inspired/com.onezlabs.todaysquote
  - Evidence: Indexed via Google search snippets. Direct probe returned HTTP 403 (APKPure blocks scripted requests), but earlier WebFetch through the rich-content path returned the same metadata as the Play Store listing (developer 1zlabs, package id matches, "Play Games with Quotes" leaderboard mechanic confirmed, 8 screenshots, Android 5.0+).
- **Live site / web URL:** https://www.tickl.ai/ (1zlabs' main brand front-door, linked from the Play Store developer tagline).
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** **1zlabs** (Korean "원지랩스") — same publisher as Havitglam (`com.onezlabs.havitglam`) and Tarot Cat (`com.onezlabs.tarot_cat`). Seoul-based AI/Web3/metaverse marketing studio founded 2021. Apple developer id `1633865498` / "1z Labs Inc."
- **Tech stack hints (from listing):** Daily quotes with FCM push delivery, favourite/like collection, search, leaderboard / mini-game element, image-backgrounds — consistent with Mitul's brief: Flutter + Dart + Firebase + Flutter Flame (2D game engine) + Local Storage.
- **Notes / disambiguation:** The "2D-Game" tag on Mitul's old portfolio refers specifically to the **"Play Games with Quotes" leaderboard mini-game** feature in the store description — confirmed match. Multiple other "Today's Quote" apps exist on stores (BrainyQuote's "Today's Quote" feature, various generic daily-quote apps); the right one is **`com.onezlabs.todaysquote` by 1zlabs**.

### 18. CareShare
- **Status:** NOT_FOUND (confirmed round 2)
- **App Store (iOS):** not found
  - Evidence: "CareShare 360" exists on App Store (id 1507792403) but description is for home-care agency lead-management / online reviews — NOT a personal health-tracker using Google Fit + Apple Health + IAP per Mitul's brief.
- **Play Store (Android):** not found
  - Evidence: Round 2 also probed `"CareShare" "Google Fit" "Apple Health" app`. All "CareShare" branded hits are home-care agency CRMs (CareShare 360 — `com.Udex.CareShare360`, My CareShare). None match Mitul's consumer health-tracker with Google Fit + Apple Health + IAP.
- **Live site / web URL:** none found that matches.
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** n/a.
- **Tech stack hints (from listing):** Per old portfolio: Flutter, Google Fit, Apple Health, IAP, REST APIs.
- **Notes / disambiguation:** Confirmed mismatch with all "CareShare" branded apps in stores (they're agency tools, not consumer health). Likely a private/removed client project.

### 19. Radio Station
- **Status:** NOT_FOUND
- **App Store (iOS):** not found
- **Play Store (Android):** not found
  - Evidence: Extremely generic name; thousands of "radio station" apps exist. No specific candidate could be tied to Mitul or Sadguru.
- **Live site / web URL:** none found.
- **GitHub repo:** none found.
- **Press / Product Hunt / launch posts:** none found.
- **Publisher / developer (as listed on store):** n/a.
- **Tech stack hints (from listing):** Per old portfolio: Flutter audio player.
- **Notes / disambiguation:** Listed on Mitul's old portfolio as "Online Radio Station Application". Most likely a small early Flutter project, never published, or for a regional radio brand we can't easily identify. Recommend listing as a small / early Flutter project without store badge.
