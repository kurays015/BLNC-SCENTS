import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParallaxShadow } from "@/components/ui/ParallaxShadow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "BLNC SCENTS — Strength in Balance",
    template: "%s | BLNC SCENTS",
  },
  description:
    "Luxury extrait de parfum collection by BLNC SCENTS. Five signature fragrances inspired by iconic scents, crafted with strength in balance.",
  openGraph: {
    title: "BLNC SCENTS — Strength in Balance",
    description:
      "Luxury extrait de parfum collection. Five signature fragrances inspired by iconic scents.",
    type: "website",
    locale: "en_US",
    siteName: "BLNC SCENTS",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 1200,
        alt: "BLNC SCENTS logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLNC SCENTS — Strength in Balance",
    description:
      "Luxury extrait de parfum collection. Five signature fragrances inspired by iconic scents.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="relative min-h-full flex flex-col font-sans antialiased">
        <ParallaxShadow />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
