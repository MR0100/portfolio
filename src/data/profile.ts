export const profile = {
  name: "Mitul R. Vaghasiya",
  shortName: "Mitul Vaghasiya",
  headline: "Senior Mobile Engineer & Development Lead",
  tagline: "Architecting and shipping high-performance mobile apps across Flutter, Kotlin and Swift.",
  location: "Surat, Gujarat, India",
  yearsExperience: "6+",
  languagesSpoken: ["English", "Hindi", "Gujarati"],
  // Notice period for the Indian market — material signal for recruiters scoping
  // candidates against their roll-on dates. Update as your contract changes.
  noticePeriod: "45 days",
  // ── Summary — follows the T01 guide structure:
  //   [Years + tier] [role] specializing in [2–3 specific things].
  //   Shipped [biggest measurable result].
  //   Currently [present scope]. Looking for [next scope].
  // Metric placeholders are in [BRACKETS] — fill them with real numbers.
  bioShort:
    "Senior Mobile Engineer & Development Lead with 6+ years on Flutter, Kotlin, and Swift, specializing in clean-architecture cross-platform builds, Flutter↔native bridges (Method Channels), and disciplined mobile release pipelines. Shipped 19 production apps (13 still live across iOS + Android) including KGK Buy Diamonds — the B2B trading app putting 50,000+ certified diamonds in front of wholesalers in 10+ countries — and led 4 promotions through Jr → Senior Flutter Dev in 5 years. Currently leading the mobile practice at KGK InfoTech LLP, owning architecture + delivery for KGK Buy Diamonds and KGK HRMS. Open to senior IC, mobile lead, and architecture roles in product fintech, B2B SaaS, and consumer mobile.",
  bioLong: [
    "I lead the mobile practice at KGK InfoTech LLP — owning architecture, mentorship, and shipping for a portfolio of cross-platform and native apps that includes KGK Buy Diamonds (the B2B platform behind a 120-year diamond house and 50,000+ certified inventory) and KGK HRMS. Before that I spent 5+ years at Sadguru Soft, rising from junior Flutter dev to senior, leading client engagements across India, Canada, Japan and Korea.",
    "My focus is on the boring parts of mobile engineering done well: clean architecture, fast startup, no dropped frames, and disciplined release pipelines. The visible result is apps that feel responsive on entry-level Androids and survive heavy data on the iOS side.",
    "I'm equally comfortable writing Flutter, dropping into Kotlin/Swift for native bridges, or running the CI that ships the build. I mentor the engineers around me, run code review, and translate fuzzy business intent into shippable scope.",
  ],
  email: "mr.vaghasiya197@gmail.com",
  // Single source for the "Download" CTA across the site. Points at the
  // pre-generated PDF in /public/resume/. Regenerate this file from
  // /resume/print → File → Print → Save as PDF (A4) whenever the source
  // resume content changes, then commit the updated PDF.
  resumeFile: "/resume/mitul-vaghasiya-resume.pdf",
  // Surfaced on the home "status console" — keep honest, matches the GitHub README.
  currentlyLearning: ["Rust", "Server-side Dart"],
  socials: {
    github: "https://github.com/MR0100",
    linkedin: "https://www.linkedin.com/in/mitul-vaghasiya-075a53166",
    twitter: "https://twitter.com/_MR_0100",
    email: "mailto:mr.vaghasiya197@gmail.com",
  },
} as const;

// Open-source contributions worth listing. Only include if LOAD-BEARING per the
// T01 guide — merged non-trivial PRs into recognized projects, libraries with
// real adoption (>100 stars / >1k downloads), maintainership of something used.
// Empty by default; populate when you have at least one item worth featuring.
export type OssEntry = {
  title: string;           // Project / PR title
  repo: string;            // Display repo string (e.g. "flutter/flutter")
  url: string;             // Link to PR / repo
  detail: string;          // 1-line description of what / impact
  badge?: string;          // Optional badge (e.g. "Merged", "Maintainer", "120 ★")
};
export const openSource: OssEntry[] = [];

// Talks, blog posts, publications. Same load-bearing bar as OSS: only conference
// talks at recognized venues, posts with real distribution, or external write-ups.
export type TalkEntry = {
  title: string;
  venue: string;           // Where (conference / publication / blog name)
  date: string;            // "Month YYYY"
  url?: string;            // Slides / recording / post link
  detail?: string;         // Optional 1-line description
};
export const talks: TalkEntry[] = [];

export type Skill = {
  name: string;
  level?: "expert" | "strong" | "familiar" | "learning";
};

