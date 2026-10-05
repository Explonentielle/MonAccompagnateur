import Link from "next/link";
import { defaultConfig } from "@/lib/site-config";

export const partners = [];

export default function PartnersTrust() {
  return (
    <section id="partenaires" className="py-16" style={{ backgroundColor: `${defaultConfig.colors.accent.green}12` }}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: defaultConfig.colors.accent.green }}>
          Un réseau qualifié
        </p>
        <h2 className="mt-2 text-3xl font-bold text-secondary">Nos partenaires</h2>
        <p className="mt-3 text-secondary/70 max-w-2xl mx-auto">
          Votre Accompagnateur est votre interlocuteur conseil. La réalisation
          des travaux est confiée à des partenaires installateurs qualifiés
          RGE selon les travaux concernés.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {partners.map((partner) => (
            <span
              key={partner}
              className="rounded-full border border-secondary/15 px-4 py-2 text-sm font-semibold text-secondary"
            >
              {partner}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/partenaires"
            className="text-sm font-medium text-primary-dark hover:underline"
          >
            Découvrir nos partenaires →
          </Link>
        </div>
      </div>
    </section>
  );
}
