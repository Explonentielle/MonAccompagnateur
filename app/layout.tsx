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
  metadataBase: new URL(defaultConfig.siteUrl),
  title: {
    default: "Étude énergétique gratuite à Bordeaux | Votre Accompagnateur",
    template: "%s | Votre Accompagnateur",
  },
  description:
    "Accompagnement gratuit et sans engagement pour votre rénovation énergétique à Bordeaux : étude de consommation, photovoltaïque, pompe à chaleur, batteries.",
  applicationName: defaultConfig.brandName,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    url: "./",
    locale: "fr_FR",
    siteName: defaultConfig.brandName,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
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
