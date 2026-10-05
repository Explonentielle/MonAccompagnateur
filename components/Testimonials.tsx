const testimonials = [
  {
    quote:
      "Un rendez-vous clair et sans pression. J'ai enfin compris pourquoi ma facture avait autant augmenté.",
    author: "Nathalie B.",
  },
  {
    quote:
      "L'étude m'a permis d'anticiper les travaux à prévoir pour les prochaines années, sans mauvaise surprise.",
    author: "Marc D.",
  },
  {
    quote:
      "Accompagnement sérieux, aucune obligation d'achat à la fin. Je recommande.",
    author: "Sophie L.",
  },
];

import { defaultConfig } from "@/lib/site-config";

export default function Testimonials() {
  return (
    <section className="py-16" style={{ backgroundColor: `${defaultConfig.colors.accent.green}12` }}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: defaultConfig.colors.accent.green }}>
          Avis
        </p>
        <h2 className="mt-2 text-3xl font-bold text-secondary text-center">
          Ce qu&apos;en disent nos visiteurs
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl bg-white p-6 shadow-sm border border-black/5 flex flex-col"
            >
              <blockquote className="text-sm text-secondary/80 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-secondary">
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
