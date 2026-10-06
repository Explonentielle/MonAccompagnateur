import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Comprendre",
    description:
      "Analyse des factures, du logement, des équipements et des habitudes de consommation.",
  },
  {
    title: "Projeter",
    description:
      "Estimation de l'évolution des dépenses sur plusieurs années à partir d'hypothèses clairement affichées.",
  },
  {
    title: "Étudier",
    description: "Étude de consommation, dimensionnement et étude de rentabilité.",
  },
  {
    title: "Comparer",
    description:
      "Comparer la poursuite des dépenses avec un scénario d'investissement adapté au logement.",
  },
  {
    title: "Accompagner",
    description:
      "Présentation de la solution, réponses aux questions et constitution du dossier.",
  },
  {
    title: "Transmettre",
    description:
      "Transmission directe au partenaire RGE pour la partie technique, administrative et l'installation.",
  },
];

export default function Method() {
  return (
    <section id="methode" className="relative overflow-hidden bg-secondary py-24 text-white">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-primary/30 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Le parcours"
          title={
            <>
              Notre <span className="text-primary-light">méthode</span>
            </>
          }
          description="Un seul parcours, plusieurs étapes, pour transformer une dépense en investissement utile."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="reveal group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-light/60 hover:bg-white/[0.08]"
            >
              <div className="flex items-start justify-between">
                <span className="text-6xl font-extrabold leading-none tracking-tight text-primary-light">
                  0{index + 1}
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/55">
                  Étape {index + 1} sur {steps.length}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-extrabold">{step.title}</h3>
              <p className="mt-3 text-white/65">{step.description}</p>
              <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-primary-light"
                  style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
