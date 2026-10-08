import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { defaultConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader title="Mentions légales" />
      <section className="mx-auto max-w-3xl space-y-10 px-6 py-16 text-secondary/80">
        <div>
          <h2 className="text-xl font-extrabold text-secondary">Éditeur du site</h2>
          <p className="mt-3 leading-relaxed">
            Nom commercial : {defaultConfig.brandName}
            <br />
            Willy Duong, entrepreneur individuel (EI), micro-entrepreneur
            <br />
            SIREN : 818 512 121
            <br />
            SIRET : 818 512 121 00034
            <br />
            Adresse professionnelle : 9 rue Cantemerle, 33000 Bordeaux, France
            <br />
            Directeur de la publication : Willy Duong
            <br />
            Téléphone : {defaultConfig.phone}
            <br />
            Email : {defaultConfig.email}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-secondary">Hébergement</h2>
          <p className="mt-3 leading-relaxed">
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, États-Unis,{" "}
            <a href="https://vercel.com" className="underline">
              vercel.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-secondary">
            Activité de {defaultConfig.brandName}
          </h2>
          <div className="mt-3 space-y-4 leading-relaxed">
            <p>
              {defaultConfig.brandName} accompagne gratuitement et sans
              engagement les propriétaires dans leurs projets de rénovation
              énergétique : photovoltaïque, pompes à chaleur, climatisation et
              batteries.
            </p>
            <p>
              L&apos;accompagnement comprend une analyse des consommations
              énergétiques, une étude de solutions adaptées au logement et une
              estimation de leur rentabilité. L&apos;étude est remise au
              propriétaire, qu&apos;il décide ou non de poursuivre son projet
              avec un partenaire.
            </p>
            <p>
              Les estimations de consommation, de production et d&apos;économies
              reposent sur les hypothèses précisées dans chaque étude. Elles
              sont indicatives et ne constituent pas une garantie de résultat.
            </p>
            <p>
              Si le propriétaire souhaite poursuivre son projet,{" "}
              {defaultConfig.brandName} peut le mettre en relation avec un
              partenaire installateur disposant des qualifications adaptées aux
              travaux concernés. Le devis et le bon de commande sont établis au
              nom du partenaire, qui réalise les travaux et assure les garanties
              attachées à sa prestation.
            </p>
            <p>
              L&apos;accompagnement est gratuit pour le propriétaire.{" "}
              {defaultConfig.brandName} peut percevoir une rémunération de ses
              partenaires lorsqu&apos;un projet aboutit à une installation.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-secondary">
            Propriété intellectuelle
          </h2>
          <p className="mt-3 leading-relaxed">
            L&apos;ensemble des contenus présents sur ce site (textes, logos,
            visuels) est la propriété de Willy Duong, {defaultConfig.brandName},
            sauf mention contraire. Toute reproduction sans autorisation
            préalable est interdite.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-secondary">Contact</h2>
          <p className="mt-3 leading-relaxed">
            Pour toute question relative aux présentes mentions légales,
            contactez-nous à {defaultConfig.email}.
          </p>
        </div>
      </section>
    </>
  );
}
