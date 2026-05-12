import "./globals.css";

import { Newsreader, Geist, Geist_Mono } from "next/font/google";
import { EcomNordNav } from "@/components/layout/ecomnord-nav";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/site.config";

import type { Metadata } from "next";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EcomNord — Google Ads & Feed Management",
    template: "%s · EcomNord",
  },
  description: siteConfig.site_description,
  metadataBase: new URL(siteConfig.site_domain),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: siteConfig.site_domain,
    siteName: siteConfig.site_name,
    title: "EcomNord — Google Ads & Feed Management",
    description: siteConfig.site_description,
  },
  twitter: {
    card: "summary_large_image",
    title: "EcomNord — Google Ads & Feed Management",
    description: siteConfig.site_description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="da"
      className={`${newsreader.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <head />
      <body className="bg-paper text-ink font-body antialiased">
        <EcomNordNav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
