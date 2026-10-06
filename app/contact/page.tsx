import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { defaultConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Étude gratuite",
  description:
    "Demandez votre étude énergétique gratuite et sans engagement auprès de Votre Accompagnateur.",
};

const reassurances = [
  "Étude 100 % gratuite",
  "Sans engagement",
  "Réponse rapide",
  "Un interlocuteur unique",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Demandez votre étude gratuite"
        subtitle="Sans engagement, réponse rapide par téléphone ou par email."
      />

      <section className="relative z-10 -mt-12 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_1.5fr]">
          <aside className="relative overflow-hidden rounded-[2rem] bg-secondary p-8 text-white sm:p-10 lg:sticky lg:top-28 lg:self-start">
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary/40 blur-3xl" />
            <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-primary-light">
              Nous contacter
            </p>
            <a
              href={`tel:${defaultConfig.phoneHref}`}
              className="relative mt-4 block text-3xl font-extrabold transition-colors hover:text-primary-light"
            >
              {defaultConfig.phone}
            </a>
            <a
              href={`mailto:${defaultConfig.email}`}
              className="relative mt-3 block break-all text-white/70 transition-colors hover:text-white"
            >
              {defaultConfig.email}
            </a>
            <p className="relative mt-2 text-sm text-white/50">{defaultConfig.zone}</p>

            <ul className="relative mt-8 space-y-3 border-t border-white/10 pt-8">
              {reassurances.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <div className="rounded-[2rem] border border-black/[0.06] bg-white p-8 shadow-2xl shadow-black/10 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
