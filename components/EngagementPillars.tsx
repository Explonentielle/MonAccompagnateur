import SectionHeading from "./SectionHeading";

const pillars = [
  {
    title: "Accompagnement de A à Z",
    description:
      "Un interlocuteur unique pour un suivi personnalisé de votre projet, de la première prise de contact à la mise en service.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="white" strokeWidth="1.8" />
        <circle cx="17" cy="9" r="2.4" stroke="white" strokeWidth="1.8" />
        <path
          d="M3.5 19c.5-3 2.7-5 5.5-5s5 2 5.5 5M14.5 15c2.2 0 4 1.6 4.5 4"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Accompagnement administratif",
    description:
      "Nous nous occupons de toutes les démarches : aides, subventions, dossiers et formalités administratives.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <rect x="6" y="4" width="12" height="16" rx="1.5" stroke="white" strokeWidth="1.8" />
        <path d="M9 3.5h6v2H9z" fill="white" />
        <path d="M9 11h6M9 14.5h6M9 8h3" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Produits de qualité",
    description:
      "Nous sélectionnons pour vous des équipements fiables, performants et durables auprès de marques reconnues.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6l-7-3Z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function EngagementPillars() {
  return (
    <section className="bg-white pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Nos engagements"
          title={
            <>
              Votre projet, <span className="text-primary">notre engagement</span>
            </>
          }
          description="Votre Accompagnateur vous guide à chaque étape de votre projet de rénovation énergétique pour plus d'économies, de confort et d'autonomie."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="reveal group relative overflow-hidden rounded-[1.75rem] border border-black/[0.07] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-4 text-7xl font-extrabold text-secondary/[0.05]"
              >
                0{index + 1}
              </span>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:rotate-6">
                {pillar.icon}
              </div>
              <h3 className="relative mt-6 text-xl font-extrabold text-secondary">
                {pillar.title}
              </h3>
              <p className="relative mt-3 text-secondary/65">{pillar.description}</p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
