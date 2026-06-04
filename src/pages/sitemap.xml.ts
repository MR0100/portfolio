import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE = "https://mitulvaghasiya.com";

export const GET: APIRoute = async () => {
  const work = await getCollection("work");
  const staticPaths = ["/", "/work", "/resume", "/contact"];
  const workPaths = work.map((entry) => `/work/${entry.slug}`);
  const all = [...staticPaths, ...workPaths];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (path) => `  <url>
    <loc>${SITE}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.7"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
