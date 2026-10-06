export interface Profile {
  email: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  instagram: string;
  image: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: number;
  category: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  link_url: string | null;
  status?: 'completed' | 'in-development';
  metadata?: {
    technologies?: string[];
  };
}

export interface CreationItem {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
}

export interface OnlineItem {
  id: string;
  label: string;
  description: string;
  url: string;
  icon: 'store' | 'facebook' | 'instagram' | 'linkedin' | 'github';
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  items: string[];
}

export interface ExpertiseItem {
  index: string;
  title: string;
  techs: string[];
  icon: 'code' | 'palette' | 'spark' | 'pen';
}

export interface HeroQuote {
  line1: string;
  line2: string;
}

export const NAV_LINKS: [string, string][] = [
  ['À propos', 'about'],
  ['Projets', 'projects'],
  ['Création visuelle', 'creation'],
  ['Services', 'services'],
  ['Expertise', 'expertise'],
  ['Contact', 'contact'],
];

export const HERO_QUOTES: HeroQuote[] = [
  { line1: "L’idée juste.", line2: "Exécutée avec éclat." },
  { line1: "Le détail compte.", line2: "La différence aussi." },
  { line1: "Conçu pour marquer.", line2: "Pensé pour durer." },
  { line1: "Peu de bruit.", line2: "Beaucoup d’impact." },
  { line1: "La forme rassure.", line2: "Le fond convainc." },
  { line1: "Clair dans l’intention.", line2: "Net dans l’exécution." },
  { line1: "L’élégance en action.", line2: "La précision en preuve." },
  { line1: "Chaque pixel engage.", line2: "Chaque choix élève." },
  { line1: "Sobre en surface.", line2: "Puissant en profondeur." },
  { line1: "La vision d’abord.", line2: "L’excellence partout." },
  { line1: "Raffiné par nature.", line2: "Fiable par conception." },
  { line1: "Le beau, utile.", line2: "Le simple, remarquable." },
  { line1: "Des idées nettes.", line2: "Une présence forte." },
  { line1: "L’impact sans excès.", line2: "La maîtrise sans bruit." },
  { line1: "Pensé avec rigueur.", line2: "Livré avec style." },
  { line1: "Une direction claire.", line2: "Un résultat rare." },
  { line1: "Minimal dans le trait.", line2: "Maximum dans l’effet." },
  { line1: "L’exigence se voit.", line2: "La qualité se sent." },
  { line1: "Créer avec justesse.", line2: "Signer avec confiance." },
  { line1: "Une esthétique précise.", line2: "Une exécution irréprochable." }
];

export const PROFILE: Profile = {
  email: "biampikadaniel@gmail.com",
  phone: "+242 06 945 7200",
  phoneHref: "tel:+242069457200",
  whatsapp: "https://wa.me/242069457200",
  github: "https://github.com/biampikadaniel",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  image: "https://res.cloudinary.com/u5jzbjfc/image/upload/v1787583522/3fa369b8-41b5-4c4f-a1cf-b233dd3250b2.png",
  description: "Je suis Daniel Biampika — parfois écrit Daniel Bimpika — développeur web et designer basé à Brazzaville. J’allie stratégie, direction artistique et technologie pour créer des expériences digitales distinctives, utiles et mémorables. Passionné par le développement web, l’intelligence artificielle, le design UI/UX et la création digitale, j’apprends en continu et je développe des projets personnels ambitieux."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Développement Web",
    skills: ["Création de sites web", "HTML", "CSS", "JavaScript — débutant"]
  },
  {
    category: "Design & Création",
    skills: ["Web design", "Infographie", "Design graphique", "Figma", "PowerPoint"]
  },
  {
    category: "IA",
    skills: ["Création avec l’IA", "Prompt Engineering"]
  },
  {
    category: "Bureautique",
    skills: ["Microsoft Word", "Microsoft Excel", "Outils bureautiques"]
  },
  {
    category: "Outils & Versioning",
    skills: ["Git"]
  }
];

export const ALL_SKILLS = SKILL_CATEGORIES.flatMap(i => i.skills);

