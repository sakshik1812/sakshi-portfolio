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
  title: {
    default: "Sakshi | Brand & UI/UX Designer",
    template: "%s | Sakshi",
  },
  description:
    "Portfolio of Sakshi showcasing thoughtful brand identities, UI/UX design, and creative digital experiences.",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${inter.variable}`}
    >
      <body>
  <LenisProvider>
    {children}
  </LenisProvider>
</body>
    </html>
  );
}