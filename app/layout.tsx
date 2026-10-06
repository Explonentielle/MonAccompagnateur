import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ChatbotEmbed from "@/components/ChatbotEmbed";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultConfig } from "@/lib/site-config";
import "./globals.css";

const brandFont = Plus_Jakarta_Sans({
  variable: "--font-brand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Votre Accompagnateur | Étude énergétique gratuite",
  description:
    "Votre Accompagnateur vous aide à comprendre vos dépenses énergétiques et à étudier gratuitement les solutions pour les réduire, à Bordeaux et alentours.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const themeVars = {
    "--color-primary": defaultConfig.colors.primary,
    "--color-primary-dark": defaultConfig.colors.primaryDark,
    "--color-secondary": defaultConfig.colors.secondary,
    "--color-accent": defaultConfig.colors.accent,
  } as CSSProperties;

  return (
    <html lang="fr" className={`${brandFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={themeVars}>
        <Header config={defaultConfig} />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer config={defaultConfig} />
        <ChatbotEmbed />
      </body>
    </html>
  );
}
