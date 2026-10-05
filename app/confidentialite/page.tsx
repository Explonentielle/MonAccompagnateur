import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHeader title="Politique de confidentialité" />
      <section className="mx-auto max-w-3xl px-6 py-14 space-y-8 text-secondary/80">
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
          Page en construction : ce texte est un modèle générique RGPD à
          faire valider (idéalement par un professionnel du droit) et à
          compléter avec les informations réelles [PLACEHOLDER] avant mise
          en ligne publique.
        </div>

        <div>
          <h2 className="text-lg font-semibold text-secondary">
            Responsable du traitement
          </h2>
          <p className="mt-2">
            [PLACEHOLDER — raison sociale], joignable à
            willy.votreaccompagnateur@gmail.com, est responsable du
            traitement des données collectées via ce site.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-secondary">
            Données collectées
          </h2>
          <p className="mt-2">
            Via le formulaire de contact : nom, email, téléphone, commune,
            type de projet, créneau souhaité et, si vous le souhaitez, une
            facture énergétique jointe à votre demande.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-secondary">
            Finalité et base légale
          </h2>
          <p className="mt-2">
            Ces données sont utilisées uniquement pour traiter votre demande
            d&apos;étude énergétique gratuite et vous recontacter, sur la
            base de votre consentement exprès lors de l&apos;envoi du
            formulaire.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-secondary">
            Destinataires
          </h2>
          <p className="mt-2">
            Vos données sont transmises à Votre Accompagnateur et, si votre
            projet avance, au partenaire installateur qualifié RGE
            correspondant à votre besoin. Elles ne sont jamais vendues à des
            tiers.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-secondary">
            Durée de conservation
          </h2>
          <p className="mt-2">
            [PLACEHOLDER — ex. 3 ans à compter du dernier contact], sauf
            obligation légale de conservation plus longue.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-secondary">Vos droits</h2>
          <p className="mt-2">
            Conformément au RGPD, vous disposez d&apos;un droit
            d&apos;accès, de rectification, d&apos;effacement et
            d&apos;opposition sur vos données. Pour l&apos;exercer,
            contactez-nous à willy.votreaccompagnateur@gmail.com.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-secondary">Cookies</h2>
          <p className="mt-2">
            [PLACEHOLDER — à compléter selon les outils réellement utilisés :
            mesure d&apos;audience, widget de chat, etc.]
          </p>
        </div>
      </section>
    </>
  );
}
