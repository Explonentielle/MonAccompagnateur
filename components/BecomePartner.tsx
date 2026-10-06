import SectionHeading from "./SectionHeading";

const benefits = [
  {
    title: "Présence terrain",
    description:
      "Votre entreprise est représentée directement auprès du grand public, au plus près des propriétaires.",
  },
  {
    title: "Visibilité locale",
    description:
      "Prospection terrain, distribution de supports et actions locales pour développer votre notoriété.",
  },
  {
    title: "Opportunités qualifiées",
    description:
      "Identification des projets, première analyse des besoins et mise en relation avec des particuliers intéressés.",
  },
  {
    title: "Développement commercial",
    description:
      "Un canal supplémentaire pour générer des projets et contribuer à l'augmentation de votre chiffre d'affaires.",
  },
];

export default function BecomePartner() {
  return (
    <section className="bg-secondary/[0.04] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Rejoignez-nous"
          title="Devenir partenaire"
          description="Développez votre visibilité terrain et votre chiffre d'affaires grâce à une représentation directe auprès des particuliers."
        />

        <p className="reveal mx-auto mt-10 max-w-3xl text-center text-secondary/70 sm:text-lg">
          Votre Accompagnateur propose aux particuliers un accompagnement
          gratuit pour les aider à comprendre leurs besoins, étudier leurs
          dépenses énergétiques et identifier les solutions les plus adaptées
          à leur logement. Notre objectif est également de représenter des
          entreprises partenaires spécialisées dans différents domaines :
          solaire, chauffage, climatisation, toiture et isolation.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {benefits.map((b, index) => (
            <div
              key={b.title}
              className="reveal group flex gap-5 rounded-[1.75rem] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-4xl font-extrabold text-primary/25 transition-colors group-hover:text-primary">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-secondary">{b.title}</h3>
                <p className="mt-2 text-sm text-secondary/65">{b.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mx-auto mt-12 max-w-3xl text-center text-secondary/70 sm:text-lg">
          Le particulier bénéficie d&apos;un interlocuteur unique pour être
          orienté vers un installateur RGE (Reconnu Garant de
          l&apos;Environnement), avec une prise en charge claire du projet et
          des démarches administratives incluses selon la solution proposée.
          Vous restez concentré sur votre savoir-faire technique et la
          réalisation des chantiers : Votre Accompagnateur développe votre
          présence commerciale sur le terrain et crée de nouvelles
          opportunités de développement.
        </p>

        <div className="reveal relative mt-14 overflow-hidden rounded-[2rem] bg-secondary p-10 text-center text-white sm:p-14">
          <div aria-hidden="true" className="bg-grid absolute inset-0" />
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-60 w-[30rem] -translate-x-1/2 rounded-full bg-primary/40 blur-[100px]" />
          <p className="relative text-2xl font-extrabold sm:text-3xl">
            Vous êtes installateur ou entreprise spécialisée ?
          </p>
          <p className="relative mt-3 text-white/65">
            Échangeons sur la mise en place d&apos;un partenariat avec Votre
            Accompagnateur.
          </p>
          <a
            href="/contact"
            className="relative mt-8 inline-block rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
