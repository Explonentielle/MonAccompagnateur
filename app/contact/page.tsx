import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { defaultConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact — Étude gratuite",
  description:
    "Demandez votre étude énergétique gratuite et sans engagement auprès de Votre Accompagnateur.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Demandez votre étude gratuite"
        subtitle="Sans engagement — réponse rapide par téléphone ou par email."
      />

      <section className="mx-auto max-w-xl px-6 py-14">
        <p className="text-center text-sm text-secondary/60">
          <a
            href={`tel:${defaultConfig.phoneHref}`}
            className="font-semibold text-primary-dark hover:underline"
          >
            {defaultConfig.phone}
          </a>
          {" · "}
          <a href={`mailto:${defaultConfig.email}`} className="hover:underline">
            {defaultConfig.email}
          </a>
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
