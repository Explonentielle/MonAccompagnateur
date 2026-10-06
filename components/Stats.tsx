const stats = [
  { value: "0 €", label: "Coût de l'étude, toujours gratuite" },
  { value: "48h", label: "Délai de réponse moyen" },
  { value: "5 à 10 ans", label: "De projection sur vos factures" },
  { value: "100 %", label: "Accompagnement neutre, sans obligation" },
];

export default function Stats() {
  return (
    <section className="relative z-10 -mt-16 px-6">
      <div className="reveal mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-2xl shadow-black/10 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-6 py-8 text-center ${index % 2 === 1 ? "border-l" : ""} ${
              index > 1 ? "border-t lg:border-t-0" : ""
            } ${index > 0 ? "lg:border-l" : ""} border-black/5`}
          >
            <p className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-medium text-secondary/60 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
