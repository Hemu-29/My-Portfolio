/* Moments — the personal gallery ("More than just design").
   ⚠ All `src` values are placeholders until Gireesh supplies real photos:
   drop images into /public/images/moments/ and fill in `src`. Tiles without
   a src render as labeled placeholder frames so the section works today.

   `fr` carries the French copy for every visible field (see lib/i18n.tsx -> L()).
   Place names, school names and company names stay untranslated on purpose. */

export type Moment = {
  id: string;
  title: string;
  context: string; /* event · place */
  date: string;
  story: string;
  src?: string;
  tall?: boolean;
  fr?: { title?: string; context?: string; date?: string; story?: string };
};

export const MOMENTS: Moment[] = [
  {
    id: "hackathon-win",
    title: "The night LockAI won",
    context: "UNBIAS Innovation Hackathon · Sophia Antipolis",
    date: "March 2026",
    story:
      "Three prototypes, one sleepless sprint, and a jury walkthrough that ended with first place. The moment I knew product thinking was my lane.",
    tall: true,
    fr: {
      title: "La nuit où LockAI a gagné",
      date: "Mars 2026",
      story:
        "Trois prototypes, un sprint sans sommeil, et une démo au jury qui s’est terminée par une première place. Le moment où j’ai su que la pensée produit était ma voie.",
    },
  },
  {
    id: "heeding-team",
    title: "The Heeding team",
    context: "Heeding Climate Solutions · Sophia Antipolis",
    date: "2026",
    story:
      "The people teaching me what it means to ship a real product — and to aim it at a billion tonnes of CO₂.",
    fr: {
      title: "L’équipe Heeding",
      story:
        "Les personnes qui m’apprennent ce que veut dire livrer un vrai produit — et le viser sur un milliard de tonnes de CO₂.",
    },
  },
  {
    id: "mbs-campus",
    title: "Montpellier Business School",
    context: "MSc International Business",
    date: "2024 – 2026",
    story:
      "Where the business side of my design brain got its formal training — market intelligence, strategy, AI in business.",
    fr: {
      story:
        "Là où le côté business de mon cerveau de designer a reçu sa formation — intelligence marché, stratégie, IA en entreprise.",
    },
  },
  {
    id: "first-workshop",
    title: "First segmentation workshop",
    context: "UX research · Heeding",
    date: "2026",
    story:
      "Fleet operators, fuel suppliers, public-sector buyers — three journeys mapped on one very full whiteboard.",
    tall: true,
    fr: {
      title: "Premier atelier de segmentation",
      context: "Recherche UX · Heeding",
      story:
        "Transporteurs, fournisseurs de carburant, acheteurs publics — trois parcours cartographiés sur un tableau blanc très chargé.",
    },
  },
  {
    id: "paris-internship",
    title: "Paris, logistics season",
    context: "V Raise · Île-de-France",
    date: "2025",
    story:
      "Six months inside supply chains — where I learned that every messy process is a design problem wearing a spreadsheet.",
    fr: {
      title: "Paris, saison logistique",
      story:
        "Six mois au cœur des chaînes d’approvisionnement — où j’ai appris que tout processus bancal est un problème de design déguisé en tableur.",
    },
  },
  {
    id: "india-roots",
    title: "Where it started",
    context: "Telangana, India",
    date: "2021 – 2024",
    story:
      "Sales floors and growth targets — the years that taught me customers before I ever opened Figma.",
    fr: {
      title: "Là où tout a commencé",
      context: "Telangana, Inde",
      story:
        "Terrain de vente et objectifs de croissance — les années qui m’ont appris les clients bien avant que j’ouvre Figma.",
    },
  },
  {
    id: "montpellier-life",
    title: "Montpellier days",
    context: "France",
    date: "2024",
    story: "New country, new language, new default browser tab: Google Translate.",
    fr: {
      title: "Jours montpelliérains",
      story: "Nouveau pays, nouvelle langue, nouvel onglet par défaut : Google Translate.",
    },
  },
  {
    id: "demo-day",
    title: "Demo day",
    context: "Product presentation",
    date: "2026",
    story: "Presenting live — the fastest way to find out which parts of a design actually explain themselves.",
    tall: true,
    fr: {
      title: "Jour de démo",
      context: "Présentation produit",
      story:
        "Présenter en direct — le moyen le plus rapide de savoir quelles parties d’un design s’expliquent vraiment toutes seules.",
    },
  },
  {
    id: "mentors",
    title: "The mentors",
    context: "The people behind the work",
    date: "Always",
    story: "Every jump in my work traces back to someone generous with their time.",
    fr: {
      title: "Les mentors",
      context: "Les personnes derrière le travail",
      date: "Toujours",
      story: "Chaque progrès dans mon travail remonte à quelqu’un de généreux avec son temps.",
    },
  },
  {
    id: "friends",
    title: "The support system",
    context: "Friends & family",
    date: "Always",
    story: "The ones who heard every pitch first.",
    fr: {
      title: "Le cercle de soutien",
      context: "Amis & famille",
      date: "Toujours",
      story: "Ceux qui ont entendu chaque pitch en premier.",
    },
  },
  {
    id: "conference",
    title: "First conference",
    context: "Climate-tech ecosystem",
    date: "2026",
    story: "A room full of people betting their careers on decarbonisation. Contagious.",
    fr: {
      title: "Première conférence",
      context: "Écosystème climate-tech",
      story: "Une salle pleine de gens qui parient leur carrière sur la décarbonation. Contagieux.",
    },
  },
  {
    id: "wip",
    title: "3 a.m. work-in-progress",
    context: "Behind the scenes",
    date: "Ongoing",
    story: "The unglamorous middle of every polished thing.",
    fr: {
      title: "Travail en cours, 3 h du matin",
      context: "Dans les coulisses",
      date: "En cours",
      story: "Le milieu ingrat de toute chose aboutie.",
    },
  },
];
