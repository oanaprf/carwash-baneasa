import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carwash Băneasa - Spălătorie Auto Profesională",
  description:
    "Spălătorie auto profesională în București cu 3 locații: Băneasa, Pipera și Băneasa Lemon. Servicii premium: spălare exterioară, detailing complet, tratament ceramic. Calitate garantată.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${montserrat.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
