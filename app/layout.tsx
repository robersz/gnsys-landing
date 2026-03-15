import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "../components/Footer";   // 👈 IMPORTANTE

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DESCRIPTION =
  "Gnsys Informática — Consultoría en infraestructura, cloud, virtualización e IA para empresas en México. Más de 15 años transformando centros de datos.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gnsys.com.mx"),
  title: "Gnsys Informática",
  description: DESCRIPTION,
  alternates: {
    canonical: "https://gnsys.com.mx",
  },
  openGraph: {
    title: "Gnsys Informática",
    description: DESCRIPTION,
    url: "https://gnsys.com.mx",
    siteName: "Gnsys Informática",
    images: [
      {
        url: "/hero-gnsys.png",
        width: 1200,
        height: 630,
        alt: "Gnsys Informática — Infraestructura, Cloud, IA",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gnsys Informática",
    description: DESCRIPTION,
    images: ["/hero-gnsys.png"],
  },
  icons: {
    icon: "/gnsys-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* 👇 FOOTER Globally Visible */}
        <Footer />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
