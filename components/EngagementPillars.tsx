import SectionHeading from "./SectionHeading";
import SwipeRow from "./SwipeRow";

const pillars = [
  {
    title: "Accompagnement de A à Z",
    description:
      "Un interlocuteur unique pour un suivi personnalisé de votre projet, de la première prise de contact à la mise en service.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 sm:h-7 sm:w-7" aria-hidden="true">
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
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 sm:h-7 sm:w-7" aria-hidden="true">
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
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 sm:h-7 sm:w-7" aria-hidden="true">
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
    <section className="bg-white pb-16 pt-20 sm:pb-24 sm:pt-32">
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
        <div className="mt-10 sm:mt-14">
          <SwipeRow label="Nos engagements">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 sm:w-auto sm:rounded-[1.75rem] sm:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute right-5 top-3 text-6xl font-extrabold text-secondary/[0.05] sm:right-6 sm:top-4 sm:text-7xl"
              >
                0{index + 1}
              </span>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:rotate-6 sm:h-14 sm:w-14 sm:rounded-2xl">
                {pillar.icon}
              </div>
              <h3 className="relative mt-4 text-lg font-extrabold text-secondary sm:mt-6 sm:text-xl">
                {pillar.title}
              </h3>
              <p className="relative mt-2 text-sm text-secondary/65 sm:mt-3 sm:text-base">{pillar.description}</p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full"
              />
            </div>
          ))}
          </SwipeRow>
        </div>
      </div>
    </section>
  );
}
