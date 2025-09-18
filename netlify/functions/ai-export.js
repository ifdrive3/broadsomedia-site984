// netlify/functions/ai-export.js
// Simple NDJSON export of key site sections for AI ingestion
// Exports text lines (NDJSON). Adapt to your preferred content source if you have CMS.

exports.handler = async function (event, context) {
  const items = [
    { section: "hero", title: "Broadsomedia™ — For Those Who Set the Standard", text: "Your brand’s ascent begins here. We partner exclusively with organizations prepared to operate beyond conventional limits..." },
    { section: "about", title: "Who We Are — More Than An Agency", text: "Broadsomedia™ is a global media partner for those who set the standard. We operate beyond convention..." },
    { section: "access", title: "Access Levels", text: "IGNITE: From $569/month. SURGE: From $1,499/month. PINNACLE: From $4,799/month. ASCEND: Coming soon." }
  ];

  const ndjson = items.map(i => JSON.stringify(i)).join("\n");
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/x-ndjson; charset=utf-8", "Cache-Control": "public, max-age=300" },
    body: ndjson
  };
};
