export const profile = {
  name: "Mitul R. Vaghasiya",
  shortName: "Mitul Vaghasiya",
  headline: "Senior Mobile Engineer & Development Lead",
  tagline: "Architecting and shipping high-performance mobile apps across Flutter, Kotlin and Swift.",
  location: "Surat, Gujarat, India",
  yearsExperience: "6+",
  languagesSpoken: ["English", "Hindi", "Gujarati"],
  bioShort:
    "Senior Mobile Engineer leading the mobile practice at KGK InfoTech LLP. 6+ years architecting Flutter, Kotlin, Java and Swift apps, with a focus on Clean Architecture, performance, and shipping at scale.",
  bioLong: [
    "I lead the mobile practice at KGK InfoTech LLP — owning architecture, mentorship, and shipping for a portfolio of cross-platform and native apps. Before that I spent five years at Sadguru Soft, rising from junior Flutter dev to senior, leading client engagements across India, Canada, Japan and Korea.",
    "My focus is on the boring parts of mobile engineering done well: clean architecture, fast startup, no dropped frames, and disciplined release pipelines. The visible result is apps that feel responsive on entry-level Androids and survive heavy data on the iOS side.",
    "I'm equally comfortable writing Flutter, dropping into Kotlin/Swift for native bridges, or running the CI that ships the build. I mentor the engineers around me, run code review, and translate fuzzy business intent into shippable scope.",
  ],
  email: "mr.vaghasiya197@gmail.com",
  phone: "+91 6353824140", // TODO confirm public visibility
  resumeFile: "/resume/mitul-vaghasiya-resume.pdf",
  // Surfaced on the home "status console" — keep honest, matches the GitHub README.
  currentlyLearning: ["Rust", "Server-side Dart", "PostgreSQL"],
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
      { name: "Kotlin", level: "expert" },
      { name: "Java", level: "expert" },
      { name: "Swift", level: "expert" },
      { name: "SwiftUI", level: "strong" },
      { name: "UIKit", level: "strong" },
      { name: "Jetpack Compose", level: "strong" },
      { name: "Android (native)", level: "strong" },
      { name: "iOS (native)", level: "strong" },
      { name: "Kotlin Multiplatform", level: "strong" },
    ],
  },
  {
    title: "Architecture",
    skills: [
      { name: "Clean Architecture", level: "expert" },
      { name: "MVVM", level: "expert" },
      { name: "BLoC", level: "expert" },
      { name: "SOLID", level: "expert" },
      { name: "Performance optimisation", level: "expert" },
      { name: "Memory management", level: "expert" },
      { name: "Method Channels (Flutter ↔ native)", level: "expert" },
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
      { name: "Cursor / Claude / GPT" },
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
      "Lead the mobile practice covering Flutter cross-platform and native (Kotlin / Swift) work.",
      "Translate complex business requirements into solutions using Clean Architecture and SOLID principles.",
      "Direct cross-functional engineering teams via Agile / Scrum to accelerate flagship application delivery.",
      "Mentor developers, drive rigorous code reviews, and streamline CI/CD workflows.",
      "Optimise app performance, resolve memory bottlenecks, and drive RESTful API + backend integrations.",
    ],
  },
  {
    company: "Sadguru Soft",
    title: "Senior Mobile Application Developer",
    period: "Nov 2019 — Mar 2025",
    location: "Surat, Gujarat, India",
    highlights: [
      "Promoted from Jr. Flutter Dev → Flutter Dev → Expert Flutter Dev → Senior Mobile App Developer.",
      "Led technical strategy, Agile sprint planning, and international client consulting (India, Canada, Japan, Korea).",
      "Engineered Flutter ↔ native bridges via Method Channels; optimised memory and widget lifecycles to 60 fps and significantly faster app launch times.",
      "Standardised cross-project architecture by enforcing Clean Architecture, SOLID, and rigorous code reviews.",
      "Directed end-to-end DevOps lifecycles and CI/CD pipelines, from UI/UX implementation and GCP integrations to React.js / Next.js web deployment.",
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
    url: null as string | null, // TODO add link
  },
];