export const PROJECTS: Project[] = [
  {
    id: 101,
    category: "project",
    slug: "codenova-learning",
    title: "CODE NOVA Learning",
    subtitle: "Éducation · Code & Tech",
    description: "Plateforme interactive d'apprentissage du code et du développement web.",
    image_url: "/images/projects/codenova-learning.jpg",
    link_url: "https://codenova-learning-henna.vercel.app/",
    status: "completed",
    metadata: { technologies: ["React", "Learning UI", "Éducation"] }
  },
  {
    id: 102,
    category: "project",
    slug: "mada-voyage",
    title: "MadaVoyage",
    subtitle: "Tourisme · Circuits à Madagascar",
    description: "Circuits accompagnés et expériences de voyage sur-mesure à Madagascar.",
    image_url: "/images/projects/mada-voyage.jpg",
    link_url: "https://madavoyage.vercel.app/",
    status: "completed",
    metadata: { technologies: ["React", "Tourisme", "Voyages"] }
  },
  {
    id: 103,
    category: "project",
    slug: "garagiste",
    title: "Garage Urbain Premium",
    subtitle: "Automobile · Garage & Services",
    description: "Garage Urbain Premium : entretien, diagnostic et réparation automobile à Antananarivo.",
    image_url: "/images/projects/garagiste.jpg",
    link_url: "https://garagiste-zeta.vercel.app/",
    status: "completed",
    metadata: { technologies: ["React", "Automobile", "Services"] }
  },
  {
    id: 104,
    category: "project",
    slug: "batit-diaspora",
    title: "Bati Diaspora",
    subtitle: "BTP · Construction Diaspora",
    description: "Accompagnement et suivi rigoureux de projets de construction immobilière pour la diaspora.",
    image_url: "/images/projects/batit-diaspora.jpg",
    link_url: "https://batit-diasporat.vercel.app/",
    status: "completed",
    metadata: { technologies: ["React", "BTP", "Immobilier"] }
  },
  {
    id: 105,
    category: "project",
    slug: "arcada-cyclea",
    title: "Cyclea",
    subtitle: "Santé · Bien-être féminin",
    description: "Cyclea : comprendre son cycle menstruel et mieux écouter son corps au quotidien.",
    image_url: "/images/projects/arcada-cyclea.jpg",
    link_url: "https://tc6o9q-3ri946jwl-arcadawebapps9.vercel.app/",
    status: "in-development",
    metadata: { technologies: ["React", "FemTech", "Santé"] }
  },
  {
    id: 106,
    category: "project",
    slug: "nexa-workspace",
    title: "Nexa Intelligent Workspace",
    subtitle: "SaaS · Workspace Intelligent",
    description: "L'avantage décisif des entreprises : gestion d'équipe, tâches et workflows intelligents.",
    image_url: "/images/projects/nexa-workspace.jpg",
    link_url: "https://nexa-intelligent-workspac-zbwu.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "SaaS", "IA UI"] }
  },
  {
    id: 107,
    category: "project",
    slug: "arcada-codenova",
    title: "CODE NOVA Platform",
    subtitle: "Éducation · Apprentissage du Code",
    description: "Plateforme numérique d'apprentissage pratique du développement web et du code.",
    image_url: "/images/projects/arcada-codenova.jpg",
    link_url: "https://n89mfu-k722v8t2x-arcadawebapps5.vercel.app/",
    status: "in-development",
    metadata: { technologies: ["React", "Éducation", "Code"] }
  },
  {
    id: 108,
    category: "project",
    slug: "arcada-nova-gestion",
    title: "NOVA Gestion",
    subtitle: "SaaS · Management d'Entreprise",
    description: "Pilotez votre activité professionnelle au quotidien avec clarté, efficacité et sérénité.",
    image_url: "/images/projects/arcada-nova-gestion.jpg",
    link_url: "https://lytj3r-dne49163v-arcadawebapps9.vercel.app/",
    status: "in-development",
    metadata: { technologies: ["React", "Dashboard", "Gestion"] }
  },
  {
    id: 109,
    category: "project",
    slug: "arcada-invita",
    title: "INVITA",
    subtitle: "Événementiel · Invitations RSVP",
    description: "Création d'invitations numériques haut de gamme et gestion automatisée des réponses RSVP.",
    image_url: "/images/projects/arcada-invita.jpg",
    link_url: "https://ksrzts-eneiq6q53-arcadawebapps9.vercel.app/",
    status: "in-development",
    metadata: { technologies: ["React", "RSVP", "Événementiel"] }
  },
  {
    id: 110,
    category: "project",
    slug: "ruben-elenga",
    title: "Ruben Elenga",
    subtitle: "Musique · Pianiste Gospel",
    description: "Univers musical et portfolio artistique de Ruben Elenga, pianiste Gospel et serviteur de Dieu.",
    image_url: "/images/projects/ruben-elenga.jpg",
    link_url: "https://ruben-elenga.vercel.app/",
    status: "completed",
    metadata: { technologies: ["React", "Portfolio", "Musique"] }
  },
  {
    id: 111,
    category: "project",
    slug: "nova-code",
    title: "NOVA Code Academy",
    subtitle: "Formation · Développement Web",
    description: "Apprenez à coder et développez vos projets web grâce à des cours interactifs et guidés.",
    image_url: "/images/projects/nova-code.jpg",
    link_url: "https://mclszo.vercel.app/",
    status: "in-development",
    metadata: { technologies: ["React", "Formation", "Code"] }
  },
  {
    id: 112,
    category: "project",
    slug: "maman-plus",
    title: "MAMAN+",
    subtitle: "Santé · Maternité & Bien-être",
    description: "Plateforme de santé et conseils dédiée au bien-être de la maman, de la grossesse et du bébé.",
    image_url: "/images/projects/maman-plus.jpg",
    link_url: "https://maman-plus-maternite-sante.vercel.app/",
    status: "completed",
    metadata: { technologies: ["React", "HealthTech", "Maternité"] }
  },
  {
    id: 113,
    category: "project",
    slug: "junior-france-ngakosso",
    title: "Junior France Mavie Ngakosso",
    subtitle: "Culture · Écrivain & Auteur",
    description: "Portfolio officiel et vitrine littéraire présentant les romans, scénarios et projets de l'auteur.",
    image_url: "/images/projects/junior-france-ngakosso.jpg",
    link_url: "https://juniorfrancemavie-ngakosso.vercel.app/",
    status: "completed",
    metadata: { technologies: ["React", "Portfolio", "Écriture"] }
  },
  {
    id: 114,
    category: "project",
    slug: "luxoria",
    title: "LUXORIA",
    subtitle: "High-Tech · Consoles & Luxe",
    description: "E-commerce d'exception spécialisé dans le high-tech premium et les consoles de jeu de luxe.",
    image_url: "/images/projects/luxoria.jpg",
    link_url: "https://luxoria-kappa.vercel.app/",
    status: "completed",
    metadata: { technologies: ["React", "E-commerce", "Luxe"] }
  },
  {
    id: 115,
    category: "project",
    slug: "naya-invitations",
    title: "Naya Invitations",
    subtitle: "Événementiel · Invitations Prestiges",
    description: "Des invitations virtuelles sur-mesure et élégantes qui rassemblent vos proches.",
    image_url: "/images/projects/naya-invitations.jpg",
    link_url: "https://naya-invitations-bui5.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "Design", "Invitations"] }
  },
  {
    id: 116,
    category: "project",
    slug: "koumou-hospitality",
    title: "KOUMOU Hospitality",
    subtitle: "Hôtellerie · Management & Services",
    description: "Plateforme intelligente de gestion hôtelière pour optimiser l'accueil et le séjour client.",
    image_url: "/images/projects/koumou-hospitality.jpg",
    link_url: "https://9np49d-rig8ed52c-intelligence-agentic-models.vercel.app/",
    status: "in-development",
    metadata: { technologies: ["React", "Hospitality", "SaaS"] }
  },
  {
    id: 117,
    category: "project",
    slug: "plenia-budget",
    title: "Plenia",
    subtitle: "Finance · Budget & Projets",
    description: "Solution moderne de gestion budgétaire et de suivi financier pour projets ambitieux.",
    image_url: "/images/projects/plenia-budget.jpg",
    link_url: "https://plenia-budget-projets-wjlp.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "Finance", "Budget"] }
  },
  {
    id: 118,
    category: "project",
    slug: "nova-gestion-3meo",
    title: "Nova Gestion",
    subtitle: "SaaS · Gestion d'Entreprise",
    description: "Espace professionnel pour piloter votre entreprise au quotidien en toute confiance.",
    image_url: "/images/projects/nova-gestion-3meo.jpg",
    link_url: "https://nova-gestion-3meo.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "SaaS", "Dashboard"] }
  },
  {
    id: 119,
    category: "project",
    slug: "batistock-construction",
    title: "BâtiStock",
    subtitle: "BTP · Gestion de Chantiers",
    description: "Application professionnelle pour la gestion des stocks et matériels de construction.",
    image_url: "/images/projects/batistock-construction.jpg",
    link_url: "https://batistock-construction-3o95.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "BTP", "Logistique"] }
  },
  {
    id: 120,
    category: "project",
    slug: "planiqo-rendezvous",
    title: "Planify",
    subtitle: "Productivité · Stocks & Matériaux",
    description: "Gestion intelligente des plannings, stocks et matériels de chantier.",
    image_url: "/images/projects/planiqo-rendezvous.jpg",
    link_url: "https://planiqo-rendezvous-cg9n.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "Planning", "Productivité"] }
  },
  {
    id: 121,
    category: "project",
    slug: "nova-rendezvous",
    title: "NOVA Rendez-vous",
    subtitle: "Services · Prise de RDV en Ligne",
    description: "Interface fluide de réservation en ligne pour clients et professionnels.",
    image_url: "/images/projects/nova-rendezvous.jpg",
    link_url: "https://nova-rendez-vous-onei.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "Booking", "Services"] }
  },
  {
    id: 122,
    category: "project",
    slug: "pilotis-budget",
    title: "Pilotis",
    subtitle: "Architecture · Suivi de Projets",
    description: "Plateforme de gestion et suivi budgétaire pour cabinets d'architecture.",
    image_url: "/images/projects/pilotis-budget.jpg",
    link_url: "https://pilotis-budget-projets-4ehw.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "Architecture", "Budget"] }
  },
  {
    id: 123,
    category: "project",
    slug: "nova-location-740q",
    title: "NOVA Location",
    subtitle: "Immobilier · Gestion Locative",
    description: "Service moderne de recherche, visite et location immobilière.",
    image_url: "/images/projects/nova-location-740q.jpg",
    link_url: "https://nova-location-740q.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "Immobilier", "Location"] }
  },
  {
    id: 124,
    category: "project",
    slug: "nova-gestion-di4y",
    title: "Nova Gestion Pro",
    subtitle: "SaaS · Pilotage d'Activité",
    description: "Espace de gestion opérationnelle pour petites et moyennes entreprises.",
    image_url: "/images/projects/nova-gestion-di4y.jpg",
    link_url: "https://nova-gestion-di4y.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "SaaS", "Gestion"] }
  },
  {
    id: 125,
    category: "project",
    slug: "autokongo-ftts",
    title: "AutoKongo",
    subtitle: "Automobile · Marketplace Véhicules",
    description: "Plateforme d'annonces et d'achat/vente de véhicules au Congo.",
    image_url: "/images/projects/autokongo-ftts.jpg",
    link_url: "https://autokongo-ftts.arcada.app/",
    status: "completed",
    metadata: { technologies: ["React", "Marketplace", "Automobile"] }
  },
  {
    id: 126,
    category: "project",
    slug: "serein-sante",
    title: "Nova Santé",
    subtitle: "Santé · Orientation Médicale",
    description: "Interface de triage et d'orientation santé claire pour accompagner les patients.",
    image_url: "/images/projects/serein-sante.jpg",
    link_url: "https://serein-sante-triage-bbhb.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "HealthTech", "Orientation"] }
  },
  {
    id: 127,
    category: "project",
    slug: "nova-gestion-congo",
    title: "NOVA Gestion Congo",
    subtitle: "SaaS · Espace Professionnel",
    description: "Solution adaptée aux entreprises congolaises pour piloter comptabilité et ventes.",
    image_url: "/images/projects/nova-gestion-congo.jpg",
    link_url: "https://nova-gestion-congo-ep41.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "SaaS", "Congo"] }
  },
  {
    id: 128,
    category: "project",
    slug: "terranova-agricole",
    title: "Ecoland Agricole",
    subtitle: "AgriTech · Gestion Agricole",
    description: "Plateforme de gestion et suivi d'exploitations agricoles modernes.",
    image_url: "/images/projects/terranova-agricole.jpg",
    link_url: "https://terranova-agricole-jcl8.arcada.app/",
    status: "in-development",
    metadata: { technologies: ["React", "AgriTech", "Admin"] }
  },
  {
    id: 129,
    category: "project",
    slug: "furniture-studio-premium",
    title: "Maison Nordique",
    subtitle: "E-commerce · Mobilier Design",
    description: "Studio d'aménagement et e-commerce premium de mobilier contemporain.",
    image_url: "/images/projects/furniture-studio-premium.jpg",
    link_url: "https://furniture-studio-premium-t9d3.arcada.app/",
    status: "completed",
    metadata: { technologies: ["React", "E-commerce", "Mobilier"] }
  },
  {
    id: 130,
    category: "project",
    slug: "furniture-store",
    title: "Mobilier Store",
    subtitle: "E-commerce · Catalogue Meubles",
    description: "Boutique en ligne moderne d'équipements et meubles d'intérieur.",
    image_url: "/images/projects/furniture-store.jpg",
    link_url: "https://furniture-store-43cv.arcada.app/",
    status: "completed",
    metadata: { technologies: ["React", "Catalogue", "E-commerce"] }
  },
  {
    id: 131,
    category: "project",
    slug: "relchie-market",
    title: "RELCHIE-MARKET",
    subtitle: "Marketplace · Prêt-à-porter & Luxe",
    description: "Marketplace moderne pour découvrir, acheter et vendre des articles de luxe et mode.",
    image_url: "/images/projects/relchie-market.jpg",
    link_url: "https://relchie-market.vercel.app/",
    status: "completed",
    metadata: { technologies: ["React", "Marketplace", "Ventes"] }
  }
];

