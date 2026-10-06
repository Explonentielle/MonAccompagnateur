import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import EngagementPillars from "@/components/EngagementPillars";
import WhyUs from "@/components/WhyUs";
import Method from "@/components/Method";
import Solutions from "@/components/Solutions";
import PartnersTrust from "@/components/PartnersTrust";
import Advisor from "@/components/Advisor";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { defaultConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <EngagementPillars />
      <WhyUs />
      <Method />
      <Solutions />
      <PartnersTrust />
      <Advisor />
      <Testimonials />
      <FAQ />
      <section className="relative overflow-hidden bg-secondary py-24 text-center text-white">
        <div aria-hidden="true" className="bg-grid absolute inset-0" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/35 blur-[120px]" />
        <div className="reveal relative mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Prêt à comprendre vos{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              dépenses énergétiques ?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
            Étude gratuite, sans engagement, avec un interlocuteur unique du
            premier échange jusqu&apos;à la transmission de votre projet.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Demander mon étude gratuite
            </a>
            <a
              href={`tel:${defaultConfig.phoneHref}`}
              className="rounded-full border border-white/25 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {defaultConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
