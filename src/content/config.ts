import { defineCollection, z } from "astro:content";

const statusEnum = z.enum([
  "verified", // App store / live URL verified by Round 2/3 research.
  "brand-verified", // Brand site exists but no live store listing.
  "internal", // Internal B2B / private app, never publicly listed.
  "unlisted", // Was on stores, now delisted; mirror link may exist.
  "early", // Early Flutter project, no public link.
]);

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    oneLiner: z.string(),
    status: statusEnum,
    category: z.string(),
    role: z.string(),
    employer: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    client: z.string().optional(),
    publisher: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    // Atlas — geography of the client / project home
    region: z
      .enum([
        "South Asia",
        "East Asia",
        "Southeast Asia",
        "North America",
        "South America",
        "Europe",
        "International / unknown",
      ])
      .default("International / unknown"),
    city: z.string().optional(),
    country: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    links: z
      .object({
        appStore: z.string().url().optional(),
        playStore: z.string().url().optional(),
        liveSite: z.string().url().optional(),
        apkPure: z.string().url().optional(),
        github: z.string().url().optional(),
        press: z.array(z.string().url()).optional(),
      })
      .default({}),
    hero: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    accent: z.string().optional(), // hex chip color
    needsAssets: z.boolean().default(false),
    todos: z.array(z.string()).default([]),
  }),
});

export const collections = { work };
