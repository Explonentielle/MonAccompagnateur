import Link from "next/link";
import SectionHeading from "./SectionHeading";

export const partners: string[] = [];

const assurances = [
  {
    title: "Qualifiés RGE",
    description: "Des installateurs reconnus, selon les travaux concernés.",
    icon: <path d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4" />,
  },
  {
    title: "Sélectionnés avec soin",
    description: "Pour leur savoir-faire, leur matériel et leurs conditions.",
    icon: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />,
  },
  {
    title: "Un seul interlocuteur",
    description: "Vous gardez le même contact, de l'étude à l'installation.",
    icon: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8c.6-3.4 3.4-5.5 7-5.5s6.4 2.1 7 5.5" />,
  },
];

export default function PartnersTrust() {
  return (
    <section id="partenaires" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Un réseau qualifié"
          title="Nos partenaires"
          description="Votre Accompagnateur est votre interlocuteur conseil. La réalisation des travaux est confiée à des partenaires installateurs qualifiés RGE selon les travaux concernés."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {assurances.map((item) => (
            <div
              key={item.title}
              className="reveal rounded-[1.75rem] border border-black/[0.07] bg-primary/[0.04] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.08]"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
                  {item.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-secondary">{item.title}</h3>
              <p className="mt-2 text-sm text-secondary/65">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <Link
            href="/partenaires"
            className="inline-flex items-center gap-2 rounded-full border-2 border-secondary px-7 py-3 text-sm font-bold text-secondary transition-all hover:bg-secondary hover:text-white"
          >
            Découvrir notre accompagnement
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
