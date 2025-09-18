// deploy-sitemap.js
// Simple generator to update public/sitemap.xml and optionally ping search engines.
// Run: node deploy-sitemap.js

import fs from "fs";

const base = "https://broadsomedia.agency";
const pages = [
  { url: "/", changefreq: "daily", priority: "1.0" },
  { url: "/#about", changefreq: "monthly", priority: "0.8" },
  { url: "/#who", changefreq: "monthly", priority: "0.8" },
  { url: "/#access", changefreq: "weekly", priority: "0.9" },
  { url: "/#contact", changefreq: "weekly", priority: "0.9" }
];

const now = new Date().toISOString().split("T")[0];
const urls = pages.map(p => `  <url><loc>${base}${p.url}</loc><lastmod>${now}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

fs.writeFileSync("./public/sitemap.xml", sitemap, "utf8");
console.log("✅ public/sitemap.xml updated.");

// Optional: ping Google (uncomment to enable; ensure NODE >=18 for global fetch or use node-fetch)
// const googlePing = `https://www.google.com/ping?sitemap=${encodeURIComponent(base + '/sitemap.xml')}`;
// fetch(googlePing).then(()=>console.log("✅ Google pinged")).catch(()=>console.log("⚠️ Google ping failed"));
