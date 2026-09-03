import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://deepan-seo.example.com"; // replace with your real domain before deploying

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Deepan | Digital Marketing & SEO Specialist",
  description:
    "Portfolio of Deepan, a Digital Marketing and SEO professional specializing in technical SEO, on-page SEO, content SEO, keyword research and website auditing.",
  openGraph: {
    title: "Deepan | Digital Marketing & SEO Specialist",
    description:
      "Portfolio of Deepan, a Digital Marketing and SEO professional specializing in technical SEO, on-page SEO, content SEO, keyword research and website auditing.",
    url: siteUrl,
    siteName: "Deepan — SEO Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepan | Digital Marketing & SEO Specialist",
    description:
      "Portfolio of Deepan, a Digital Marketing and SEO professional specializing in SEO and website auditing.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
