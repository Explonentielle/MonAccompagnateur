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
    <section id="methode" className="bg-secondary/[0.03] py-14">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Le parcours
        </p>
        <h2 className="mt-2 text-3xl font-bold text-secondary text-center">
          Notre méthode
        </h2>
        <p className="mt-3 text-center text-secondary/70">
          Un seul parcours, plusieurs étapes, pour transformer une dépense en
          investissement utile.
        </p>
        <div className="relative mt-10 space-y-6">
          <div
            aria-hidden="true"
            className="absolute left-5 top-2 bottom-2 w-px bg-primary/20"
          />
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex gap-5">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                {index + 1}
              </div>
              <div className="pt-1.5">
                <h3 className="text-lg font-semibold text-secondary">
                  {step.title}
                </h3>
                <p className="mt-1 text-secondary/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
