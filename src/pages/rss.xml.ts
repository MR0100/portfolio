import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { profile } from "~/data/profile";

const SITE = "https://mitulvaghasiya.com";

const escapeXml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[c]!));

export const GET: APIRoute = async () => {
  const notes = (await getCollection("notes"))
    .filter((n) => !n.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const items = notes
    .map(
      (n) => `    <item>
      <title>${escapeXml(n.data.title)}</title>
      <link>${SITE}/notes/${n.slug}</link>
      <guid>${SITE}/notes/${n.slug}</guid>
      <pubDate>${n.data.date.toUTCString()}</pubDate>
      <description>${escapeXml(n.data.description)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(profile.name)} — Notes</title>
    <link>${SITE}/notes</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Writing on mobile engineering — Flutter, native bridges, and shipping at scale.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
