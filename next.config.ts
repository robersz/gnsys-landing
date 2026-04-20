import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const defaultContentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self' https://crm.zoho.com",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "img-src 'self' data: https://*.googleapis.com https://*.gstatic.com https://www.google.com https://maps.google.com https://maps.gstatic.com",
  "font-src 'self' data:",
  // TODO: Replace unsafe-inline with nonces once a CSP nonce strategy is in place.
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self' 'unsafe-inline'${isProduction ? "" : " 'unsafe-eval'"}`,
  "connect-src 'self'",
  "frame-src https://www.google.com https://maps.google.com https://maps.gstatic.com https://maps.googleapis.com",
  isProduction ? "upgrade-insecure-requests" : null,
]
  .filter(Boolean)
  .join("; ");

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

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/invitacion-flashsystem",
        destination: "/invitacion-flashsystem.html",
        permanent: false,
      },
    ];
  },
  async headers() {
    const baseSecurityHeaders = [
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-DNS-Prefetch-Control", value: "off" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
    ];

    if (isProduction) {
      baseSecurityHeaders.push({
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      });
    }

    return [
      {
        source: "/invitacion-flashsystem.html",
        headers: [
          { key: "Content-Security-Policy", value: invitationContentSecurityPolicy },
          ...baseSecurityHeaders,
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: defaultContentSecurityPolicy },
          ...baseSecurityHeaders,
        ],
      },
    ];
  },
};

export default nextConfig;
