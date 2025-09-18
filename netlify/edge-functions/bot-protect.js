// netlify/edge-functions/bot-protect.js
// Edge protection: simple UA-based blocker. Tweak to your environment.
// Note: Netlify Edge Functions use different runtime signatures depending on config.
// Adapt as needed (this is a canonical example).

export default async (request, context) => {
  const ua = (request.headers.get("user-agent") || "").toLowerCase();
  const badUaPatterns = ["curl", "python", "wget", "scrapy", "nikto", "sqlmap", "httpclient", "bot"];

  if (badUaPatterns.some(p => ua.includes(p))) {
    return new Response("Forbidden", { status: 403 });
  }

  // Allow normal traffic
  return context.next();
};
