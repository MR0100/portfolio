export const profile = {
  name: "Mitul R. Vaghasiya",
  shortName: "Mitul Vaghasiya",
  headline: "Senior Mobile Engineer & Development Lead",
  tagline: "Architecting and shipping high-performance mobile apps across Flutter, Kotlin and Swift.",
  location: "Surat, Gujarat, India",
  yearsExperience: "6+",
  languagesSpoken: ["English", "Hindi", "Gujarati"],
  bioShort:
    "Senior Mobile Engineer leading the mobile practice at KGK InfoTech LLP — the team behind the B2B trading platform that puts 50,000+ certified diamonds in front of wholesalers across 10+ countries. 6+ years across Flutter and native; 19 production apps shipped, 13 still live in public stores.",
  bioLong: [
    "I lead the mobile practice at KGK InfoTech LLP — owning architecture, mentorship, and shipping for a portfolio of cross-platform and native apps that includes KGK Buy Diamonds (the B2B platform behind a 120-year diamond house and 50,000+ certified inventory) and KGK HRMS. Before that I spent 5+ years at Sadguru Soft, rising from junior Flutter dev to senior, leading client engagements across India, Canada, Japan and Korea.",
    "My focus is on the boring parts of mobile engineering done well: clean architecture, fast startup, no dropped frames, and disciplined release pipelines. The visible result is apps that feel responsive on entry-level Androids and survive heavy data on the iOS side.",
    "I'm equally comfortable writing Flutter, dropping into Kotlin/Swift for native bridges, or running the CI that ships the build. I mentor the engineers around me, run code review, and translate fuzzy business intent into shippable scope.",
  ],
  email: "mr.vaghasiya197@gmail.com",
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

export const experience: Role[] = [
  {
    company: "KGK InfoTech LLP",
    title: "Mobile Development Team Lead",
    period: "Apr 2025 — Present",
    location: "Surat, Gujarat, India",
    highlights: [
      "Lead the mobile team shipping KGK Buy Diamonds — the Flutter B2B trading app putting 50,000+ certified diamonds in front of retailers and wholesalers across 10+ countries — and KGK HRMS, the internal HR system.",
      "Imposed Clean Architecture + BLoC as the standard across the KGK mobile portfolio so feature work fans out without stepping on shared state.",
      "Tuned the inventory-grid performance path — virtualised lists, filter UX as a first-class screen, payload shape redesigned for traders' real network conditions — so the app feels professional on entry-level Androids.",
      "Own the mobile release pipeline end-to-end: Git workflow, CI builds, Jira-linked release notes, App Store + Play Store delivery.",
      "Mentor mobile engineers, run code review, and translate fuzzy business intent into shippable scope with multilingual stakeholders.",
    ],
  },
  {
    company: "Sadguru Soft",
    title: "Senior Mobile Application Developer",
    period: "Nov 2019 — Mar 2025",
    location: "Surat, Gujarat, India",
    highlights: [
      "Promoted four times in 5+ years: Jr Flutter Dev → Flutter Dev → Expert Flutter Dev → Senior Mobile App Developer.",
      "Led international client engagements across India, Canada, Japan, and Korea — agritech (Ukko Agro / Foresite), health-data AI (Lili), JP ed-tech (Studymap, now Remody), KR consumer (Havitglam, Tarot Cat, Today's Quote).",
      "Shipped Flutter ↔ native bridges (Kotlin / Swift) via Method Channels for projects where Dart wasn't enough — background location, USB serial telemetry, native maps, secure WebSocket telemetry.",
      "Imposed Clean Architecture and BLoC patterns across new builds; ran code review and mentored engineers up the seniority ladder.",
      "Owned mobile delivery: feature scoping, sprint planning, CI/CD pipelines, Play Store / App Store submissions, post-launch crash triage.",
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