export const skillGroups: Array<{ title: string; skills: Skill[] }> = [
  {
    title: "Mobile & native",
    skills: [
      { name: "Flutter", level: "expert" },
      { name: "Dart", level: "expert" },
      { name: "Kotlin", level: "strong" },
      { name: "Swift", level: "strong" },
      { name: "Java", level: "strong" },
      { name: "Android (native)", level: "strong" },
      { name: "iOS (native)", level: "strong" },
      { name: "SwiftUI", level: "familiar" },
      { name: "UIKit", level: "familiar" },
      { name: "Jetpack Compose", level: "familiar" },
      { name: "Kotlin Multiplatform", level: "familiar" },
    ],
  },
  {
    title: "Architecture",
    skills: [
      { name: "Clean Architecture", level: "expert" },
      { name: "BLoC", level: "expert" },
      { name: "Method Channels (Flutter ↔ native)", level: "expert" },
      { name: "Performance optimisation", level: "expert" },
      { name: "Memory management", level: "expert" },
      { name: "MVVM", level: "strong" },
      { name: "SOLID", level: "strong" },
    ],
  },
  {
    title: "Web & backend",
    skills: [
      { name: "React", level: "strong" },
      { name: "Next.js", level: "strong" },
      { name: "Node.js", level: "strong" },
      { name: "Express", level: "strong" },
      { name: "NestJS", level: "strong" },
      { name: "TypeScript", level: "strong" },
      { name: "Ktor", level: "familiar" },
      { name: "Tauri", level: "familiar" },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "PostgreSQL", level: "strong" },
      { name: "MySQL", level: "strong" },
      { name: "MongoDB", level: "strong" },
      { name: "Firebase", level: "strong" },
      { name: "SQLite", level: "strong" },
    ],
  },
  {
    title: "Leadership & process",
    skills: [
      { name: "Team management" },
      { name: "Mentorship" },
      { name: "Agile / Scrum" },
      { name: "Sprint grooming" },
      { name: "Code review" },
      { name: "Client consulting" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub / GitLab" },
      { name: "CI/CD" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "Firebase Crashlytics" },
      { name: "Jira / ClickUp" },
      { name: "Playwright" },
    ],
  },
  {
    title: "AI dev tools",
    skills: [
      { name: "Cursor", level: "strong" },
      { name: "Claude Code", level: "strong" },
      { name: "GPT", level: "strong" },
    ],
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
};

// Bullets follow the T01/T02 craft rule: lead with an ACTION VERB and end with
// MEASURABLE IMPACT (or honest scope number). Metrics in [BRACKETS] are
// placeholders — fill with real numbers. Aim for 4–6 bullets on current role
// tapering to 3–4 on older roles.
export const experience: Role[] = [
  {
    company: "KGK InfoTech LLP",
    title: "Mobile Development Team Lead",
    period: "Apr 2025 — Present",
    location: "Surat, Gujarat, India",
    highlights: [
      "Lead a 7-person cross-functional team (2 mobile, 1 backend, 1 web, 1 design, 2 QA) shipping KGK Buy Diamonds — the Flutter B2B trading app surfacing 50,000+ certified diamonds to wholesalers across 10+ countries — and KGK HRMS; own architecture, code review, sprint scoping, and post-release crash triage.",
      "Imposed Clean Architecture + BLoC as the team standard across the KGK mobile portfolio, cutting cross-feature merge-conflict rate ~65% and reducing onboarding time for new engineers from 5 → 2 weeks.",
      "Re-engineered the inventory-grid performance path (virtualised lists, server-driven filter UX, redesigned payload shape) — pushing sustained scroll FPS from 50 → 60 on entry-level Android and cutting first-paint of the grid screen from 5s → 2s under traders' real network conditions.",
      "Cut KGK Buy Diamonds APK size by 10% and cold-start latency by 45% via tree-shaking, deferred asset loading, and Hive cache priming — measured against mid-tier Android 12 devices (Samsung A-series, Xiaomi Redmi 10/11).",
      "Own the mobile release pipeline end-to-end (Git workflow, CI builds, Jira-linked release notes, App Store + Play Store delivery), reducing release cycle time from 4 → 1.5 days and pushing crash-free sessions to 99.9% across both stores.",
      "Mentor 5 of the 7-member cross-functional team; 2 internal promotions in 12 months. Partner with non-technical diamond vendors across 10+ countries to translate trading workflows + multilingual stakeholder intent into shippable scope.",
    ],
  },
  {
    company: "Sadguru Soft",
    title: "Senior Mobile Application Developer",
    period: "Nov 2019 — Mar 2025",
    location: "Surat, Gujarat, India",
    highlights: [
      "Promoted 4× in 5 years: Jr Flutter Dev → Flutter Dev → Expert Flutter Dev → Senior Mobile App Developer.",
      "Led 19 production app builds across 4 international markets (India, Canada, Japan, Korea) and 5 industries — agritech (Ukko Agro / Foresite), health-data AI (Lili), JP ed-tech (Studymap → Remody), KR consumer (Havitglam, Tarot Cat, Today's Quote) — sustaining 99% post-launch crash-free sessions across the portfolio.",
      "Shipped Flutter ↔ native bridges via Method Channels (Kotlin + Swift) for 4 projects where Dart alone wasn't enough — background location for Warden Tracker, USB-serial TPMS telemetry for Setera, secure WebSocket telemetry for Foresite, native maps for BookMrk Delivery.",
      "Sustained a 4.23★ App Store rating across 30+ reviews on Lili (Health Data AI) by refactoring chat-history bursts onto a windowed BLoC stream — cut cold-start jitter and memory pressure during heavy biometric-data ingestion.",
      "Drove Clean Architecture + BLoC adoption across 10 new builds; ran code review for 20+ engineers and mentored several into senior IC trajectories.",
      "Owned mobile delivery on every engagement: scoping, sprint planning, CI/CD pipelines (Codemagic / GitHub Actions), Play Store + App Store submissions, and post-launch crash triage (Crashlytics).",
    ],
  },
];

export const education = [
  {
    institution: "S.V. Patel College of Computer Application & Management",
    degree: "Bachelor of Computer Applications (B.C.A)",
    period: "2017 — 2020",
    location: "Katargam, Surat, Gujarat, India",
  },
];

export const certifications = [
  {
    title: "Certified Frontend Engineer in Flutter",
    issuer: "Pro5",
    note: "Ranked in top 5% of professionals",
    url: "https://drive.google.com/file/d/1O7zn6UVjArLrAM5f_UywToehhe3oCe3-/view?usp=sharing" as string | null,
  },
];
