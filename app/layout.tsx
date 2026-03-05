import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://gnsys.com.mx"),
  title: "Gnsys Informática",
  description: "Consultores en Tecnología",
  openGraph: {
    title: "Gnsys Informática",
    description: "Consultores en Tecnología",
    url: "https://gnsys.com.mx",
    siteName: "Gnsys Informática",
    images: [
      {
        url: "/hero-gnsys.png",
        width: 1200,
        height: 630,
        alt: "Gnsys Informática",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gnsys Informática",
    description: "Consultores en Tecnología",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* 👇 FOOTER Globally Visible */}
        <Footer />
      </body>
    </html>
  );
}
