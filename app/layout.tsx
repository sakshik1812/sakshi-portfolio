import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";

const generalSans = localFont({
  src: "../fonts/GeneralSans-Variable.ttf",
  variable: "--font-general-sans",
});

const inter = localFont({
  src: "../fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sakshi-portfolio-beryl.vercel.app"),

  title: {
    default: "Sakshi Katargamwala | Brand Identity & UI/UX Designer",
    template: "%s | Sakshi Katargamwala",
  },

  description:
    "Brand Identity & UI/UX Designer crafting thoughtful brands, memorable identities, and meaningful digital experiences.",

  keywords: [
    "Sakshi Katargamwala",
    "Brand Identity Designer",
    "UI Designer",
    "UX Designer",
    "Portfolio",
    "Brand Design",
    "Figma",
    "Next.js",
  ],

  authors: [{ name: "Sakshi Katargamwala" }],
  creator: "Sakshi Katargamwala",

  openGraph: {
    title: "Sakshi Katargamwala | Brand Identity & UI/UX Designer",
    description:
      "Thoughtful brand identities and meaningful digital experiences.",
    url: "https://sakshi-portfolio-beryl.vercel.app",
    siteName: "Sakshi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sakshi Katargamwala Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sakshi Katargamwala | Brand Identity & UI/UX Designer",
    description:
      "Thoughtful brand identities and meaningful digital experiences.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${generalSans.variable} ${inter.variable}`}>
      <body>
        {/*
          Every animated block server-renders hidden (opacity:0 or a
          clip-path inset). Without JS the page is a wall of background colour,
          which is bad for crawlers that do not execute scripts and worse for
          anyone who blocks the bundle. This forces the final state in that case.
        */}
        <noscript>
          <style>{`
            [data-reveal] {
              opacity: 1 !important;
              clip-path: none !important;
              transform: none !important;
            }
          `}</style>
        </noscript>

        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
