const icon = {
  sun: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  battery: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="8" width="16" height="8" rx="1.5" stroke="white" strokeWidth="1.8" />
      <path d="M21 10.5v3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 12h2l-1 2h3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export const solutions = [
  {
    title: "Panneaux photovoltaïques",
    icon: icon.sun,
    partner: null,
    bullets: [
      "Production d'électricité propre et renouvelable",
      "Réduction immédiate de vos factures",
      "Solutions adaptées à tous types de toitures",
    ],
  },
  {
    title: "Pompe à chaleur air/eau",
    icon: icon.heat,
    partner: null,
    bullets: [
      "Chauffage performant",
      "Économies d'énergie au quotidien",
      "Confort optimal en toutes saisons",
    ],
  },
  {
    title: "Climatisation / PAC air/air",
    icon: icon.snow,
    partner: null,
    bullets: [
      "Chauffage et climatisation haute performance",
      "Confort toute l'année",
      "Technologies innovantes et économies en énergie",
    ],
  },
  {
    title: "Batteries de stockage",
    icon: icon.battery,
    partner: null,
    bullets: [
      "Stockez votre énergie pour l'utiliser quand vous en avez besoin",
      "Stockage virtuel : récupérez votre surplus injecté sur le réseau",
      "Plus de flexibilité, plus d'autonomie",
    ],
  },
];

import AccentDot from "./AccentDot";

export default function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-5xl px-6 py-14">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Ce que nous proposons
      </p>
      <div className="mt-2 flex items-center justify-center gap-3">
        <AccentDot color="green" />
        <h2 className="text-3xl font-bold text-secondary">
          Nos solutions
        </h2>
        <AccentDot color="green" />
      </div>
      <p className="mt-3 text-center text-secondary/70">
        Pour votre confort et votre indépendance énergétique.
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl bg-white p-8 shadow-sm border border-black/5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                {s.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">
                  {s.title}
                </h3>
                {s.partner && (
                  <p className="text-xs text-secondary/50">
                    Partenaire : {s.partner}
                  </p>
                )}
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-secondary/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
