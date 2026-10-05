export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-black/5 bg-secondary/[0.03] py-14">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary">{title}</h1>
        {subtitle && <p className="mt-3 text-secondary/70">{subtitle}</p>}
      </div>
    </section>
  );
}
