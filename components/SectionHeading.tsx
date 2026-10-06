import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div className={`reveal ${centered ? "text-center" : "text-left"}`}>
      <span
        className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] ${
          dark ? "text-primary-light" : "text-primary"
        }`}
      >
        <span aria-hidden="true" className="h-px w-8 bg-current" />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-secondary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base sm:text-lg ${centered ? "mx-auto max-w-2xl" : "max-w-xl"} ${
            dark ? "text-white/65" : "text-secondary/65"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
