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

export default function About() {
  return (
    <section id="qui-sommes-nous" className="relative overflow-hidden bg-primary/[0.07] py-16 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/15 blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary/15 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="L'équipe" title="Qui sommes-nous ?" />

        <div className="reveal mt-10 grid overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/10 sm:mt-14 md:grid-cols-[18rem_1fr]">
          <div className="relative flex flex-col items-center justify-center overflow-hidden bg-secondary px-8 py-10 text-center text-white md:py-12">
            <div aria-hidden="true" className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-primary/50 blur-3xl" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-primary text-4xl font-extrabold shadow-xl shadow-primary/40 sm:h-28 sm:w-28 sm:text-5xl">
              W
            </div>
            <p className="relative mt-5 text-xl font-extrabold">Willy</p>
            <p className="relative mt-1 text-sm text-white/60">Fondateur</p>
          </div>
          <div className="p-6 sm:p-12">
            <h3 className="text-xl font-extrabold text-secondary sm:text-2xl">
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

        <h4 className="reveal mt-12 text-center text-2xl font-extrabold text-secondary sm:mt-16">
          Notre philosophie
        </h4>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-4">
          {values.map((v, index) => (
            <div
              key={v.title}
              className="reveal group relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:rounded-3xl sm:p-7"
            >
              <span className="text-3xl font-extrabold text-primary/25 transition-colors group-hover:text-primary sm:text-4xl">
                0{index + 1}
              </span>
              <h5 className="mt-2 text-base font-extrabold text-secondary sm:mt-4 sm:text-lg">{v.title}</h5>
              <p className="mt-1.5 text-xs text-secondary/65 sm:mt-2 sm:text-sm">{v.description}</p>
            </div>
          ))}
        </div>

        <div id="pourquoi-nous" className="mt-14 scroll-mt-24 sm:mt-20">
          <SectionHeading
            as="h3"
            size="md"
            eyebrow="Notre histoire"
            title="Pourquoi Votre Accompagnateur&nbsp;?"
          />

          <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-12 lg:grid-cols-12">
            <div className="reveal relative overflow-hidden rounded-[1.75rem] bg-secondary p-6 text-white sm:p-8 lg:col-span-4 lg:self-start">
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/40 blur-3xl" />
              <p className="relative text-7xl font-extrabold leading-none tracking-tight text-primary-light">
                11
                <span className="ml-2 text-3xl text-white">ans</span>
              </p>
              <p className="relative mt-3 text-white/70">d&apos;expérience commerciale</p>
            </div>

            <div className="reveal space-y-5 text-base text-secondary/70 sm:text-lg lg:col-span-8">
              <p>
                Votre Accompagnateur est né d&apos;un constat simple : beaucoup
                de propriétaires connaissent le montant de leur facture, mais ne
                savent pas réellement ce que leur énergie leur coûtera dans les
                années à venir, ni quelles solutions peuvent être pertinentes
                pour leur logement.
              </p>
              <p>
                Notre rôle est d&apos;apporter gratuitement une première lecture
                claire de la situation : analyser les consommations, projeter les
                dépenses énergétiques, identifier les postes d&apos;amélioration
                et comparer le coût de l&apos;inaction avec l&apos;intérêt
                potentiel d&apos;un investissement dans une solution
                énergétique.
              </p>
              <p className="border-l-4 border-primary bg-white/70 py-4 pl-6 pr-4 text-xl font-bold text-secondary">
                Avant de vendre une solution, nous aidons le propriétaire à
                comprendre ses chiffres.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
