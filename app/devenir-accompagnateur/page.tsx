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

function Check({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
