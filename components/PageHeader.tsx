export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-secondary pb-24 pt-20 text-white">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/40 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-[110px]" />
      <div className="animate-fade-up relative mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">{subtitle}</p>}
      </div>
    </section>
  );
}
