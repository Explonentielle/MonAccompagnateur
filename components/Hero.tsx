export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -right-16 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary-dark">
          Étude gratuite et sans engagement
        </span>

        <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-secondary">
          Comprenez vos{" "}
          <span className="text-primary">dépenses énergétiques</span>.
          <br className="hidden sm:block" /> Étudions gratuitement les
          solutions pour les réduire.
        </h1>

        <p className="mt-6 text-lg text-secondary/70 max-w-2xl mx-auto">
          Étude de consommation, projection sur plusieurs années et
          accompagnement vers une solution adaptée. Avant de vendre une
          solution, nous vous aidons à comprendre vos chiffres.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="/contact"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Demander mon étude gratuite
          </a>
          <a
            href="/#methode"
            className="rounded-full px-6 py-3 text-sm font-medium text-secondary border border-secondary/20 hover:border-secondary/40 transition-colors"
          >
            Découvrir notre méthode
          </a>
        </div>
      </div>
    </section>
  );
}
