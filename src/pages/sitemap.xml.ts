import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE = "https://mitulvaghasiya.com";

export const GET: APIRoute = async () => {
  const work = await getCollection("work");
  // Build-time stamp — the one freshness signal crawlers still honor.
  const lastmod = new Date().toISOString().slice(0, 10);

  type Url = { path: string; image?: string };
  const staticPaths: Url[] = [
    { path: "/" }, { path: "/work" }, { path: "/resume" }, { path: "/contact" },
  ];
  // Per-project image entries surface the screenshots in Google Images.
  // Skip the placeholder heroes (the not-yet-shot projects).
  const workPaths: Url[] = work.map((entry) => {
    const img = entry.data.hero || entry.data.gallery?.[0];
    return {
      path: `/work/${entry.slug}`,
      image: img && !img.includes("placeholder") ? img : undefined,
    };
  });
  const all = [...staticPaths, ...workPaths];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${all
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.path === "/" ? "1.0" : "0.7"}</priority>${
      u.image ? `\n    <image:image><image:loc>${SITE}${u.image}</image:loc></image:image>` : ""
    }
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
