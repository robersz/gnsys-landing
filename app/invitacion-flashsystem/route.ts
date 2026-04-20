import { readFile } from "node:fs/promises";
import path from "node:path";

const isProduction = process.env.NODE_ENV === "production";

const invitationContentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self' https://crm.zoho.com",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "img-src 'self' data: blob: https://*.googleapis.com https://*.gstatic.com https://www.google.com https://maps.google.com https://maps.gstatic.com",
  "font-src 'self' data: blob:",
  "style-src 'self' 'unsafe-inline' blob:",
  `script-src 'self' 'unsafe-inline' blob:${isProduction ? "" : " 'unsafe-eval'"}`,
  "connect-src 'self' blob:",
  "frame-src https://www.google.com https://maps.google.com https://maps.gstatic.com https://maps.googleapis.com",
  isProduction ? "upgrade-insecure-requests" : null,
]
  .filter(Boolean)
  .join("; ");

function buildHeaders() {
  const headers = new Headers({
    "Cache-Control": "public, max-age=0, must-revalidate",
    "Content-Security-Policy": invitationContentSecurityPolicy,
    "Content-Type": "text/html; charset=utf-8",
    "Cross-Origin-Resource-Policy": "same-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Content-Type-Options": "nosniff",
    "X-DNS-Prefetch-Control": "off",
  });

  if (isProduction) {
    headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload",
    );
  }

  return headers;
}

async function readInvitationHtml() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "invitacion-flashsystem.html",
  );

  return readFile(filePath, "utf8");
}

export async function GET() {
  const html = await readInvitationHtml();
  return new Response(html, { headers: buildHeaders() });
}

export async function HEAD() {
  await readInvitationHtml();
  return new Response(null, { headers: buildHeaders() });
}
