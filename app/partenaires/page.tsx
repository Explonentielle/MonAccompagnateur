import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { partners } from "@/components/PartnersTrust";
import BecomePartner from "@/components/BecomePartner";

export const metadata: Metadata = {
  title: "Nos partenaires",
  description:
    "Un accompagnement de A à Z et un réseau de partenaires installateurs qualifiés RGE, pour votre projet énergétique.",
};

const accompagnement = [
  {
    title: "Diagnostic et échange",
    description:
      "Comprendre le logement, les habitudes de consommation, les besoins et les objectifs du propriétaire.",
  },
  {
    title: "Étude de la solution",
    description:
      "Identifier une solution cohérente : puissance, équipement, stockage éventuel et organisation du projet.",
  },
  {
    title: "Mise en relation",
    description:
      "Proposer une offre issue de partenaires professionnels avec des tarifs compétitifs et du matériel de qualité.",
  },
  {
    title: "Suivi du projet",
    description:
      "Rester l'interlocuteur du propriétaire pour faciliter les échanges et accompagner les différentes étapes.",
  },
  {
    title: "Installation",
    description:
      "Le projet est réalisé par le partenaire installateur selon les conditions prévues dans l'offre retenue.",
  },
];

const engagements = [
  "Une étude adaptée au besoin réel.",
  "Des explications claires.",
  "Des partenaires professionnels.",
  "Un rapport qualité/prix attractif.",
  "Un suivi jusqu'à l'installation.",
];

function Check() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
        <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function PartenairesPage() {
  return (
    <>
      <PageHeader
        title="Pourquoi choisir Votre Accompagnateur ?"
        subtitle="Votre projet énergétique, expliqué et suivi de A à Z."
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <SectionHeading align="left" eyebrow="Notre approche" title="Un seul parcours, plusieurs étapes" />
          <div className="reveal space-y-5 text-secondary/70 sm:text-lg">
            <p>
              Aujourd&apos;hui, un propriétaire qui souhaite s&apos;équiper,
              notamment en panneaux photovoltaïques, peut être confronté à de
              nombreux interlocuteurs : sociétés commerciales, fournisseurs,
              installateurs et démarches administratives. Il n&apos;est pas
              toujours simple de comparer les solutions, de comprendre le
              matériel proposé ou de savoir vers qui se tourner.
            </p>
            <p>
              Votre Accompagnateur a été créé pour simplifier ce parcours. Notre
              rôle est d&apos;être présent aux côtés du propriétaire depuis la
              première étude de son projet jusqu&apos;à sa réalisation, tout en
              l&apos;orientant vers des partenaires sélectionnés pour leur
              savoir-faire, leur matériel et leurs conditions commerciales.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary/[0.07] py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-primary/15 blur-[100px]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Le parcours" title="Votre accompagnement en 5 étapes" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {accompagnement.map((step, index) => (
              <div
                key={step.title}
                className="reveal group rounded-[1.75rem] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-extrabold text-white shadow-lg shadow-primary/30 transition-transform group-hover:rotate-6">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-secondary">{step.title}</h3>
                <p className="mt-2 text-secondary/65">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="reveal rounded-[1.75rem] border border-black/[0.07] p-8 sm:p-10">
            <h2 className="text-2xl font-extrabold text-secondary">Une approche différente</h2>
            <p className="mt-4 text-secondary/70">
              L&apos;objectif n&apos;est pas simplement de proposer un
              équipement. Il est de donner au propriétaire un interlocuteur
              identifié, capable de l&apos;accompagner, de lui expliquer les
              différentes étapes et de l&apos;aider à avancer sereinement dans
              son projet.
            </p>
            <p className="mt-4 text-secondary/70">
              Grâce à notre réseau de partenaires, nous recherchons un équilibre
              entre qualité du matériel, cohérence technique et maîtrise du
              budget.
            </p>
          </div>
          <div className="reveal relative overflow-hidden rounded-[1.75rem] bg-secondary p-8 text-white sm:p-10">
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary/40 blur-3xl" />
            <h2 className="relative text-2xl font-extrabold">Nos engagements</h2>
            <ul className="relative mt-6 space-y-4">
              {engagements.map((e) => (
                <li key={e} className="flex items-start gap-3 text-white/80">
                  <Check />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {partners.length > 0 && (
        <section className="border-y border-black/5 bg-white py-14">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-extrabold text-secondary">Nos partenaires de confiance</h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-secondary/15 px-4 py-2 text-sm font-semibold text-secondary"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <BecomePartner />
    </>
  );
}
