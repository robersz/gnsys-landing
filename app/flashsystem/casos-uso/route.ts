import {
  servePublicHtml,
  servePublicHtmlHead,
} from "../_lib/serve-public-html";

const useCasesContentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "img-src 'self' data:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
]
  .filter(Boolean)
  .join("; ");

export async function GET() {
  return servePublicHtml(
    "casos_uso_flashsystem.html",
    useCasesContentSecurityPolicy,
  );
}

export async function HEAD() {
  return servePublicHtmlHead(
    "casos_uso_flashsystem.html",
    useCasesContentSecurityPolicy,
  );
}
