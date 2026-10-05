import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ChatbotEmbed from "@/components/ChatbotEmbed";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Votre Accompagnateur — Étude énergétique gratuite",
  description:
    "Votre Accompagnateur vous aide à comprendre vos dépenses énergétiques et à étudier gratuitement les solutions pour les réduire, à Bordeaux et alentours.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const themeVars = {
    "--color-primary": defaultConfig.colors.primary,
    "--color-primary-dark": defaultConfig.colors.primaryDark,
    "--color-secondary": defaultConfig.colors.secondary,
  } as CSSProperties;

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={themeVars}>
        <Header config={defaultConfig} />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer config={defaultConfig} />
        <ChatbotEmbed />
      </body>
    </html>
  );
}
