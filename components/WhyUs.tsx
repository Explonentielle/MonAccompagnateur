import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="relative overflow-hidden bg-primary/[0.07] py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/15 blur-[100px]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading
            align="left"
            eyebrow="Notre histoire"
            title="Pourquoi Votre Accompagnateur&nbsp;?"
          />
          <div className="reveal relative mt-10 overflow-hidden rounded-[1.75rem] bg-secondary p-8 text-white">
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/40 blur-3xl" />
            <p className="relative text-7xl font-extrabold leading-none tracking-tight text-primary-light">
              11
              <span className="ml-2 text-3xl text-white">ans</span>
            </p>
            <p className="relative mt-3 text-white/70">
              d&apos;expérience commerciale dans le secteur de l&apos;énergie et
              de l&apos;amélioration de l&apos;habitat.
            </p>
          </div>
        </div>

        <div className="reveal space-y-6 text-base text-secondary/70 sm:text-lg lg:col-span-6 lg:pt-14">
          <p>
            Après 11 ans d&apos;expérience commerciale dans le secteur de
            l&apos;énergie et de l&apos;amélioration de l&apos;habitat, Votre
            Accompagnateur est né d&apos;un constat simple : beaucoup de
            propriétaires connaissent le montant de leur facture, mais ne
            savent pas réellement ce que leur énergie leur coûtera dans les
            années à venir, ni quelles solutions peuvent être pertinentes pour
            leur logement.
          </p>
          <p>
            Notre rôle est d&apos;apporter gratuitement une première lecture
            claire de la situation : analyser les consommations, projeter les
            dépenses énergétiques, identifier les postes d&apos;amélioration et
            comparer le coût de l&apos;inaction avec l&apos;intérêt potentiel
            d&apos;un investissement dans une solution énergétique.
          </p>
          <p className="border-l-4 border-primary bg-white/70 py-4 pl-6 pr-4 text-xl font-bold text-secondary">
            Avant de vendre une solution, nous aidons le propriétaire à
            comprendre ses chiffres.
          </p>
        </div>
      </div>
    </section>
  );
}
