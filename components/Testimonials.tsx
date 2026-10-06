import SectionHeading from "./SectionHeading";

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

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Avis" title="Ce qu'en disent nos visiteurs" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="reveal relative flex flex-col overflow-hidden rounded-[1.75rem] border border-black/[0.07] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <svg viewBox="0 0 32 32" className="h-10 w-10 text-primary" fill="currentColor" aria-hidden="true">
                <path d="M4 18c0-6.6 3.6-11 9-12l1 2.4C11 9.5 9.6 11.6 9.4 14H14v12H4V18Zm14 0c0-6.6 3.6-11 9-12l1 2.4c-3 1.1-4.4 3.2-4.6 5.6H28v12H18V18Z" />
              </svg>
              <blockquote className="mt-5 flex-1 text-lg font-medium text-secondary/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-extrabold text-primary">
                  {t.author.charAt(0)}
                </span>
                <span className="text-sm font-bold">{t.author}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
