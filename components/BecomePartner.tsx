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
    <section className="bg-secondary/[0.03] py-14">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary">Devenir partenaire</h2>
          <p className="mt-3 text-secondary/70">
            Développez votre visibilité terrain et votre chiffre d&apos;affaires
            grâce à une représentation directe auprès des particuliers.
          </p>
        </div>

        <p className="mt-8 text-secondary/70">
          Votre Accompagnateur propose aux particuliers un accompagnement
          gratuit pour les aider à comprendre leurs besoins, étudier leurs
          dépenses énergétiques et identifier les solutions les plus adaptées
          à leur logement. Notre objectif est également de représenter des
          entreprises partenaires spécialisées dans différents domaines :
          solaire, chauffage, climatisation, toiture et isolation.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-xl bg-white p-5 shadow-sm border border-black/5"
            >
              <h3 className="text-sm font-semibold text-secondary">{b.title}</h3>
              <p className="mt-1.5 text-sm text-secondary/70">{b.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-secondary/70">
          Le particulier bénéficie d&apos;un interlocuteur unique pour être
          orienté vers un installateur RGE (Reconnu Garant de
          l&apos;Environnement), avec une prise en charge claire du projet et
          des démarches administratives incluses selon la solution proposée.
          Vous restez concentré sur votre savoir-faire technique et la
          réalisation des chantiers : Votre Accompagnateur développe votre
          présence commerciale sur le terrain et crée de nouvelles
          opportunités de développement.
        </p>

        <div className="mt-10 rounded-2xl bg-primary p-8 text-center text-white">
          <p className="font-semibold">
            Vous êtes installateur ou entreprise spécialisée ?
          </p>
          <p className="mt-1 text-white/90">
            Échangeons sur la mise en place d&apos;un partenariat avec Votre
            Accompagnateur.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-medium text-primary-dark hover:bg-white/90 transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
