import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Sales — Filiale de formation",
  description:
    "Smart Sales, filiale de formation du groupe Votre Accompagnateur : travailler intelligemment pour un maximum de résultats.",
};

const pillars = [
  {
    title: "Formation pratique",
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
    title: "Méthodes efficaces",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M4 19V9M10 19V5M16 19v-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M21 19H3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 10 10 5l6 4 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Accompagnement personnalisé",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M4 15c1-2 3-3 4-3s2 .5 4 .5 3-.5 4-.5 3 1 4 3M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Résultats concrets",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="1" fill="white" />
      </svg>
    ),
  },
];

export default function SmartSalesPage() {
  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Votre Accompagnateur présente
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight">
          SMART SALES
        </h1>
        <p className="mt-3 text-sm uppercase tracking-wide text-white/60">
          Filiale de formation du groupe Votre Accompagnateur
        </p>

        <p className="mt-8 text-xl font-medium">
          Travailler intelligemment pour un maximum de résultats.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30">
                {p.icon}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                {p.title}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-sm uppercase tracking-[0.2em] text-white/50">
          Des opportunités au plus près de vos clients
        </p>

        <a
          href="/contact"
          className="mt-10 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors"
        >
          Nous contacter
        </a>
      </div>
    </section>
  );
}
