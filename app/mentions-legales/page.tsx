import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader title="Mentions légales" />
      <section className="mx-auto max-w-3xl px-6 py-14 space-y-8 text-secondary/80">
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
          Page en construction : les informations ci-dessous sont des
          espaces réservés [PLACEHOLDER] à remplacer par les informations
          légales réelles de la société avant toute mise en ligne publique.
        </div>

        <div>
          <h2 className="text-lg font-semibold text-secondary">Éditeur du site</h2>
          <p className="mt-2">
            Raison sociale : [PLACEHOLDER — ex. Votre Accompagnateur SASU]
            <br />
            Forme juridique : [PLACEHOLDER]
            <br />
            SIRET : [PLACEHOLDER]
            <br />
            Siège social : [PLACEHOLDER — adresse complète]
            <br />
            Directeur de la publication : [PLACEHOLDER — nom]
            <br />
            Téléphone : 06 65 61 33 69
            <br />
            Email : willy.votreaccompagnateur@gmail.com
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-secondary">Hébergement</h2>
          <p className="mt-2">
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, États-Unis —{" "}
            <a href="https://vercel.com" className="underline">
              vercel.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-secondary">
            Propriété intellectuelle
          </h2>
          <p className="mt-2">
            L&apos;ensemble des contenus présents sur ce site (textes,
            logos, visuels) est la propriété de [PLACEHOLDER — raison
            sociale], sauf mention contraire. Toute reproduction sans
            autorisation préalable est interdite.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-secondary">
            Rôle et responsabilité
          </h2>
          <p className="mt-2">
            Votre Accompagnateur intervient en tant qu&apos;interlocuteur
            commercial et conseil. La réalisation des travaux est assurée
            par des entreprises partenaires, qualifiées RGE selon les
            prestations concernées. Votre Accompagnateur n&apos;est pas
            elle-même l&apos;entreprise installatrice.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-secondary">Contact</h2>
          <p className="mt-2">
            Pour toute question relative aux présentes mentions légales,
            contactez-nous à willy.votreaccompagnateur@gmail.com.
          </p>
        </div>
      </section>
    </>
  );
}
