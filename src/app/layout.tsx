import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { siteConfig, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Fraunces carries the display voice: a warm, high-contrast serif that reads as
// editorial rather than corporate. Inter stays on body copy for legibility.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Hindis",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/hindis-favicon-48x48.png",
    shortcut: "/images/hindis-favicon-48x48.png",
    apple: "/images/hindis-favicon-48x48.png",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <MotionProvider>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
