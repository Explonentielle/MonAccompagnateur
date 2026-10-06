import SectionHeading from "./SectionHeading";

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

export default function Advisor() {
  return (
    <section id="qui-sommes-nous" className="relative overflow-hidden bg-primary/[0.07] py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary/15 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="L'équipe" title="Qui sommes-nous ?" />

        <div className="reveal mt-14 grid overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/10 md:grid-cols-[18rem_1fr]">
          <div className="relative flex flex-col items-center justify-center overflow-hidden bg-secondary px-8 py-12 text-center text-white">
            <div aria-hidden="true" className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-primary/50 blur-3xl" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-primary text-5xl font-extrabold shadow-xl shadow-primary/40">
              W
            </div>
            <p className="relative mt-6 text-xl font-extrabold">Willy</p>
            <p className="relative mt-1 text-sm text-white/60">Fondateur</p>
          </div>
          <div className="p-8 sm:p-12">
            <h3 className="text-2xl font-extrabold text-secondary">
              Willy, fondateur de Votre Accompagnateur
            </h3>
            <p className="mt-4 text-secondary/70 sm:text-lg">
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

        <h3 className="reveal mt-16 text-center text-2xl font-extrabold text-secondary">
          Notre philosophie
        </h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, index) => (
            <div
              key={v.title}
              className="reveal group relative overflow-hidden rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="text-4xl font-extrabold text-primary/25 transition-colors group-hover:text-primary">
                0{index + 1}
              </span>
              <h4 className="mt-4 text-lg font-extrabold text-secondary">{v.title}</h4>
              <p className="mt-2 text-sm text-secondary/65">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
