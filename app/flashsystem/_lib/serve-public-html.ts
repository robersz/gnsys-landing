import { readFile } from "node:fs/promises";
import path from "node:path";

const isProduction = process.env.NODE_ENV === "production";

function buildHeaders(contentSecurityPolicy: string) {
  const headers = new Headers({
    "Cache-Control": "public, max-age=0, must-revalidate",
    "Content-Security-Policy": contentSecurityPolicy,
    "Content-Type": "text/html; charset=utf-8",
    "Cross-Origin-Resource-Policy": "same-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Content-Type-Options": "nosniff",
    "X-DNS-Prefetch-Control": "off",
    "X-Robots-Tag": "noindex, nofollow",
  });

  if (isProduction) {
    headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload",
    );
  }

  return headers;
}

async function readPublicHtml(fileName: string) {
  const filePath = path.join(process.cwd(), "public", fileName);
  return readFile(filePath, "utf8");
}

export async function servePublicHtml(
  fileName: string,
  contentSecurityPolicy: string,
) {
  const html = await readPublicHtml(fileName);
  return new Response(html, { headers: buildHeaders(contentSecurityPolicy) });
}

export async function servePublicHtmlHead(
  fileName: string,
  contentSecurityPolicy: string,
) {
  await readPublicHtml(fileName);
  return new Response(null, { headers: buildHeaders(contentSecurityPolicy) });
}
