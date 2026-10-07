import SectionHeading from "./SectionHeading";

const icon = {
  sun: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" />
      <path
        d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  heat: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true">
      <path
        d="M4 11 12 4l8 7M6 10v9h12v-9"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 19v-5h4v5" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  snow: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true">
      <path
        d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  battery: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true">
      <rect x="3" y="8" width="16" height="8" rx="1.5" stroke="white" strokeWidth="1.8" />
      <path d="M21 10.5v3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 12h2l-1 2h3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const solutions = [
  {
    title: "Panneaux photovoltaïques",
    icon: icon.sun,
    bullets: [
      "Production d'électricité propre et renouvelable",
      "Réduction immédiate de vos factures",
      "Solutions adaptées à tous types de toitures",
    ],
  },
  {
    title: "Pompe à chaleur air/eau",
    icon: icon.heat,
    bullets: [
      "Chauffage performant",
      "Économies d'énergie au quotidien",
      "Confort optimal en toutes saisons",
    ],
  },
  {
    title: "Climatisation / PAC air/air",
    icon: icon.snow,
    bullets: [
      "Chauffage et climatisation haute performance",
      "Confort toute l'année",
      "Technologies innovantes et économies en énergie",
    ],
  },
  {
    title: "Batteries de stockage",
    icon: icon.battery,
    bullets: [
      "Stockez votre énergie pour l'utiliser quand vous en avez besoin",
      "Stockage virtuel : récupérez votre surplus injecté sur le réseau",
      "Plus de flexibilité, plus d'autonomie",
    ],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-secondary/[0.04] py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Ce que nous proposons"
          title={
            <>
              Nos <span className="text-primary">solutions</span>
            </>
          }
          description="Pour votre confort et votre indépendance énergétique."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6">
          {solutions.map((s, index) => (
            <div
              key={s.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 sm:rounded-[1.75rem] sm:p-10"
            >
              <span
                aria-hidden="true"
                className="absolute right-3 top-2 text-4xl font-extrabold text-accent/20 transition-colors duration-300 group-hover:text-accent/40 sm:right-8 sm:top-6 sm:text-7xl"
              >
                0{index + 1}
              </span>
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:-rotate-6 sm:h-16 sm:w-16 sm:rounded-2xl">
                {s.icon}
              </div>
              <h3 className="relative mt-3 text-[15px] font-extrabold leading-snug text-secondary sm:mt-6 sm:text-2xl">
                {s.title}
              </h3>
              <ul className="relative mt-3 space-y-2 sm:mt-5 sm:space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs leading-snug text-secondary/70 sm:gap-3 sm:text-base sm:leading-normal">
                    <span className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:mt-0.5 sm:h-5 sm:w-5">
                      <svg viewBox="0 0 24 24" fill="none" className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-black/[0.07] bg-white p-6 shadow-sm sm:mt-10 sm:flex-row sm:items-center sm:gap-6 sm:rounded-[1.75rem] sm:p-10">
          <div>
            <p className="text-xl font-extrabold text-secondary">Pas sûr de la bonne solution ?</p>
            <p className="mt-1 text-secondary/65">
              L&apos;étude gratuite sert d&apos;abord à comprendre votre
              consommation avant de recommander quoi que ce soit.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-secondary transition-all hover:-translate-y-0.5 hover:brightness-95"
          >
            Demander mon étude gratuite
          </a>
        </div>
      </div>
    </section>
  );
}
