export default function FAQ() {
  const faqs = [
    {
      q: "L'accompagnement est-il vraiment gratuit ?",
      a: "Oui, l'étude initiale (analyse de vos factures, projection et pistes de solutions) est entièrement gratuite et sans engagement de votre part.",
    },
    {
      q: "Quel est le rôle de Votre Accompagnateur ?",
      a: "Nous sommes votre interlocuteur conseil : nous analysons votre situation et vous orientons vers la solution la plus adaptée. Les travaux sont ensuite réalisés par nos partenaires installateurs qualifiés — Votre Accompagnateur n'est pas lui-même l'installateur.",
    },
    {
      q: "Vos partenaires sont-ils certifiés RGE ?",
      a: "Oui, selon les travaux concernés, nos partenaires installateurs disposent des qualifications RGE (Reconnu Garant de l'Environnement) nécessaires pour l'éligibilité aux aides.",
    },
    {
      q: "Quels délais entre l'étude et l'installation ?",
      a: "Cela dépend de la solution retenue et de la disponibilité du partenaire installateur. Un délai indicatif vous est communiqué dès la mise en relation.",
    },
    {
      q: "Quelles garanties sur le matériel installé ?",
      a: "Nous sélectionnons des équipements auprès de marques reconnues (DMEGC Solar, Atlantic, Daikin). Les garanties constructeur et main d'œuvre vous sont détaillées avec l'offre du partenaire.",
    },
    {
      q: "Photovoltaïque ou batteries : par où commencer ?",
      a: "Chaque projet est différent. C'est justement l'objet de l'étude gratuite : comprendre votre consommation avant de recommander une solution, plutôt que l'inverse.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-14">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        FAQ
      </p>
      <h2 className="mt-2 text-3xl font-bold text-secondary text-center">
        Questions fréquentes
      </h2>
      <div className="mt-10 w-full space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group block w-full box-border rounded-xl border border-black/10 p-6 open:bg-secondary/[0.03]"
            style={{ width: "100%" }}
          >
            <summary className="w-full cursor-pointer list-none flex items-center justify-between gap-4 font-medium text-secondary">
              {item.q}
              <span className="shrink-0 text-primary text-xl leading-none transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-secondary/70">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
