const pillars = [
  {
    title: "Accompagnement de A à Z",
    description:
      "Un interlocuteur unique pour un suivi personnalisé de votre projet, de la première prise de contact à la mise en service.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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

import { defaultConfig } from "@/lib/site-config";

export default function EngagementPillars() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
      <h2 className="text-3xl font-bold text-secondary text-center">
        Votre projet, <span style={{ color: defaultConfig.colors.accent.green }}>notre engagement</span>
      </h2>
      <p className="mt-3 text-center text-secondary/70 max-w-2xl mx-auto">
        Votre Accompagnateur vous guide à chaque étape de votre projet de
        rénovation énergétique pour plus d&apos;économies, de confort et
        d&apos;autonomie.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl bg-white p-6 shadow-sm border border-black/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: defaultConfig.colors.accent.green }}>
              {pillar.icon}
            </div>
            <h3 className="mt-4 text-base font-semibold text-secondary">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm text-secondary/70">{pillar.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