export const CREATION_ITEMS: CreationItem[] = [
  {
    id: "01",
    index: "01",
    title: "Infographie",
    description: "Création d’infographies modernes, pédagogiques et professionnelles pour présenter des informations de manière claire et visuelle.",
    image: "https://res.cloudinary.com/u5jzbjfc/image/upload/v1787566697/86b1b1cc-17af-45f9-88b2-f2e22d0238a2.png"
  },
  {
    id: "02",
    index: "02",
    title: "Création visuelle avec IA",
    description: "Création d’images et de concepts visuels à l’aide de l’intelligence artificielle.",
    image: "https://res.cloudinary.com/u5jzbjfc/image/upload/v1787567989/93b8df76-e9fc-4e11-9b0e-dc1499cf6936_1.png"
  },
  {
    id: "03",
    index: "03",
    title: "Identité visuelle",
    description: "Création de logos, palettes, typographies et systèmes graphiques cohérents pour les marques.",
    image: "https://res.cloudinary.com/u5jzbjfc/image/upload/v1787567933/082a091f-6d87-4cf1-83eb-3e62669b8ef3.png"
  },
  {
    id: "04",
    index: "04",
    title: "UI/UX Design",
    description: "Conception d’interfaces modernes pour sites web, applications et plateformes digitales.",
    image: "https://res.cloudinary.com/u5jzbjfc/image/upload/v1787567991/b76484da-5e81-4665-a5ce-f5caafd167eb.png"
  },
  {
    id: "05",
    index: "05",
    title: "Affiches & Communication",
    description: "Création d’affiches, flyers, visuels publicitaires et supports de communication digitale.",
    image: "https://res.cloudinary.com/u5jzbjfc/image/upload/v1787567986/24a98217-3dba-4759-aaa6-e8cc291f1d57_1.png"
  },
  {
    id: "06",
    index: "06",
    title: "Contenu pour réseaux sociaux",
    description: "Création de visuels modernes adaptés à Instagram, TikTok, Facebook, LinkedIn et autres plateformes.",
    image: "https://res.cloudinary.com/u5jzbjfc/image/upload/v1787582184/e399fc57-9338-4d50-b09a-6df187e34ec2.png"
  },
  {
    id: "07",
    index: "07",
    title: "Motion & Direction artistique",
    description: "Création de concepts visuels destinés à l’animation, à la vidéo et aux contenus numériques.",
    image: "https://res.cloudinary.com/u5jzbjfc/image/upload/v1787583233/videoframe_1369.png"
  },
  {
    id: "08",
    index: "08",
    title: "3D & Design expérimental",
    description: "Exploration de la 3D, des compositions numériques et des nouvelles tendances visuelles.",
    image: "https://res.cloudinary.com/u5jzbjfc/image/upload/v1787567988/d0b898e86ace330612fe70fd4b98ad36.jpg"
  },
  {
    id: "09",
    index: "09",
    title: "Présentations & Supports professionnels",
    description: "Création de présentations, documents visuels, présentations commerciales et supports professionnels.",
    image: "https://res.cloudinary.com/u5jzbjfc/image/upload/v1787567917/5c0ee90d-b0b3-4927-8050-7e233615c3e5.png"
  },
  {
    id: "10",
    index: "10",
    title: "Concepts créatifs IA",
    description: "Expérimentation autour de l’IA générative pour créer de nouveaux concepts, univers graphiques et expériences visuelles.",
    image: "https://res.cloudinary.com/u5jzbjfc/image/upload/v1787583438/032956c12d400768fed473501e807e77.jpg"
  }
];

