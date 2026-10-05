const values = [
  {
    title: "Proximité",
    description: "Un interlocuteur unique, joignable, qui suit votre projet du début à la fin.",
  },
  {
    title: "Pédagogie",
    description: "Des explications claires, sans jargon, pour que vous compreniez vos propres chiffres.",
  },
  {
    title: "Transparence",
    description: "Aucune promesse exagérée : des chiffres personnalisés plutôt que des estimations générales.",
  },
  {
    title: "Suivi",
    description: "Un accompagnement qui continue jusqu'à la transmission du projet au partenaire installateur.",
  },
];

import { defaultConfig } from "@/lib/site-config";

export default function Advisor() {
  return (
    <section id="qui-sommes-nous" className="py-16" style={{ backgroundColor: `${defaultConfig.colors.accent.green}12` }}>
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: defaultConfig.colors.accent.green }}>
          L&apos;équipe
        </p>
        <h2 className="mt-2 text-3xl font-bold text-secondary text-center">
          Qui sommes-nous ?
        </h2>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-8 rounded-2xl bg-white p-8 sm:p-10 shadow-sm border border-black/5">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full text-3xl font-bold text-white" style={{ backgroundColor: defaultConfig.colors.accent.green }}>
            W
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-secondary">
              Willy, fondateur de Votre Accompagnateur
            </h3>
            <p className="mt-3 text-secondary/70">
              Après 11 ans d&apos;expérience commerciale dans le secteur de
              l&apos;énergie et de l&apos;amélioration de l&apos;habitat,
              Willy a fondé Votre Accompagnateur avec une conviction simple :
              avant de vendre une solution, il faut d&apos;abord aider le
              propriétaire à comprendre ses chiffres. Il intervient en toute
              neutralité, aux côtés d&apos;un réseau de partenaires qualifiés
              RGE pour la mise en œuvre des solutions retenues.
            </p>
          </div>
        </div>

        <h3 className="mt-10 text-xl font-bold text-secondary text-center">
          Notre philosophie
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl bg-white p-5 shadow-sm border border-black/5"
            >
              <h4 className="text-sm font-semibold text-secondary">{v.title}</h4>
              <p className="mt-1.5 text-sm text-secondary/70">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
