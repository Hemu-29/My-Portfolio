/* Featured projects — single source of truth for the Work section
   and the /work/[slug] case-study routes. Order = showcase order
   (strongest Product-Design evidence first, per 03_CONTENT_STRATEGY.md). */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

/* French mirror of Study. Every field optional: anything left out falls back
   to the English original, so a half-translated entry still renders. */
export type StudyFr = Partial<Study>;

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  coverLabel: string; /* placeholder text until real covers are supplied */
  award?: string;
  study: Study;
  /* French copy — card fields plus the full case study (see lib/i18n.tsx -> L()).
     Company, product and tool names are deliberately left untranslated. */
  fr?: { title?: string; oneLiner?: string; tags?: string[]; study?: StudyFr };
};

export const PROJECTS: Project[] = [
  {
    slug: "heeding-marketplace",
    title: "Heeding — Sustainable-Fuel Marketplace",
    tags: ["UX Research", "Design System", "Climate-Tech"],
    year: "2026",
    oneLiner:
      "Designing the B2B marketplace UX for Europe's energy transition — turning fuel compliance, traceability and pricing complexity into a product people can actually use.",
    coverLabel: "HEEDING MARKETPLACE",
    fr: {
      title: "Heeding — Marketplace de carburants durables",
      oneLiner: "Concevoir l’UX B2B de la transition énergétique européenne — transformer conformité, traçabilité et tarification en un produit réellement utilisable.",
      tags: ["Recherche UX", "Design System", "Climate-Tech"],
      study: {
        role: "Product Designer & consultant UX",
        timeline: "Mai – oct. 2026 · en cours",
        context:
          "Heeding est une plateforme propulsée par l’IA qui relie acheteurs de carburant, producteurs et fournisseurs de matières premières — mise en relation intelligente des offres, traçabilité au lot avec Proof of Sustainability vérifiable, conformité automatisée et reporting CO₂ du puits à la roue, sur six secteurs et trois modes d’achat.",
        problem:
          "Acheter du carburant durable conforme, c’est des semaines de paperasse entre FuelEU, ReFuelEU, RED III et TIRUERT — pour trois types d’acheteurs aux parcours totalement différents. Le problème de design : rendre la conformité invisible.",
        process: [
          {
            title: "Enquêter auprès de ceux qui achètent vraiment du carburant",
            body: "Entretiens et ateliers de segmentation avec transporteurs, fournisseurs de carburant et acheteurs publics ; chacun a eu sa propre carte de parcours de décision plutôt qu’un persona moyen.",
          },
          {
            title: "Des wireframes avec un KPI attaché",
            body: "Chaque écran est entré en lo-fi avec une intention de conversion explicite — ce que l’utilisateur doit décider ici, et comment on le mesure.",
          },
          {
            title: "Du hi-fi dans un système gouverné",
            body: "Maquettes de production bâties sur un design system co-gouverné avec le Product Owner, pour que la vélocité ne coûte jamais la cohérence.",
          },
          {
            title: "Mesurer, puis redessiner",
            body: "Tunnels acquisition → activation → rétention instrumentés sous GA4 et revus chaque semaine ; les enseignements repartaient directement dans le backlog design.",
          },
        ],
        decisions: [
          {
            title: "La conformité se génère, elle ne se demande pas",
            why: "Les utilisateurs ne remplissent pas de formulaires réglementaires — la plateforme produit les documents FuelEU/RED III/TIRUERT comme le reçu d’un achat normal. La partie la plus effrayante du domaine devient un non-événement.",
          },
          {
            title: "Trois modes d’achat, un seul modèle mental",
            why: "Spot, Récurrent et Appel d’offres partagent le même squelette comparer-décider-suivre : apprendre une voie les enseigne toutes les trois.",
          },
          {
            title: "Deux minutes d’essai avant tout engagement",
            why: "Le Diagnostic Flash donne une estimation d’économies et d’émissions sans inscription — la valeur avant l’identité, la séquence de confiance B2B en miniature.",
          },
        ],
        outcomes: [
          "Preuves produit : 80 % de temps gagné sur la gestion carburant · 100 % de traçabilité (métriques produit)",
          "Prototypes spécifiques livrés pour les trois segments d’acheteurs",
          "Le produit vise plus d’un milliard de tonnes de CO₂ évitées d’ici 2050",
        ],
        reflection:
          "La complexité d’un domaine est un cadeau pour un designer : quand la réglementation est l’UX du concurrent, la clarté devient le produit.",
        note: "Visuels sélectionnés uniquement — travail client ; parcours complets présentés lors d’un échange portfolio.",
      },
    },
    study: {
      role: "Product Designer & UX Consultant",
      timeline: "May – Oct 2026 · ongoing",
      context:
        "Heeding is an AI-powered platform connecting fuel buyers, producers and feedstock suppliers — smart offer matching, batch-level traceability with verifiable Proof of Sustainability, automated compliance and Well-to-Wheel CO₂ reporting, across six sectors and three purchase modes.",
      problem:
        "Buying compliant sustainable fuel means weeks of paperwork across FuelEU, ReFuelEU, RED III and TIRUERT — for three buyer types with completely different journeys. The design problem: make compliance invisible.",
      process: [
        {
          title: "Research with the people who actually buy fuel",
          body: "Stakeholder interviews and segmentation workshops with fleet operators, fuel suppliers and public-sector buyers; each got its own decision-journey map instead of one averaged persona.",
        },
        {
          title: "Wireframes with a KPI attached",
          body: "Every screen entered lo-fi with a stated conversion intent — what the user should decide here, and how we'd measure it.",
        },
        {
          title: "Hi-fi inside a governed system",
          body: "Production mock-ups built on a design system co-governed with the Product Owner, so velocity never cost consistency.",
        },
        {
          title: "Measure, then redesign",
          body: "GA4-instrumented acquisition → activation → retention funnels reviewed weekly; insights fed straight back into the design backlog.",
        },
      ],
      decisions: [
        {
          title: "Compliance is generated, never asked for",
          why: "Users don't fill regulatory forms — the platform produces FuelEU/RED III/TIRUERT paperwork as a receipt of a normal purchase. The scariest part of the domain became a non-event.",
        },
        {
          title: "Three purchase modes, one mental model",
          why: "Spot, Recurring and Tender share the same compare-decide-track skeleton, so learning one lane teaches all three.",
        },
        {
          title: "A two-minute ramp before any commitment",
          why: "The Flash Diagnostic gives a savings-and-emissions estimate with no signup — value before identity, the B2B trust sequence in miniature.",
        },
      ],
      outcomes: [
        "Platform proof points: 80% time saved on fuel management · 100% traceability (product metrics)",
        "Persona-specific prototypes shipped for all three buyer segments",
        "The product targets 1B+ tonnes of avoided CO₂ by 2050",
      ],
      reflection:
        "Deep domain complexity is a gift to a designer: when regulation is the competitor's UX, clarity itself becomes the product.",
      note: "Selected visuals only — client work; full flows available in a portfolio review call.",
    },
  },
  {
    slug: "lockai",
    title: "LockAI — Offline On-Device AI Assistant",
    tags: ["Product Strategy", "UX/UI", "Prototyping"],
    year: "2026",
    oneLiner:
      "Product strategy, UX and three live prototypes in one sprint — a privacy-first AI assistant that won the hackathon.",
    coverLabel: "LOCKAI",
    award: "🏆 1st Place",
    fr: {
      title: "LockAI — Assistant IA hors-ligne",
      oneLiner: "Stratégie produit, UX et trois prototypes en un sprint — un assistant IA priorisant la confidentialité, lauréat du hackathon.",
      tags: ["Stratégie produit", "UX/UI", "Prototypage"],
      study: {
        role: "Responsable produit & innovation IA",
        timeline: "Mars 2026 · sprint intensif",
        context:
          "UNBIAS Innovation Hackathon, cohorte ALPHA. Un sprint pour concevoir et défendre une entreprise IA de bout en bout — concept, modèle économique, produit, pitch.",
        problem:
          "Les gens veulent l’aide de l’IA sur leurs informations les plus sensibles — exactement celles qu’ils n’enverraient jamais dans le cloud. Comment concevoir un assistant dont la confidentialité se *ressent*, au lieu de se proclamer ?",
        process: [
          {
            title: "Le positionnement avant les pixels",
            body: "Proposition de valeur, logique de monétisation et cadre financier à trois ans d’abord — pour que chaque décision de design ait une raison commerciale d’exister.",
          },
          {
            title: "Un modèle d’interaction pour la confiance",
            body: "Une UX offline-first où l’état local est toujours visible : ce qui reste sur l’appareil est le message le plus fort de l’interface.",
          },
          {
            title: "Trois prototypes, une seule histoire",
            body: "Site concept, démo de workflow IA et implémentation commerciale — construits en direct, pour que le jury clique au lieu d’imaginer.",
          },
        ],
        decisions: [
          {
            title: "Le zéro-cloud comme état visible, pas comme note de bas de page",
            why: "Les promesses de confidentialité sont du papier peint ; un indicateur permanent d’exécution locale rend la promesse inspectable à tout moment.",
          },
          {
            title: "Un pitch qui démontre",
            why: "Dérouler l’architecture, le parcours utilisateur et l’économie unitaire en direct à l’écran a transformé une affirmation en preuve.",
          },
        ],
        outcomes: [
          "🏆 1re place — Sophia Antipolis Innovation Hackathon",
          "Trois sites prototypes fonctionnels livrés pendant le sprint",
        ],
        reflection:
          "La contrainte est un accélérateur : avec des jours au lieu de mois, seules les décisions qui servent l’histoire survivent.",
      },
    },
    study: {
      role: "Product & AI Innovation Lead",
      timeline: "March 2026 · intensive sprint",
      context:
        "UNBIAS Innovation Hackathon, ALPHA cohort. One sprint to design and defend an AI venture end to end — concept, business model, product, pitch.",
      problem:
        "People want AI help with their most sensitive information — exactly the information they'd never send to a cloud. How do you design an assistant whose privacy is *felt*, not just claimed?",
      process: [
        {
          title: "Position before pixels",
          body: "Value proposition, monetisation logic and a three-year financial framework first — so every design decision had a commercial reason to exist.",
        },
        {
          title: "An interaction model for trust",
          body: "Offline-first UX where the on-device state is always visible: what stays local is the interface's loudest message.",
        },
        {
          title: "Three prototypes, one story",
          body: "Concept site, AI-workflow demo and commercial implementation — built live, so the jury clicked instead of imagining.",
        },
      ],
      decisions: [
        {
          title: "Zero-cloud as a visible state, not a footnote",
          why: "Privacy claims are wallpaper; a persistent on-device indicator makes the promise inspectable at all times.",
        },
        {
          title: "Demo-first pitch",
          why: "Walking the jury through architecture, user flow and unit economics live on screen turned a claim into evidence.",
        },
      ],
      outcomes: [
        "🏆 1st place — Sophia Antipolis Innovation Hackathon",
        "Three functional prototype websites shipped inside the sprint",
      ],
      reflection:
        "Constraints are a forcing function: with days instead of months, only decisions that serve the story survive.",
    },
  },
  {
    slug: "price-intelligence",
    title: "Supply-Chain Price Intelligence",
    tags: ["Data-Product Design", "Power BI", "KPI Design"],
    year: "2025",
    oneLiner:
      "Designing complex data into decisions — a price-intelligence dashboard non-technical users actually use.",
    coverLabel: "PRICE INTELLIGENCE",
    fr: {
      title: "Intelligence tarifaire de la chaîne logistique",
      oneLiner: "Transformer des données complexes en décisions — un tableau de bord que les profils non techniques utilisent vraiment.",
      tags: ["Design de produit data", "Power BI", "Design de KPI"],
      study: {
        role: "Designer de produit data",
        timeline: "2025 · projet portfolio",
        context:
          "Un tableau de bord analytique en temps réel qui suit et compare les prix produits entre pays pour soutenir la planification logistique et la stratégie tarifaire — construit sous Power BI sur des API REST.",
        problem:
          "La donnée existait ; les décisions non. La comparaison de prix multi-pays vivait dans des tableurs que seul un analyste pouvait aimer — le problème de design était de rendre l’intelligence marché lisible pour des planificateurs non techniques.",
        process: [
          {
            title: "La hiérarchie de KPI avant les visuels",
            body: "Définir ce qu’un planificateur doit savoir en 5 secondes, 30 secondes et 5 minutes — les trois altitudes du tableau de bord — avant de choisir le moindre graphique.",
          },
          {
            title: "Filtrage progressif",
            body: "Des filtres multi-dimensionnels qui resserrent de la région au produit sans jamais perdre le contexte de comparaison.",
          },
          {
            title: "Des encodages pour balayer, pas pour étudier",
            body: "Comparaisons en barres alignées et en écarts, jamais en camemberts ; anomalies remontées d’avance plutôt que cherchées.",
          },
        ],
        decisions: [
          {
            title: "Des tuiles avant des tableaux",
            why: "La réponse en 5 secondes vit dans les tuiles de KPI ; la preuve vit en dessous. La plupart des sessions n’ouvrent jamais le tableau — et c’est précisément le cas de succès.",
          },
          {
            title: "La comparaison comme vue par défaut",
            why: "Personne n’ouvre un outil de prix pour voir un seul prix. Le premier écran répond à « où est-ce moins cher, et de combien ? »",
          },
        ],
        outcomes: [
          "Un fouillis tarifaire multi-sources devenu des décisions au premier coup d’œil",
          "Des visualisations interactives utilisables par des gens qui n’écriront jamais une requête",
        ],
        reflection:
          "Le design de tableau de bord est du design d’interface avec l’exigence d’honnêteté la plus dure : chaque pixel sert une décision ou en cache une.",
      },
    },
    study: {
      role: "Data-Product Designer",
      timeline: "2025 · portfolio project",
      context:
        "A real-time analytics dashboard tracking and comparing product prices across countries to support logistics planning and pricing strategy — built in Power BI over REST APIs.",
      problem:
        "The data existed; the decisions didn't. Multi-country price comparison lived in spreadsheets only an analyst could love — the design problem was making market intelligence legible to non-technical planners.",
      process: [
        {
          title: "KPI hierarchy before visuals",
          body: "Decided what a planner must know in 5 seconds, 30 seconds and 5 minutes — the dashboard's three altitudes — before choosing a single chart.",
        },
        {
          title: "Progressive filtering",
          body: "Multi-dimensional filters that narrow from region to product without ever losing the comparison context.",
        },
        {
          title: "Encodings for scanning, not studying",
          body: "Comparisons as aligned bars and deltas, never pie charts; anomalies pre-surfaced instead of hunted for.",
        },
      ],
      decisions: [
        {
          title: "Tiles before tables",
          why: "The 5-second answer lives in KPI tiles; the evidence lives underneath. Most sessions never need the table — and that's the success case.",
        },
        {
          title: "Comparison is the default view",
          why: "No one opens a price tool to see one price. The first screen answers 'where is it cheaper, and by how much?'",
        },
      ],
      outcomes: [
        "A multi-source pricing mess became decisions at a glance",
        "Interactive visualisations usable by people who will never write a query",
      ],
      reflection:
        "Dashboard design is interface design with the hardest honesty requirement: every pixel either helps a decision or hides one.",
    },
  },
  {
    slug: "workflow-automation",
    title: "Sales & Marketing Automation System",
    tags: ["Service Design", "Systems", "n8n"],
    year: "2025",
    oneLiner:
      "Designing the invisible product — automated workflows that removed manual effort across an entire funnel.",
    coverLabel: "AUTOMATION SYSTEM",
    fr: {
      title: "Système d’automatisation ventes & marketing",
      oneLiner: "Concevoir le produit invisible — des workflows automatisés qui suppriment le travail manuel sur tout le tunnel.",
      tags: ["Design de service", "Systèmes", "n8n"],
      study: {
        role: "Designer de service & de systèmes",
        timeline: "2025 · projet portfolio",
        context:
          "Une automatisation de bout en bout sur les ventes, le marketing et les opérations — pipelines de génération de leads, mises à jour CRM, tableaux de bord de reporting et flux de distribution de contenu, sur n8n, Zapier et des intégrations REST.",
        problem:
          "Un tunnel plein de gens compétents faisant un travail de robot : copier des leads, mettre à jour des champs, assembler le même rapport hebdomadaire. Le problème relevait du design de service — où le jugement humain apporte-t-il vraiment de la valeur, et que doit-on faire disparaître ?",
        process: [
          {
            title: "Cartographier d’abord le processus humain",
            body: "Avant toute automatisation, le workflow existant a été cartographié de bout en bout — chaque passation, temps d’attente et copier-coller identifié comme candidat.",
          },
          {
            title: "Automatiser les passations, garder le jugement",
            body: "Les flux ont été dessinés autour des points de décision : les machines déplacent l’information entre les décisions ; les humains les prennent.",
          },
          {
            title: "Concevoir les états d’échec",
            body: "Chaque flux a reçu un état observable et un chemin d’échec compréhensible par un responsable non technique — une automatisation qu’on ne peut pas inspecter est une automatisation à laquelle on ne peut pas se fier.",
          },
        ],
        decisions: [
          {
            title: "Invisible jusqu’à la panne — puis bruyant",
            why: "Le succès, c’est le silence ; les échecs alertent avec du contexte. L’inverse — succès bruyant, échec silencieux — est la façon dont meurent les automatisations.",
          },
          {
            title: "Des flux documentés en schémas, pas en code",
            why: "Le système ne survit à son auteur que si la personne suivante sait le lire.",
          },
        ],
        outcomes: [
          "Effort manuel nettement réduit sur l’ensemble du tunnel",
          "Génération de leads, hygiène CRM, reporting et distribution automatisés et autonomes",
        ],
        reflection:
          "La meilleure interface pour un travail répétitif est l’absence d’interface — mais bien concevoir « rien » demande la même rigueur que concevoir des écrans.",
      },
    },
    study: {
      role: "Service & Systems Designer",
      timeline: "2025 · portfolio project",
      context:
        "End-to-end automation across sales, marketing and operations — lead-generation pipelines, CRM updates, reporting dashboards and content-distribution flows, built on n8n, Zapier and REST integrations.",
      problem:
        "A funnel full of competent people doing robot work: copying leads, updating fields, assembling the same weekly report. The design problem was a service-design one — where does human judgment actually add value, and what should disappear?",
      process: [
        {
          title: "Map the human process first",
          body: "Before any automation, the existing workflow was mapped end to end — every handoff, wait state and copy-paste surfaced as a candidate.",
        },
        {
          title: "Automate handoffs, keep judgment",
          body: "Flows were drawn around decision points: machines move information between decisions; people make them.",
        },
        {
          title: "Design the failure states",
          body: "Every flow got an observable state and a failure path a non-technical owner could understand — automation you can't inspect is automation you can't trust.",
        },
      ],
      decisions: [
        {
          title: "Invisible until it breaks — then loud",
          why: "Success is silence; failures alert with context. The inverse (noisy success, silent failure) is how automations die.",
        },
        {
          title: "Flows documented as diagrams, not code",
          why: "The system outlives its author only if the next person can read it.",
        },
      ],
      outcomes: [
        "Materially reduced manual effort across the funnel",
        "Automated lead-gen, CRM hygiene, reporting and distribution running unattended",
      ],
      reflection:
        "The best interface for repetitive work is no interface — but designing 'nothing' well takes the same rigor as designing screens.",
    },
  },
  {
    slug: "flash-diagnostic",
    title: "Heeding — Flash Diagnostic",
    tags: ["Conversion Design", "UX", "B2B"],
    year: "2026",
    oneLiner:
      "A two-minute fuel-strategy evaluation that turns cold visitors into qualified leads — conversion design at its most distilled.",
    coverLabel: "FLASH DIAGNOSTIC",
    fr: {
      title: "Heeding — Diagnostic Flash",
      oneLiner: "Une évaluation de stratégie carburant en deux minutes qui transforme des visiteurs froids en prospects qualifiés.",
      tags: ["Design de conversion", "UX", "B2B"],
      study: {
        role: "Design de conversion & UX (au sein de la mission Heeding)",
        timeline: "2026",
        context:
          "Le site marketing de Heeding avait besoin d’une entrée de tunnel qui ne demande pas à des visiteurs B2B froids de réserver une démo avec un inconnu.",
        problem:
          "Les acheteurs d’énergie ne confient pas leurs coordonnées à une plateforme qu’ils connaissent depuis quatre-vingt-dix secondes. La demande devait devenir une offre.",
        process: [
          {
            title: "Inverser l’échange de valeur",
            body: "Au lieu de « donnez votre e-mail pour en savoir plus », le diagnostic livre d’abord une estimation d’économies et d’émissions — deux minutes, sans engagement.",
          },
          {
            title: "Écrire les questions comme une conversation",
            body: "Secteur, profil de flotte, dépense carburant actuelle — chaque étape formulée dans les mots de l’acheteur, avec une progression toujours visible.",
          },
          {
            title: "Atterrir sur un chiffre, pas sur une brochure",
            body: "L’écran de résultat commence par l’estimation du visiteur ; l’argumentaire plateforme vient derrière.",
          },
        ],
        decisions: [
          {
            title: "La valeur avant l’identité",
            why: "L’estimation s’affiche avant toute demande de contact — la conversation démarre sur une preuve, pas sur de la persuasion.",
          },
          {
            title: "Deux minutes, annoncées d’emblée",
            why: "Une durée promise et honnête est le signal de confiance le moins cher qui soit.",
          },
        ],
        outcomes: [
          "Le diagnostic est le principal chemin de conversion du site (« Lancer le Diagnostic Flash »)",
          "Le trafic froid se transforme en conversations qualifiées et documentées",
        ],
        reflection:
          "Le design de conversion ne consiste pas à piéger les gens dans des formulaires — mais à séquencer la valeur pour que le formulaire paraisse juste.",
        note: "Travail client — parcours sélectionnés uniquement.",
      },
    },
    study: {
      role: "Conversion & UX Design (within the Heeding engagement)",
      timeline: "2026",
      context:
        "Heeding's marketing site needed a top-of-funnel entry that didn't ask cold B2B visitors to book a demo with a stranger.",
      problem:
        "Energy buyers won't hand contact details to a platform they've known for ninety seconds. The ask had to become an offer.",
      process: [
        {
          title: "Reverse the value exchange",
          body: "Instead of 'give us your email to learn more', the diagnostic gives a savings-and-emissions estimate first — two minutes, no commitment.",
        },
        {
          title: "Design the questions like a conversation",
          body: "Sector, fleet profile, current fuel spend — each step framed in the buyer's words, with progress always visible.",
        },
        {
          title: "Land on a number, not a brochure",
          body: "The result screen leads with the visitor's own estimate; the platform pitch rides behind it.",
        },
      ],
      decisions: [
        {
          title: "Value before identity",
          why: "The estimate renders before any contact request — the conversation starts from proof, not persuasion.",
        },
        {
          title: "Two minutes, stated up front",
          why: "A promised, honest time-box is the cheapest trust signal there is.",
        },
      ],
      outcomes: [
        "The diagnostic is the site's primary conversion path ('Run the Flash Diagnostic')",
        "Cold traffic converts into qualified, context-rich conversations",
      ],
      reflection:
        "Conversion design isn't tricking people into forms — it's sequencing value so the form feels fair.",
      note: "Client work — selected flows only.",
    },
  },
  {
    slug: "oigetit-hitl",
    title: "Oigetit — The UX of AI Trust",
    tags: ["Responsible AI", "UX Writing", "Validation"],
    year: "2025",
    oneLiner:
      "Making an AI misinformation filter explainable — trust as a design material.",
    coverLabel: "AI TRUST UX",
    fr: {
      title: "Oigetit — L’UX de la confiance en l’IA",
      oneLiner: "Rendre explicable un filtre anti-désinformation — la confiance comme matière de design.",
      tags: ["IA responsable", "UX writing", "Validation"],
      study: {
        role: "Analyste IA avec humain dans la boucle",
        timeline: "Janv. – mai 2025 · à distance (Los Gatos, USA)",
        context:
          "Oigetit filtre les fausses informations avec un moteur de scoring IA. J’étais dans la boucle — validation des prédictions, chasse aux cas limites, et traduction de la machine pour les humains qu’elle sert.",
        problem:
          "Un modèle juste que personne ne comprend est un modèle auquel on ne fait pas confiance. Le travail avait deux faces : rendre l’IA plus juste, et rendre sa justesse lisible.",
        process: [
          {
            title: "Valider aux frontières",
            body: "Reconnaissance systématique de motifs dans les erreurs de classification — ironie, vérités partielles, blanchiment de sources — réinjectée pour renforcer le pipeline.",
          },
          {
            title: "Traduire le moteur",
            body: "Réécriture de la façon dont le moteur de vérification s’explique : un langage simplifié, orienté utilisateur, sur les raisons d’un score.",
          },
        ],
        decisions: [
          {
            title: "Des explications dans la langue du lecteur",
            why: "« Confiance : 0,82 » ne convainc personne ; « plusieurs sources indépendantes confirment l’affirmation centrale », si.",
          },
        ],
        outcomes: [
          "Précision de classification améliorée par l’identification de motifs récurrents",
          "Contribution aux initiatives d’IA responsable et digne de confiance",
        ],
        reflection:
          "Les produits IA sont des produits de confiance. L’interface entre un modèle et une personne vaut exactement ce que vaut son explication.",
      },
    },
    study: {
      role: "Human-in-the-Loop AI Analyst",
      timeline: "Jan – May 2025 · remote (Los Gatos, USA)",
      context:
        "Oigetit filters fake news with an AI scoring engine. I sat in the loop — validating predictions, hunting edge cases, and explaining the machine to the humans it serves.",
      problem:
        "An accurate model nobody understands is an untrusted model. The work was double-sided: make the AI more right, and make its rightness legible.",
      process: [
        {
          title: "Validate at the edges",
          body: "Systematic pattern recognition across misclassifications — sarcasm, partial truths, source laundering — fed back to strengthen the pipeline.",
        },
        {
          title: "Translate the engine",
          body: "Rewrote how the verification engine explains itself: simplified, user-facing language for why an article scores the way it does.",
        },
      ],
      decisions: [
        {
          title: "Explanations in the reader's language",
          why: "'Confidence: 0.82' persuades no one; 'multiple independent sources confirm the core claim' does.",
        },
      ],
      outcomes: [
        "Improved AI classification accuracy through recurring-pattern identification",
        "Contributed to Responsible AI / Trustworthy AI initiatives",
      ],
      reflection:
        "AI products are trust products. The interface between a model and a person is exactly as strong as its explanation.",
    },
  },
  {
    slug: "seo-growth",
    title: "Portfolio-Wide Web Performance",
    tags: ["CRO", "Analytics", "Web"],
    year: "2025",
    oneLiner:
      "35% organic growth across a client portfolio — design decisions driven by measurement.",
    coverLabel: "GROWTH & CRO",
    fr: {
      title: "Performance web du portefeuille",
      oneLiner: "+35 % de croissance organique sur un portefeuille client — des décisions de design guidées par la mesure.",
      tags: ["CRO", "Analytics", "Web"],
      study: {
        role: "SEO & performance web",
        timeline: "Janv. – avr. 2025 · Site Web & Co, Montpellier",
        context:
          "Le portefeuille de sites clients B2B et B2C d’une agence digitale, audité et optimisé avec Google Analytics, Search Console et la recherche de mots-clés.",
        problem:
          "De beaux sites que personne ne trouvait, des gabarits qui perdaient du trafic — l’écart entre l’allure des pages et leur performance était invisible pour leurs propriétaires.",
        process: [
          {
            title: "Auditer ce qui se positionne réellement",
            body: "Audits de performance web et SEO sur tout le portefeuille ; les gabarits les plus fréquentés ont vu leur architecture de métadonnées et leur maillage interne refaits en premier.",
          },
          {
            title: "Corriger au niveau du gabarit",
            body: "Une correction de gabarit se propage à des centaines de pages — l’effet de levier bat le perfectionnisme page par page.",
          },
          {
            title: "Rapporter pour que le client agisse",
            body: "Des tableaux de bord mensuels traduisant l’analytics en prochaines actions, pas en graphiques.",
          },
        ],
        decisions: [
          {
            title: "Le SEO technique avant le SEO éditorial",
            why: "Le contenu ne sauve pas un gabarit que les moteurs peinent à analyser ; les fondations d’abord.",
          },
        ],
        outcomes: ["+35 % de trafic organique sur le portefeuille géré"],
        reflection:
          "Le travail de croissance m’a donné l’habitude que j’apporte à chaque design : livrer, mesurer, et laisser les chiffres argumenter.",
      },
    },
    study: {
      role: "SEO & Web Performance",
      timeline: "Jan – Apr 2025 · Site Web & Co, Montpellier",
      context:
        "A digital agency's portfolio of B2B and B2C client sites, audited and optimised with Google Analytics, Search Console and keyword research.",
      problem:
        "Beautiful sites nobody found, templates that leaked traffic — the gap between how pages looked and how they performed was invisible to their owners.",
      process: [
        {
          title: "Audit what actually ranks",
          body: "Web-performance and SEO audits across the portfolio; the highest-traffic templates got their meta architecture and internal-linking logic rebuilt first.",
        },
        {
          title: "Fix at the template level",
          body: "One template fix propagates to hundreds of pages — leverage beats page-by-page perfectionism.",
        },
        {
          title: "Report so clients act",
          body: "Monthly dashboards translated analytics into next actions, not charts.",
        },
      ],
      decisions: [
        {
          title: "Technical SEO before content SEO",
          why: "Content can't rescue a template that search engines struggle to parse; foundations first.",
        },
      ],
      outcomes: ["35% organic-traffic growth across the managed portfolio"],
      reflection:
        "Growth work taught me the habit I bring to every design: ship, measure, and let the numbers argue.",
    },
  },
  {
    slug: "portfolio-v1",
    title: "This Portfolio — Designed First",
    tags: ["Figma", "Design Process", "Frontend"],
    year: "2026",
    oneLiner:
      "The site you're on — designed in Figma, documented like a product, built with a governed design system.",
    coverLabel: "PORTFOLIO",
    fr: {
      title: "Ce portfolio — conçu d’abord",
      oneLiner: "Le site que vous parcourez — conçu sur Figma, documenté comme un produit, bâti sur un design system gouverné.",
      tags: ["Figma", "Processus de design", "Frontend"],
      study: {
        role: "Designer & développeur",
        timeline: "2026 · vous y êtes",
        context:
          "Ce portfolio a été mené comme un produit client : plan directeur, design system, spécification UX & interactions, stratégie de contenu et feuille de route de développement par phases — écrits avant le premier composant.",
        problem:
          "Un portfolio qui revendique une compétence de design subit un test impitoyable : lui-même. Il devait démontrer simultanément le soin de l’interaction, le jugement du mouvement et la rigueur d’ingénierie — sans devenir un parc d’attractions à effets.",
        process: [
          {
            title: "La documentation avant les pixels",
            body: "Six documents de cadrage ont défini la vision, les tokens, la grammaire de mouvement et les phases de build — la même discipline qu’une mission client.",
          },
          {
            title: "Une seule langue d’interaction",
            body: "Un standard de bouton unique, une grammaire de révélation, une couleur d’accent. Chaque composant de référence a été reconstruit dans le système, jamais collé.",
          },
          {
            title: "Section par section, vérifiée",
            body: "Chaque section a passé des points de contrôle : chevauchements, parcours en mouvement réduit, replis mobiles, budgets d’animation sur GPU uniquement.",
          },
        ],
        decisions: [
          {
            title: "Reconstruire les références, ne pas les réutiliser",
            why: "Spirale, tunnel, deck, mur dérivant — le moteur de chaque référence a été étudié puis réimplémenté dans nos tokens, pour que le site paraisse écrit et non assemblé.",
          },
          {
            title: "Toile blanche, un seul vermillon",
            why: "La retenue est le différenciateur : un accent unique sur blanc pur fait de chaque usage de la couleur une décision.",
          },
        ],
        outcomes: [
          "Neuf sections, quatre séquences pilotées au scroll, un design system",
          "L’étude de cas que vous êtes en train de lire",
        ],
        reflection:
          "Concevoir son propre portfolio, c’est négocier avec son client le plus exigeant. Les documents ont gagné la plupart des arguments.",
      },
    },
    study: {
      role: "Designer & Developer",
      timeline: "2026 · you are here",
      context:
        "This portfolio was run like a client product: master plan, design system, UX & interaction spec, content strategy and a phased development roadmap — written before the first component.",
      problem:
        "A portfolio that claims design skill has one unforgiving test: itself. It had to demonstrate interaction craft, motion judgment and engineering care simultaneously — without becoming a theme-park of effects.",
      process: [
        {
          title: "Documentation before pixels",
          body: "Six planning documents defined the vision, tokens, motion grammar and build phases — the same discipline as a product engagement.",
        },
        {
          title: "One interaction language",
          body: "A single Button standard, one reveal grammar, one accent color. Every reference component was rebuilt from scratch into the system, never pasted in.",
        },
        {
          title: "Section by section, verified",
          body: "Each section shipped against review gates: overlap checks, reduced-motion paths, mobile fallbacks, GPU-only animation budgets.",
        },
      ],
      decisions: [
        {
          title: "Rebuild references, don't reuse them",
          why: "Spiral, tunnel, deck, drift-wall — each reference's engine was studied and re-implemented inside our tokens, so the site feels authored, not assembled.",
        },
        {
          title: "White canvas, one vermilion",
          why: "Restraint is the differentiator: a single accent on pure white makes every use of color a decision.",
        },
      ],
      outcomes: [
        "Nine sections, four scroll-driven set pieces, one design system",
        "The case study you're reading right now",
      ],
      reflection:
        "Designing your own portfolio is negotiating with your harshest client. The documents won most arguments.",
    },
  },
];
