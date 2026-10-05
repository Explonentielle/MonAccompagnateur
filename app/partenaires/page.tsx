import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { partners } from "@/components/PartnersTrust";
import BecomePartner from "@/components/BecomePartner";

export const metadata: Metadata = {
  title: "Nos partenaires",
  description:
    "SmartSun, Service Global Énergie, DMEGC Solar, Atlantic, Daikin : les partenaires installateurs qualifiés RGE de Votre Accompagnateur.",
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

export default function PartenairesPage() {
  return (
    <>
      <PageHeader
        title="Pourquoi choisir Votre Accompagnateur ?"
        subtitle="Votre projet énergétique, expliqué et suivi de A à Z."
      />

      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="text-2xl font-bold text-secondary">
          Un seul parcours, plusieurs étapes
        </h2>
        <p className="mt-4 text-secondary/70">
          Aujourd&apos;hui, un propriétaire qui souhaite s&apos;équiper,
          notamment en panneaux photovoltaïques, peut être confronté à de
          nombreux interlocuteurs : sociétés commerciales, fournisseurs,
          installateurs et démarches administratives. Il n&apos;est pas
          toujours simple de comparer les solutions, de comprendre le
          matériel proposé ou de savoir vers qui se tourner.
        </p>
        <p className="mt-4 text-secondary/70">
          Votre Accompagnateur a été créé pour simplifier ce parcours. Notre
          rôle est d&apos;être présent aux côtés du propriétaire depuis la
          première étude de son projet jusqu&apos;à sa réalisation, tout en
          l&apos;orientant vers des partenaires sélectionnés pour leur
          savoir-faire, leur matériel et leurs conditions commerciales.
        </p>
      </section>

      <section className="bg-secondary/[0.03] py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-secondary text-center">
            Votre accompagnement en 5 étapes
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {accompagnement.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-xl bg-white p-5 shadow-sm border border-black/5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-secondary">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-secondary/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-secondary">
            Une approche différente
          </h2>
          <p className="mt-3 text-secondary/70">
            L&apos;objectif n&apos;est pas simplement de proposer un
            équipement. Il est de donner au propriétaire un interlocuteur
            identifié, capable de l&apos;accompagner, de lui expliquer les
            différentes étapes et de l&apos;aider à avancer sereinement dans
            son projet.
          </p>
          <p className="mt-3 text-secondary/70">
            Grâce à notre réseau de partenaires, nous recherchons un équilibre
            entre qualité du matériel, cohérence technique et maîtrise du
            budget.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-secondary">Nos engagements</h2>
          <ul className="mt-3 space-y-2.5">
            {engagements.map((e) => (
              <li key={e} className="flex items-start gap-2.5 text-secondary/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white py-14">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-secondary">
            Nos partenaires de confiance
          </h2>
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
          <p className="mt-6 text-sm text-secondary/50 max-w-2xl mx-auto">
            Votre Accompagnateur est votre interlocuteur commercial et
            conseil. La réalisation des travaux est confiée à ces partenaires,
            spécialisés et qualifiés RGE pour les prestations concernées.
          </p>
        </div>
      </section>

      <BecomePartner />
    </>
  );
}
