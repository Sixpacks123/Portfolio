import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Portfolio",
  projectsDescription: "",
  projects: [
    //liste projet pour epreuve E4


    //loisira
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Loisira",
      category: "Front End / Back End",
      img: "Stage2/logo.png",
      publishDate: "Dec 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "Le Client",
      objectivesTitle: "Objectif",
      objectivesDetails:
        "Projet réalisé dans le cadre d'un test de recrutement pour un stage lors de ma deuxième année de BTS SIO(Service Informatique aux Organisation)",
      techTitle: "Technologie",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Main",
          img: "../images/Loisira.png",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Loisira",
          details: "Entreprise fictive",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        /* {
          id: uuidv4(),
          title: "Website",
          details: "http://odexia.s3-website.eu-west-3.amazonaws.com/",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },*/
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "Node.js",
        "vuex",
        "expresse.js"
      ],
      socialSharings: [],
    },
   // stage 1
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "Stage Ikervorkian",
      category: "Front End / Wordpresse",
      img: "Stage1/logolanouvelleolympe.png",
      publishDate: "Nov 04, 2021",
      tag: "Frontend",
      clientTitle: "L'entreprise",
      objectivesTitle: "Objectif",
      objectivesDetails:
        "L’idée de départ était de me confronter à la réalisation complète d’un site web de manière autonome car le stage était à réaliser en télétravail. Avec tout ce que le télétravail implique comme flexibilité, réactivité, organisation, délai, ce stage m’a permis d’expérimenter cette nouvelle façon de travailler.",
      techTitle: "Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Avant",
          img: "../Stage1/Avant.png",
        },
        {
          id: uuidv4(),
          title: "Apres",
          img: "../Stage1/Apres.png",
        },
        {
          id: uuidv4(),
          title: "Site",
          img: "../Stage1/site.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nom ",
          details: " Ikevorkian",
        },
        {
          id: uuidv4(),
          title: "Site Web ",
          details: "https://www.ikevorkian.fr/",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "Wordpress",
        "Elementor",
        "Prestashop",
        "OVH",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Avant de débuter ce stage, j'ai dû réaliser une phase d'analyse sur les réels besoins et voir ce que moi, je pouvais proposer. Cette phase a été réalisée avec l'aide d'un de mes professeurs et bien entendu, de mon maître de stage.",
        },
        {
          id: uuidv4(),
          details:
            "Après deux entretiens avec la fondatrice du site, j'ai pu récupérer toutes les informations pratiques sur le projet et l'entreprise, nécessaires à la refonte de l'environnement web. En ce qui concerne ses exigences, mon maître de stage tenait juste à ce que je respecte la charte graphique de l'entreprise et de l'univers qu’elle avait créé.",
        },
        {
          id: uuidv4(),
          details:
            "Les deux principaux besoins de l’entreprise étaient la refonte et l'actualisation des sites kevorkian.fr et lanouvelleolympe.fr : ",
        },
        {
          id: uuidv4(),
          details:"- La refonte du site ikevorkian.fr afin qu'il devienne la porte d'accès aux autres sites iBoutik/prestahop/ikevorkian (enjeu commercial de la société)",
        },
        {
          id: uuidv4(),
          details:"- Le site lanouvelleolympe.fr dont l’enjeu commercial consiste principalement à apporter une visibilité à la marque.",
        },
        {
          id: uuidv4(),
          details:
            "D'autres enjeux, comme l'actualisation de tout l'aspect juridique des différents sites (les CGV-U - Confidentialité - RGPD - Mentions Légales - Cookies) étaient à prendre en ligne de compte.",
        },
        {
          id: uuidv4(),
          details:
            "Enfin, il s’agissait également d’assurer le maintien et la disponibilité du site avec un système de sauvegarde permettant l'accessibilité et l'interconnexion des sites avec des outils d'analyse de trafic tels que Google Analytics et Facebook Pixel.",
        },
      ],
      socialSharings: [
      ],
    },
    //stage2
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccda",
      title: "Mine Of War",
      category: "Mobile Application",
      img: "Stage2/MOW-logo.png",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "L'entreprise",
      techTitle: "Technologies",
      detailsTitle: "Missions Réaliser",
      projectImages: [
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../Stage2/code.png",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../Stage2/master.png",
        },
        {
          id: uuidv4(),
          title: "Phoenix Digital Agency",
          img: "../Stage2/article.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nom",
          details: "Mine Of War",
        },
        {
          id: uuidv4(),
          title: "Service",
          details: "Dévloppement Web",
        },
        {
          id: uuidv4(),
          title: "Site Web",
          details: "https://mineofwar.com/",
        }
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "Docker",
        "Figma",
        "Linux"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Maquettage de pages sur Figma. ",
        },
        {
          id: uuidv4(),
          details:
            "Intégrations de page sur le framworks Nuxt.js et rendu dynamique avec une api restful sur AWS ",
        },
        {
          id: uuidv4(),
          details:
            "Dévloppement d'un système de rédaction d'article sur Nuxt.js",
        },
        {
          id: uuidv4(),
          details:
            "Travail en mode Agile a L'aide de GitLab",
        },
        {
          id: uuidv4(),
          details:
            "Configuration et utilisation d’un environnement Docker",
        },
        {
          id: uuidv4(),
          details:
            "Travail en équipe sur GitLab avec un système d’organisation de branches (branches features, branche Develop (preprod) et branche Master (prod)) avec un système de review.",
        },
      ],
    },// Projet DLS
    {
      id: "260d1271-f1f2-4bc9-a5eb-06a89c8cccdy",
      title: "Projet DLs",
      category: "Gestion de Projet / Prestahop",
      img: "ProjetDls/Logo.png",
      publishDate: "Nov 04, 2021",
      tag: "Gestion de projet ",
      clientTitle: "L'entreprise",
      objectivesTitle: "Objectif",
      objectivesDetails:
        "Conception et Réalisation d’un site vitrine pour augmenter la visibilité de la marque DLS_Store. DLS_Store est une entreprise à but non lucratif afin de réunir des fonds pour effectuer un voyage scolaire. ",
      techTitle: "Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "gant",
          img: "../ProjetDls/gant.png",
        },
        {
          id: uuidv4(),
          title: "site",
          img: "../ProjetDls/boutiqu.png",
        },
        {
          id: uuidv4(),
          title: "Site",
          img: "../Stage1/site.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nom ",
          details: "DLS_store",
        },
        {
          id: uuidv4(),
          title: "Site Web ",
          details: "http://dls-store35.fr/",
        },
      ],
      technologies: [
        "Gant",
        "Gestion de projet",
        "Chef de projet",
        "Prestashop",
        "OVH",
      ],
      projectDetails: [
        
        {
          id: uuidv4(),
          details:
            "J'ai effectué ce projet parmis une équie de 5 personne de ma classe dont j'était le chef de projet. Mon rôles était de planiffier les différenté tâches et les attribuer au menbre de l'équipe. J'ai participer dans la relations avec l'entreprise DLS et comme soutient technique de mon équipe.",
        },
        {
          id: uuidv4(),
          details:
            "Nous avons mis en place à l'entrprise DLS_Store une boutique prestashop clé en mains hébergé par OVH.",
        },
        {
          id: uuidv4(),
          details:
            "Ce projet m'a permis d'accquérire de nouvelle compétence comme la planification d'un projet, la gestion d'une équipe ou encore dans les échanges avec les clients.",
        },
      ],
      socialSharings: [
      ],
    },
    // TraceGPS - JAVA 
    {
      id: "260d1271-f1f2-4bc9-a5eb-06a89c8cccdu",
      title: " TraceGPS - JAVA ",
      category: "Java / API",
      img: "ProjetDls/Logo.png",
      publishDate: "Nov 04, 2021",
      tag: "Java ",
      clientTitle: "Type de Projet",
      objectivesTitle: "",
      objectivesDetails:
        "Développement et le test de l’API Java qui sera utilisée pour l’application Android  ",
      techTitle: "Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "gant",
          img: "../ProjetDls/gant.png",
        },
        {
          id: uuidv4(),
          title: "site",
          img: "../ProjetDls/boutiqu.png",
        },
        {
          id: uuidv4(),
          title: "Site",
          img: "../Stage1/site.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: " Type",
          details: "Tp de cours BTS SIO ",
        }
      ],
      technologies: [
        "Java",
        "Inteliji",
        "github",
        "Junit",
      ],
      projectDetails: [
        
        {
          id: uuidv4(),
          details:
            "Dévloppement de test  a l'aide de Junit",
        },
        {
          id: uuidv4(),
          details:
            "Dévloppment des classe : demanderMdp,getLesUtilisateursQueJautorise, getLesUtilisateursQuiMautorisent, demanderUneAutorisation, retirerUneAutorisation, envoyerPosition, getUnParcoursEtSesPoints, getLesParcoursDunUtilisateur, supprimerUnParcours, demarrerEnregistrementParcours,arreterEnregistrementParcours",
        },
        {
          id: uuidv4(),
          details:
            "",
        },
      ],
      socialSharings: [
      ],
    },// TraceGPS - C# 
    {
      id: "260d1271-f1f2-4bc9-a5et-06a89c8cccdu",
      title: " TraceGPS - C# ",
      category: "Java / API",
      img: "ProjetDls/Logo.png",
      publishDate: "Nov 04, 2021",
      tag: "Java ",
      clientTitle: "Type de Projet",
      objectivesTitle: "",
      objectivesDetails:
        "Développement et le test de l’API Java qui sera utilisée pour l’application Android  ",
      techTitle: "Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "gant",
          img: "../ProjetDls/gant.png",
        },
        {
          id: uuidv4(),
          title: "site",
          img: "../ProjetDls/boutiqu.png",
        },
        {
          id: uuidv4(),
          title: "Site",
          img: "../Stage1/site.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: " Type",
          details: "Tp de cours BTS SIO ",
        }
      ],
      technologies: [
        "Java",
        "Inteliji",
        "github",
        "Junit",
      ],
      projectDetails: [
        
        {
          id: uuidv4(),
          details:
            "Dévloppement de test  a l'aide de Junit",
        },
        {
          id: uuidv4(),
          details:
            "Dévloppment des classe : demanderMdp,getLesUtilisateursQueJautorise, getLesUtilisateursQuiMautorisent, demanderUneAutorisation, retirerUneAutorisation, envoyerPosition, getUnParcoursEtSesPoints, getLesParcoursDunUtilisateur, supprimerUnParcours, demarrerEnregistrementParcours,arreterEnregistrementParcours",
        },
        {
          id: uuidv4(),
          details:
            "",
        },
      ],
      socialSharings: [
      ],
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    },
    {
      id: uuidv4(),
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/Sixpacks123",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/aubin-heurtault-a1a966202",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "mobile",
      name: "Mobile Applicaiton",
    },
    {
      id: uuidv4(),
      value: "ui-ux",
      name: "UI/UX Design",
    },
    {
      id: uuidv4(),
      value: "branding",
      name: "Branding & Animations",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
