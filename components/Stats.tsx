const stats = [
  { value: "0 €", label: "Coût de l'étude, toujours gratuite" },
  { value: "48h", label: "Délai de réponse moyen" },
  { value: "5 à 10 ans", label: "De projection sur vos factures" },
  { value: "100 %", label: "Accompagnement neutre, sans obligation" },
];

export default function Stats() {
  return (
    <section className="border-y border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
            <p className="mt-1 text-xs sm:text-sm text-secondary/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
