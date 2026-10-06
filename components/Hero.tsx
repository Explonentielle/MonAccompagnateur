const trust = ["Étude 100 % gratuite", "Sans engagement", "Un interlocuteur unique"];

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-primary-light" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectionCard() {
  return (
    <div className="relative">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-white">Projection de vos dépenses</p>
            <p className="mt-1 text-xs text-white/50">Illustration sur 10 ans</p>
          </div>
          <div className="flex flex-col gap-1.5 text-xs font-semibold">
            <span className="flex items-center gap-2 text-accent">
              <span aria-hidden="true" className="h-0.5 w-5 rounded-full bg-accent" />
              Sans action
            </span>
            <span className="flex items-center gap-2 text-primary-light">
              <span aria-hidden="true" className="h-0.5 w-5 rounded-full bg-primary-light" />
              Avec une solution
            </span>
          </div>
        </div>

        <svg viewBox="0 0 480 250" className="mt-6 w-full" role="img" aria-label="Illustration : les dépenses augmentent sans action et restent maîtrisées avec une solution adaptée">
          {[50, 100, 150, 200].map((y) => (
            <line key={y} x1="20" x2="460" y1={y} y2={y} stroke="white" strokeOpacity="0.08" />
          ))}
          <path
            d="M20 210 C120 200, 200 160, 300 110 S420 40, 460 20 L460 185 C260 200, 140 208, 20 210 Z"
            fill="var(--color-primary-light)"
            fillOpacity="0.14"
          />
          <path
            d="M20 210 C120 200, 200 160, 300 110 S420 40, 460 20"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="4"
            strokeLinecap="round"
            pathLength="1"
            className="animate-draw"
          />
          <path
            d="M20 210 C140 207, 260 200, 460 185"
            fill="none"
            stroke="var(--color-primary-light)"
            strokeWidth="4"
            strokeLinecap="round"
            pathLength="1"
            className="animate-draw"
          />
          <circle cx="460" cy="20" r="7" fill="var(--color-accent)" />
          <circle cx="460" cy="185" r="7" fill="var(--color-primary-light)" />
          <circle cx="20" cy="210" r="6" fill="white" />
          <text x="20" y="240" fill="white" fillOpacity="0.5" fontSize="12">
            Aujourd&apos;hui
          </text>
          <text x="460" y="240" fill="white" fillOpacity="0.5" fontSize="12" textAnchor="end">
            Dans 10 ans
          </text>
        </svg>

        <div className="mt-4 rounded-2xl bg-white/[0.07] px-4 py-3 text-sm text-white/80">
          L&apos;écart entre les deux courbes, c&apos;est ce que l&apos;étude vous aide à mesurer.
        </div>
      </div>

      <div className="animate-float absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
            <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-sm font-bold text-secondary">
          Étude gratuite
          <span className="block text-xs font-medium text-secondary/55">Sans engagement</span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary pb-28 text-white sm:pb-32">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/35 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-primary/20 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold text-white/85">
            <Check />
            Étude gratuite et sans engagement
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            Comprenez vos{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              dépenses énergétiques.
            </span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-white/80 sm:text-2xl">
            Étudions gratuitement les solutions pour les réduire.
          </p>

          <p className="mt-6 max-w-xl text-base text-white/65 sm:text-lg">
            Étude de consommation, projection sur plusieurs années et
            accompagnement vers une solution adaptée. Avant de vendre une
            solution, nous vous aidons à comprendre vos chiffres.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Demander mon étude gratuite
            </a>
            <a
              href="/#methode"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-primary-light hover:text-primary-light"
            >
              Découvrir notre méthode
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-white/75">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up [animation-delay:0.2s]">
          <ProjectionCard />
        </div>
      </div>
    </section>
  );
}
