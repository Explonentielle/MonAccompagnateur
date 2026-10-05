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
      <section style={{ backgroundColor: `${defaultConfig.colors.accent.green}06` }}>
        <EngagementPillars />
        <WhyUs />
      </section>
      <Method />
      <Solutions />
      <PartnersTrust />
      <Advisor />
      <Testimonials />
      <FAQ />
      <section className="py-16 text-center" style={{ backgroundColor: `${defaultConfig.colors.accent.green}12` }}>
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary">
            Prêt à comprendre vos dépenses énergétiques ?
          </h2>
          <p className="mt-3 text-secondary/70">
            Étude gratuite, sans engagement, avec un interlocuteur unique du
            premier échange jusqu&apos;à la transmission de votre projet.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-full px-8 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: defaultConfig.colors.accent.green }}
          >
            Demander mon étude gratuite
          </a>
        </div>
      </section>
    </>
  );
}