export const GALLERY_ITEMS = CREATION_ITEMS.map((item, idx) => ({
  id: 100 + idx + 1,
  category: "gallery",
  slug: `gallery-${item.id}`,
  title: item.title,
  subtitle: item.description,
  description: item.description,
  image_url: item.image,
  link_url: null
}));

export const ONLINE_PRESENCE: OnlineItem[] = [
  {
    id: "01",
    label: "Ma boutique",
    description: "Découvrez mes produits, ressources et solutions numériques.",
    url: "https://novasolutions.mychariow.com/",
    icon: "store"
  },
  {
    id: "02",
    label: "Facebook",
    description: "Suivez mes actualités et mes publications.",
    url: "https://www.facebook.com/profile.php?id=100091792418079&sk=following",
    icon: "facebook"
  },
  {
    id: "03",
    label: "Instagram",
    description: "Découvrez mes créations et contenus visuels.",
    url: "https://www.instagram.com/biampika/",
    icon: "instagram"
  },
  {
    id: "04",
    label: "LinkedIn",
    description: "Mon profil professionnel et mon parcours.",
    url: "https://www.linkedin.com/in/daniel-biampika-931928406/",
    icon: "linkedin"
  },
  {
    id: "05",
    label: "GitHub",
    description: "Découvrez mes projets et mon code source.",
    url: "https://github.com/biampikadaniel-netizen?tab=repositories",
    icon: "github"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 24,
    title: "Développement web",
    description: "Création de sites web modernes, rapides et responsives, conçus pour performer sur tous les écrans.",
    items: ["Sites vitrines premium", "Applications React / Next.js", "Intégration APIs & bases de données"]
  },
  {
    id: 25,
    title: "UI/UX Design",
    description: "Conception d’interfaces modernes et intuitives, au service d’une expérience simple et humaine.",
    items: ["Maquettes Figma", "Design systems", "Prototypage interactif"]
  },
  {
    id: 26,
    title: "Solutions IA",
    description: "Intégration d’outils et de fonctionnalités basées sur l’intelligence artificielle pour amplifier vos produits digitaux.",
    items: ["Automatisation", "Prompt Engineering", "Workflows intelligents"]
  },
  {
    id: 27,
    title: "Création digitale",
    description: "Création de contenus et d’expériences digitales distinctives pour les marques et entrepreneurs.",
    items: ["Direction artistique", "Contenus digitaux", "Identité visuelle"]
  },
  {
    id: 28,
    title: "Sites vitrines",
    description: "Création de sites professionnels pour entreprises et entrepreneurs qui veulent une présence claire et premium.",
    items: ["Positionnement de marque", "Pages de conversion", "SEO de base"]
  }
];

export const EXPERTISE: ExpertiseItem[] = [
  {
    index: "01",
    title: "Développement Web",
    techs: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS"],
    icon: "code"
  },
  {
    index: "02",
    title: "UI/UX & Branding",
    techs: ["Figma", "Design System", "Identité visuelle", "Interfaces modernes", "Prototypage"],
    icon: "palette"
  },
  {
    index: "03",
    title: "Intelligence Artificielle",
    techs: ["AI Tools", "Prompt Engineering", "AI Content Creation", "Intégration IA", "Automatisation"],
    icon: "spark"
  },
  {
    index: "04",
    title: "Création Digitale",
    techs: ["Git", "GitHub", "Linux", "Cybersécurité", "Stratégie créative"],
    icon: "pen"
  }
];

export const WEB3FORMS_ACCESS_KEY = "f73123af-adb5-43f3-85eb-9e5dce5d5a92";

export const FADE_UP = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
};
