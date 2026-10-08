import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { defaultConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHeader title="Politique de confidentialité" />
      <section className="mx-auto max-w-3xl space-y-10 px-6 py-16 text-secondary/80">
        <div>
          <h2 className="text-xl font-extrabold text-secondary">
            Responsable du traitement
          </h2>
          <p className="mt-3 leading-relaxed">
            Willy Duong, entrepreneur individuel exerçant sous le nom commercial{" "}
            {defaultConfig.brandName}, SIRET 818 512 121 00034, établi au 9 rue
            Cantemerle, 33000 Bordeaux, est responsable du traitement des
            données personnelles collectées via ce site.
          </p>
          <p className="mt-4 leading-relaxed">
            Il est joignable à l&apos;adresse {defaultConfig.email} pour toute
            question concernant l&apos;utilisation de vos données personnelles
            ou pour exercer vos droits.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-secondary">
            Données collectées
          </h2>
          <p className="mt-3 leading-relaxed">
            Via le formulaire de demande d&apos;accompagnement : nom, email,
            téléphone, commune, type de projet, créneau souhaité et, si vous le
            souhaitez, une facture énergétique jointe à votre demande.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-secondary">
            Utilisation des informations transmises
          </h2>
          <div className="mt-3 space-y-4 leading-relaxed">
            <p>
              Les informations communiquées dans le formulaire de demande
              d&apos;accompagnement sont utilisées pour traiter votre demande,
              vous recontacter, organiser un rendez-vous et préparer votre
              étude énergétique. Elles sont traitées sur la base de votre
              consentement, donné lors de l&apos;envoi du formulaire.
            </p>
            <p>
              Les informations transmises dans le cadre du recrutement sont
              utilisées pour examiner votre candidature et échanger avec vous au
              sujet d&apos;une éventuelle collaboration.
            </p>
            <p>
              Lorsque vous demandez une mise en relation, les informations
              nécessaires à votre projet peuvent être transmises au partenaire
              installateur concerné. Vous êtes informé de son identité avant
              cette transmission.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-secondary">Destinataires</h2>
          <p className="mt-3 leading-relaxed">
            Vos données sont destinées à {defaultConfig.brandName} et, si votre
            projet avance et avec votre accord, au partenaire installateur
            correspondant à votre besoin. Elles ne sont jamais vendues à des
            tiers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-secondary">Vos droits</h2>
          <p className="mt-3 leading-relaxed">
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement et d&apos;opposition sur vos
            données personnelles.
          </p>
          <p className="mt-4 leading-relaxed">
            Pour exercer vos droits, vous pouvez écrire à {defaultConfig.email}.
            Vous pouvez également adresser une réclamation à la CNIL sur{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              www.cnil.fr
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
