import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

const generalSans = localFont({
  src: "../fonts/GeneralSans-Variable.ttf",
  variable: "--font-general-sans",
});

const inter = localFont({
  src: "../fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

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
      <body>{children}</body>
    </html>
  );
}