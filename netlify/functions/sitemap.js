// netlify/functions/sitemap.js
// Returns a dynamically generated sitemap.xml (simple example).
// If you use a build step, prefer generating static sitemap.xml at build time.

exports.handler = async function (event, context) {
  const base = "https://broadsomedia.agency";
  const pages = [
    { loc: "/", changefreq: "daily", priority: "1.0" },
    { loc: "/#about", changefreq: "monthly", priority: "0.8" },
    { loc: "/#who", changefreq: "monthly", priority: "0.8" },
    { loc: "/#access", changefreq: "weekly", priority: "0.9" },
    { loc: "/#contact", changefreq: "weekly", priority: "0.9" },
    { loc: "/feed.xml", changefreq: "weekly", priority: "0.2" }
  ];

  const now = new Date().toISOString().split("T")[0];
  const urls = pages.map(p => {
    return `<url><loc>${base}${p.loc}</loc><lastmod>${now}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`;
  }).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
    body: sitemap
  };
};
