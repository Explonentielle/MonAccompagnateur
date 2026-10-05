import Script from "next/script";
import { defaultConfig } from "@/lib/site-config";

/**
 * Charge le widget de chat rag-sass/Corpus.ai (bulle flottante) via son
 * loader public/widget.js. Ne s'affiche que si les deux variables d'env
 * sont renseignées, pour ne pas casser le build/l'affichage tant que le
 * chatbot n'a pas été créé côté dashboard.
 *
 * data-primary-color = couleur de marque du site (lib/site-config.ts) — le
 * widget prend automatiquement la couleur primaire de MonAcompagnateur,
 * pas besoin de la régler séparément côté dashboard rag-sass.
 */
export default function ChatbotEmbed() {
  const baseUrl = process.env.NEXT_PUBLIC_CHATBOT_BASE_URL;
  const chatbotId = process.env.NEXT_PUBLIC_CHATBOT_ID;

  if (!baseUrl || !chatbotId) return null;

  return (
    <Script
      src={`${baseUrl.replace(/\/$/, "")}/widget.js`}
      data-chatbot-id={chatbotId}
      data-primary-color={defaultConfig.colors.primary}
      strategy="lazyOnload"
    />
  );
}
