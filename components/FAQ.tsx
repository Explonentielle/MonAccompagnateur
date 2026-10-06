import SectionHeading from "./SectionHeading";
import { defaultConfig } from "@/lib/site-config";

const faqs = [
  {
    q: "L'accompagnement est-il vraiment gratuit ?",
    a: "Oui, l'étude initiale (analyse de vos factures, projection et pistes de solutions) est entièrement gratuite et sans engagement de votre part.",
  },
  {
    q: "Quel est le rôle de Votre Accompagnateur ?",
    a: "Nous sommes votre interlocuteur conseil: nous analysons votre situation et vous orientons vers la solution la plus adaptée. Les travaux sont ensuite réalisés par nos partenaires installateurs qualifiés. Nous ne sommes pas nous-même installateur.",
  },
  {
    q: "Vos partenaires sont-ils certifiés RGE ?",
    a: "Oui, selon les travaux concernés, nos partenaires installateurs disposent des qualifications RGE (Reconnu Garant de l'Environnement) nécessaires pour l'éligibilité aux aides.",
  },
  {
    q: "Quels délais entre l'étude et l'installation ?",
    a: "Cela dépend de la solution retenue et de la disponibilité du partenaire installateur. Un délai indicatif vous est communiqué dès la mise en relation.",
  },
  {
    q: "Quelles garanties sur le matériel installé ?",
    a: "Nous sélectionnons des équipements auprès de marques reconnues et fiables. Les garanties constructeur et main d'œuvre vous sont détaillées avec l'offre du partenaire.",
  },
  {
    q: "Photovoltaïque ou batteries : par où commencer ?",
    a: "Chaque projet est différent. C'est justement l'objet de l'étude gratuite : comprendre votre consommation avant de recommander une solution, plutôt que l'inverse.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-secondary/[0.04] py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions fréquentes"
            description="Les réponses aux questions que l'on nous pose le plus souvent avant de se lancer."
          />
          <div className="reveal mt-10 rounded-[1.75rem] bg-secondary p-7 text-white">
            <p className="text-lg font-extrabold">Une autre question ?</p>
            <p className="mt-1 text-sm text-white/65">Appelez-nous, nous vous répondons.</p>
            <a
              href={`tel:${defaultConfig.phoneHref}`}
              className="mt-5 inline-block text-2xl font-extrabold text-primary-light transition-colors hover:text-white"
            >
              {defaultConfig.phone}
            </a>
          </div>
        </div>

        <div className="w-full space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="reveal group box-border block w-full rounded-2xl border border-black/[0.07] bg-white px-7 py-5 transition-all duration-300 open:border-primary/40 open:shadow-xl open:shadow-primary/10"
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-secondary [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-bold leading-none text-primary transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-secondary/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
