import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import SwipeRow from "@/components/SwipeRow";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { defaultConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Devenir accompagnateur",
  description:
    "Rejoignez Votre Accompagnateur : agent commercial indépendant, commissions déplafonnées, formation et accompagnement au quotidien, évolution rapide.",
};

const NBSP = " ";

const eur = (amount: number) =>
  `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, NBSP)}${NBSP}€`;

const nb = (text: string) =>
  text.replace(/(\d) (?=\d{3}\b)/g, `$1${NBSP}`).replace(/(\d) €/g, `$1${NBSP}€`);

const mailto = (subject: string, body: string) =>
  `mailto:${defaultConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const interviewHref = mailto(
  "Demande d'entretien : devenir accompagnateur",
  "Bonjour,\n\nJe souhaite demander un entretien pour devenir accompagnateur.\n\nNom :\nTéléphone :\nCommune :\n"
);
const presentationHref = mailto(
  "Demande de présentation d'entreprise",
  "Bonjour,\n\nJe souhaite assister à une présentation d'entreprise.\n\nNom :\nTéléphone :\nCommune :\n"
);
const whatsappHref = `https://wa.me/33${defaultConfig.phoneHref.slice(1)}?text=${encodeURIComponent(
  "Bonjour, je souhaite en savoir plus sur le poste d'accompagnateur."
)}`;

const advantages = [
  {
    title: "Commissions déplafonnées",
    text: "Une rémunération liée à vos résultats et des primes motivantes.",
  },
  {
    title: "Liberté et autonomie",
    text: "Organisez votre activité en tant qu'agent commercial indépendant.",
  },
  {
    title: "Accompagnement quotidien",
    text: "Bénéficiez d'une formation aux produits, à la prospection et aux rendez-vous commerciaux, ainsi que d'un accompagnement sur le terrain.",
  },
  {
    title: "Une équipe dynamique",
    text: "Avancez dans une ambiance conviviale, avec un esprit d'entraide et de challenge.",
  },
  {
    title: "Des possibilités d'évolution rapide",
    text: "Développez vos compétences et accédez au poste d'accompagnateur manager selon vos résultats et votre progression.",
  },
];

const steps = [
  {
    title: "Accompagnateur commercial",
    tagline: "Conseiller et vendre",
    text: "Développez vos compétences en prospection, en prise de rendez-vous et en accompagnement commercial, avec une formation et un soutien au quotidien.",
  },
  {
    title: "Accompagnateur manager",
    tagline: "Former et accompagner",
    text: "Accompagnez une équipe, participez aux présentations d'entreprise et aux recrutements, et formez les nouveaux accompagnateurs sur le terrain.",
  },
  {
    title: "Accompagnateur du développement",
    tagline: "Développer et piloter",
    text: "Contribuez au développement de nouveaux partenariats, à la mise en place d'équipes et à la progression des managers, pour accompagner la croissance de Votre Accompagnateur.",
  },
];

const months = [
  {
    code: "M1",
    objective: "2 ventes",
    text: "Devenir autonome en prise de rendez-vous au porte-à-porte. Être accompagné lors des rendez-vous commerciaux.",
    prime: nb("Prime exceptionnelle de 1 000 € dès la 1re vente."),
    example: nb("Première vente : 700 € de commission + 1 000 € de prime = 1 700 €."),
  },
  {
    code: "M2",
    objective: "3 ventes",
    text: "Approfondir la conduite des rendez-vous commerciaux et apprendre à les réaliser, avec un accompagnement total lors des rendez-vous.",
    prime: nb("Prime exceptionnelle de 1 000 € à la 2e vente."),
    example: nb(
      "Première vente : 700 €. Deuxième vente : 800 € + 1 000 € de prime = 1 800 €, soit 2 500 € cumulés."
    ),
  },
  {
    code: "M3",
    objective: "4 ventes",
    text: "Atteindre l'autonomie complète : prendre ses rendez-vous, mener le rendez-vous commercial jusqu'au bout et signer les contrats de manière autonome.",
    prime: nb("Prime exceptionnelle de 1 000 € à la 3e vente."),
    example: nb("Troisième vente : 900 € + 1 000 € de prime = 1 900 €, soit 3 400 € cumulés."),
  },
];

const ranks = ["1re", "2e", "3e", "4e", "5e"];

function Check({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DataTable({
  head,
  rows,
  emphasizeLastRow = false,
}: {
  head: string[];
  rows: (string | number)[][];
  emphasizeLastRow?: boolean;
}) {
  return (
    <div className="reveal overflow-x-auto rounded-2xl border border-black/[0.07] bg-white shadow-sm">
      <table className="w-full text-[11px] sm:text-sm">
        <thead>
          <tr className="bg-secondary text-white">
            {head.map((label, index) => (
              <th
                key={label}
                scope="col"
                className={`px-1 py-3 font-bold sm:px-4 ${index === 0 ? "text-left" : "text-center"}`}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-t border-black/5 ${rowIndex % 2 === 1 ? "bg-primary/[0.05]" : ""} ${
                emphasizeLastRow && rowIndex === rows.length - 1 ? "font-extrabold text-primary" : ""
              }`}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-1 py-3 sm:px-4 ${cellIndex === 0 ? "text-left font-semibold" : "text-center"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RankTable({ rows }: { rows: { label: string; values: number[] }[] }) {
  return (
    <>
      <div className="sm:hidden">
        <DataTable
          head={["Vente du mois", ...rows.map((row) => row.label)]}
          rows={ranks.map((rank, index) => [rank, ...rows.map((row) => eur(row.values[index]))])}
        />
      </div>
      <div className="hidden sm:block">
        <DataTable
          head={["Vente du mois", ...ranks]}
          rows={rows.map((row) => [row.label, ...row.values.map(eur)])}
        />
      </div>
    </>
  );
}

function Actions({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
      <a
        href={interviewHref}
        className="rounded-full bg-primary px-8 py-4 text-center text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
      >
        Demander un entretien
      </a>
      <a
        href={presentationHref}
        className={`rounded-full border px-8 py-4 text-center text-sm font-bold transition-colors ${
          dark
            ? "border-white/25 text-white hover:border-white hover:bg-white/10"
            : "border-secondary/20 text-secondary hover:border-primary hover:text-primary"
        }`}
      >
        Assister à une présentation d&apos;entreprise
      </a>
    </div>
  );
}

export default function DevenirAccompagnateurPage() {
  return (
    <>
      <PageHeader
        title="Devenir accompagnateur"
        subtitle="Rejoignez une entreprise dynamique, ambitieuse et en plein développement."
      />

      <section className="bg-white py-12 sm:py-20">
        <div className="reveal mx-auto max-w-3xl px-6 text-center">
          <p className="text-lg text-secondary/75 sm:text-xl">
            Vous souhaitez entreprendre, gagner en autonomie et évoluer dans une
            équipe qui vous accompagne au quotidien ? Votre Accompagnateur se
            développe et recrute des agents commerciaux indépendants, avec ou
            sans expérience.
          </p>
          <div className="mt-8">
            <Actions />
          </div>
        </div>
      </section>

      <section className="bg-primary/[0.07] py-12 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 sm:gap-8 md:grid-cols-2">
          <article className="reveal rounded-[1.75rem] bg-white p-6 shadow-sm sm:p-10">
            <h2 className="text-xl font-extrabold text-secondary sm:text-2xl">
              Votre motivation fait la différence
            </h2>
            <p className="mt-4 text-secondary/70">
              Nous recherchons des personnes motivées, qui aiment le contact
              humain, ont envie de relever des défis et souhaitent construire
              leur avenir professionnel. Votre motivation, votre implication et
              votre envie d&apos;apprendre comptent avant tout. Vous pouvez
              candidater avec ou sans CV.
            </p>
          </article>
          <article className="reveal rounded-[1.75rem] bg-white p-6 shadow-sm sm:p-10">
            <h2 className="text-xl font-extrabold text-secondary sm:text-2xl">
              Un métier de terrain, au contact des propriétaires
            </h2>
            <p className="mt-4 text-secondary/70">
              Vous représentez Votre Accompagnateur auprès du grand public et
              présentez notre démarche d&apos;accompagnement gratuit des
              propriétaires dans leurs projets de rénovation énergétique. Vous
              contribuez au développement du chiffre d&apos;affaires de nos
              entreprises clientes et de nos partenaires RGE, grâce à la
              prospection, à la prise de rendez-vous et à l&apos;accompagnement
              commercial.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Vos avantages"
            title="Liberté, accompagnement et perspectives"
          />
          <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
            {advantages.map((item, index) => (
              <div
                key={item.title}
                className={`reveal flex gap-4 rounded-2xl border border-black/[0.07] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-6 ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                } ${index === 4 ? "sm:col-span-2" : ""}`}
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/30">
                  <Check />
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-secondary sm:text-lg">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-secondary/65 sm:text-base">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/[0.04] py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Évolution" title="Votre parcours d'évolution" />
          <div className="mt-10 sm:mt-14">
            <SwipeRow
              label="Votre parcours d'évolution"
              fadeClassName="from-[#f6f6f6]"
              desktopClassName="sm:grid sm:grid-cols-1 sm:gap-5 md:grid-cols-3 md:gap-6"
            >
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative w-[82%] shrink-0 snap-start rounded-2xl border border-black/[0.07] bg-white p-5 shadow-sm sm:w-auto sm:rounded-[1.75rem] sm:p-7"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-white shadow-md shadow-primary/30">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-secondary sm:text-xl">{step.title}</h3>
                  <p className="mt-1 text-sm font-bold text-primary">{step.tagline}</p>
                  <p className="mt-3 text-sm text-secondary/70 sm:text-base">{step.text}</p>
                </article>
              ))}
            </SwipeRow>
          </div>
          <p className="reveal mx-auto mt-6 max-w-2xl text-center text-xs text-secondary/55 sm:text-sm">
            Ces perspectives d&apos;évolution dépendent de vos résultats, de
            votre progression et des opportunités de développement de
            l&apos;entreprise.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Rémunération"
            title="Barème de rémunération"
            description="Accompagnateur commercial | Parcours M1 à M3"
          />

          <h3 className="reveal mt-10 text-xl font-extrabold text-secondary sm:mt-14 sm:text-2xl">
            Commissions progressives sur chaque mois
          </h3>
          <p className="reveal mt-3 text-secondary/70">
            Le barème repart à 700&nbsp;€ pour la première vente de chaque
            mois. Chaque vente supplémentaire augmente la commission de
            100&nbsp;€.
          </p>
          <div className="mt-5">
            <RankTable rows={[{ label: "Commission", values: [700, 800, 900, 1000, 1100] }]} />
          </div>

          <div className="mt-8 sm:mt-10">
            <SwipeRow
              label="Objectifs des trois premiers mois"
              desktopClassName="sm:grid sm:grid-cols-1 sm:gap-5 md:grid-cols-3 md:gap-6"
            >
              {months.map((month) => (
                <article
                  key={month.code}
                  className="w-[82%] shrink-0 snap-start rounded-2xl border border-black/[0.07] bg-white p-5 shadow-sm sm:w-auto sm:rounded-[1.75rem] sm:p-7"
                >
                  <p className="text-xs font-extrabold uppercase tracking-widest text-primary">{month.code}</p>
                  <h4 className="mt-1 text-lg font-extrabold text-secondary sm:text-xl">
                    Objectif : {month.objective}
                  </h4>
                  <p className="mt-3 text-sm text-secondary/70 sm:text-base">{month.text}</p>
                  <p className="mt-4 rounded-xl bg-primary/10 px-4 py-3 text-sm font-bold text-primary">
                    {month.prime}
                  </p>
                  <p className="mt-3 text-xs text-secondary/60 sm:text-sm">{month.example}</p>
                </article>
              ))}
            </SwipeRow>
          </div>

          <h3 className="reveal mt-10 text-xl font-extrabold text-secondary sm:mt-14 sm:text-2xl">
            Exemples de rémunération totale par mois
          </h3>
          <div className="mt-5">
            <DataTable
              head={["Ventes réalisées", "Commissions cumulées", "Total M1", "Total M2", "Total M3"]}
              rows={[
                [1, eur(700), eur(1700), eur(700), eur(700)],
                [2, eur(1500), eur(2500), eur(2500), eur(1500)],
                [3, eur(2400), eur(3400), eur(3400), eur(3400)],
                [4, eur(3400), eur(4400), eur(4400), eur(4400)],
                [5, eur(4500), eur(5500), eur(5500), eur(5500)],
              ]}
            />
          </div>
          <p className="reveal mt-4 text-xs text-secondary/55 sm:text-sm">
            Les totaux incluent les commissions et la prime exceptionnelle
            lorsqu&apos;elle est déclenchée. La prime de 1&nbsp;000&nbsp;€ est
            attribuée une seule fois par mois, au seuil indiqué.
          </p>
        </div>
      </section>

      <section className="bg-primary/[0.07] py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Évolution"
            title="Grille de rémunération"
            description="Accompagnateur manager"
          />

          <div className="reveal mt-10 rounded-[1.75rem] bg-white p-6 shadow-sm sm:mt-14 sm:p-8">
            <h3 className="text-lg font-extrabold text-secondary sm:text-xl">Accès au poste</h3>
            <p className="mt-3 text-secondary/70">
              Après avoir réalisé 9 ventes sur le trimestre (les objectifs du
              premier trimestre d&apos;intégration : M1 = 2 ventes, M2 = 3
              ventes, M3 = 4 ventes), l&apos;accompagnateur commercial aura la
              possibilité de passer accompagnateur manager.
            </p>
          </div>

          <h3 className="reveal mt-10 text-xl font-extrabold text-secondary sm:text-2xl">
            1. Commissions personnelles
          </h3>
          <p className="reveal mt-3 text-secondary/70">
            Chaque vente personnelle bénéficie de 100&nbsp;€ supplémentaires
            par rapport au barème accompagnateur commercial. Le barème repart à
            800&nbsp;€ à la première vente de chaque mois, puis augmente de
            100&nbsp;€ par vente supplémentaire.
          </p>
          <div className="mt-5">
            <RankTable
              rows={[
                { label: "Commission", values: [800, 900, 1000, 1100, 1200] },
                { label: "Cumul personnel", values: [800, 1700, 2700, 3800, 5000] },
              ]}
            />
          </div>

          <h3 className="reveal mt-10 text-xl font-extrabold text-secondary sm:text-2xl">
            2. Prime manager sur les ventes de l&apos;équipe
          </h3>
          <p className="reveal mt-3 text-secondary/70">
            100&nbsp;€ par vente réalisée par un membre de son équipe, en
            supplément de ses commissions personnelles. Les ventes personnelles du manager
            sont rémunérées selon le barème ci-dessus.
          </p>
          <p className="reveal mt-2 text-secondary/70">
            Objectif indicatif : environ 3 ventes par personne et par mois dans
            l&apos;équipe.
          </p>
          <div className="mt-5">
            <DataTable
              head={["Exemple mensuel", "Calcul", "Montant"]}
              emphasizeLastRow
              rows={[
                ["3 ventes personnelles", "800 + 900 + 1 000 €", eur(2700)],
                ["2 collaborateurs × 3 ventes", "6 ventes × 100 €", eur(600)],
                ["Rémunération totale", "Commissions + prime manager", eur(3300)],
              ]}
            />
          </div>

          <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2">
            <div className="reveal rounded-[1.75rem] bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-extrabold text-secondary sm:text-xl">
                3. Missions et accompagnement
              </h3>
              <p className="mt-3 text-secondary/70">
                Être accompagné pour réaliser des présentations d&apos;entreprise,
                participer aux recrutements et former les collaborateurs sur le
                terrain. Accompagner chaque membre de l&apos;équipe pour lui
                permettre d&apos;atteindre les objectifs de son premier trimestre
                d&apos;intégration : 2, puis 3, puis 4 ventes.
              </p>
            </div>
            <div className="reveal rounded-[1.75rem] bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-extrabold text-secondary sm:text-xl">
                4. Perspectives d&apos;évolution
              </h3>
              <p className="mt-3 text-secondary/70">
                Possibilité de développer de nouveaux managers et d&apos;évoluer
                ensuite vers le poste d&apos;accompagnateur du développement. La
                prime et les modalités de rémunération de ce poste seront
                définies ultérieurement.
              </p>
            </div>
          </div>
          <p className="reveal mt-6 text-xs text-secondary/55 sm:text-sm">
            Les exemples portent sur les commissions personnelles et la prime
            manager. Les primes exceptionnelles M1 à M3 concernent le parcours
            d&apos;intégration commercial et ne sont pas incluses ici.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-16 text-center text-white sm:py-24">
        <div aria-hidden="true" className="bg-grid absolute inset-0" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/35 blur-[120px]" />
        <div className="reveal relative mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Envie d&apos;en savoir plus ?{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Rencontrons-nous.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/65 sm:text-lg">
            Vous souhaitez assister à une présentation d&apos;entreprise et
            découvrir notre métier, notre accompagnement et nos perspectives
            d&apos;évolution ? Contactez-nous pour demander votre entretien.
          </p>
          <div className="mt-8">
            <Actions dark />
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-white/70 sm:flex-row sm:gap-6">
            <a href={`tel:${defaultConfig.phoneHref}`} className="font-bold text-primary-light transition-colors hover:text-white">
              {defaultConfig.phone}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-primary-light"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <a href={`mailto:${defaultConfig.email}`} className="break-all transition-colors hover:text-white">
              {defaultConfig.email}
            </a>
          </div>
          <p className="mt-2 text-sm text-white/45">{defaultConfig.zone}</p>
          <p className="mx-auto mt-8 max-w-xl text-xs text-white/45">
            Activité indépendante. Rémunération par commissions et primes selon
            les conditions applicables ; les revenus dépendent des résultats
            réalisés.
          </p>
        </div>
      </section>
    </>
  );
}
