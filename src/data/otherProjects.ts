import { appRoutes } from "./constants";
import type { CardProject } from "./models";
import { projectsLabel } from "./projectsLabel";

export const OtherProjectsCardsText2024: CardProject[] = [
  {
    id:"trading-zones",
    year: "2024",
    title: "Trading Zones: Pensar as zonas de troca como um terceiro espaço para a criação e investigação artística",
    subtitle: "Trading Zones",
    text: [
      "Published in Aniki - Revista Portuguesa da Imagem em Movimento."
    ],
    imageDesktop: "/covers/aniki.webp",
    imageMobile: "/covers/aniki-mobile.webp",
    alt: "Dossiers edition cover",
    imageProject: "/covers/aniki-cover.webp",
    imageProjectMobile: "/covers/aniki-cover-mobile.webp",
    altImageProject: "Dossiers edition cover",
    label: projectsLabel.WRITING,
    buttonLabel: "See project",
    buttonLink: appRoutes.OTHER_PROJECT_DETAIL.replace(':id', 'trading-zones'),
    abstract: [
      "Do we need to create a third space to reflect upon the world we inhabit alongside the Other? Trading Zones (Archive Books, 2022) initiates negotiations between cinema and our condition in the world, presenting cinema as a borderless space and as a tool for artistic and anthropological investigation.",
    ],
    primaryOutButton: "Read Article",
    primaryOutButtonLink: "https://doi.org/10.14591/aniki.v11n2.1073",
  },
];

export const OtherProjectsCardsText2023: CardProject[] = [
  {
    id: "20-filmes-fundamentais-do-cinema-portugues",
    year: "2023",
    title: "20 Filmes fundamentais do cinema português",
    subtitle: "20 Filmes fundamentais do cinema português",
    text: [
      "Paulo Cunha e Manuela Penafria (Eds)",
    ],
    imageDesktop: "/covers/20-filmes.webp",
    imageMobile: "/covers/20-filmes-mobile.webp",
    alt: "Book cover",
    imageProject: "/covers/20-filmes-cover.webp",
    imageProjectMobile: "/covers/20-filmes-cover.webp",
    altImageProject: "Book cover",
    label: projectsLabel.WRITING,
    buttonLabel: "See project",
    buttonLink: appRoutes.OTHER_PROJECT_DETAIL.replace(':id', '20-filmes-fundamentais-do-cinema-portugues'),
    abstract: [
      "This volume, entitled 20 Fundamental Films of Portuguese Cinema, brings together texts resulting from the homonymous project that hosted five short-term research fellows at LabCom – Laboratory of Communication and Arts, between September and December 2022, funded by the Foundation for Science and Technology (FCT) under the program Summer with Science. The main goal of the project was to highlight 20 essential and relevant films for a deeper understanding of Portuguese cinema. The texts now published aim to contribute with new perspectives on Portuguese Cinema, fostering a closer connection between Portuguese audiences and their cinema, while also disseminating the history and aesthetics of Portuguese film.",
    ],
    primaryOutButton: "Read Book",
    primaryOutButtonLink: "https://labcom.ubi.pt/20-filmes-fundamentais-do-cinema-portugues/",
  },

   {
    id: "cacildes-adventure",
    year: "2023 - current",
    title: "Cacildes Adventure",
    subtitle: "Cacildes Adventure",
    text: [
      "A RPG created by André Fernandes. I joined initially as a QA tester and later took on the production and editing of promotion video for the game."
    ],
    imageDesktop: "/covers/cacildes.webp",
    imageMobile: "/covers/cacildes.webp",
    alt: "Cacildes Adventure frame",
    imageProject: "",
    altImageProject: "",
    label: projectsLabel.GAMEMEDIA,
    buttonLabel: "See project",
    buttonLink: appRoutes.OTHER_PROJECT_DETAIL.replace(':id', 'cacildes-adventure'),
    abstract: [],
    primaryOutButton: "See on Steam",
    primaryOutButtonLink: "https://store.steampowered.com/app/2617740/Cacildes_Adventure/",
  },
];

export const OtherProjectsCardsText2022: CardProject[] = [
  {
    id: "digitall",
    year: "2022",
    title: "DigitALL",
    subtitle: "DigitALL",
    text: [""],
    imageDesktop: "/covers/ensino.webp",
    imageMobile: "/covers/ensino-mobile.webp",
    alt: "Stop motion films made by students ",
    imageProject: "",
    altImageProject: "",
    label: projectsLabel.EDUCATION,
    buttonLabel: "See project",
    buttonLink: appRoutes.OTHER_PROJECT_DETAIL.replace(':id', 'digitall'),
    abstract: [],
    primaryOutButton: "",
    primaryOutButtonLink: "",
  },
    
  {
    id: "rafa-and-david",
    year: "2022",
    title: "Rafa and David: 'Us' vs 'Them'",
    subtitle: "Rafa and David",
    text: [
      "Published in Journal of Science and Technology of the Arts"
    ],
    imageDesktop: "/covers/rafa.webp",
    imageMobile: "/covers/rafa-mobile.webp",
    alt: "Audiovisual Essay Frame",
    imageProject: "",
    altImageProject: "",
    label: projectsLabel.WRITING,
    buttonLabel: "See project",
    buttonLink: appRoutes.OTHER_PROJECT_DETAIL.replace(':id', 'rafa-and-david'),
    abstract: [
      "By analysing Salaviza's films under the identity scope, similar ideas seem to appear in his work. The identity crisis and the relationship of power become a central theme along with the importance of the interspaces where the main characters take part in the world. Hence, by putting side-by-side Rafa (Salaviza, 2012) and Montanha (Salaviza, 2015) we can observe a space where the interior struggles with the exterior.",
    ],
    primaryOutButton: "Read Article",
    primaryOutButtonLink: "https://doi.org/10.34632/jsta.2022.11765",
  },

  {
    id: "recorda-te-de-mim",
    year: "2022",
    title: "Recorda-te de mim, sempre! ",
    subtitle: "Recorda-te de mim, sempre! ",
    text: [
      "Experimental documentary"
    ],
    imageDesktop: "/covers/recorda.webp",
    imageMobile: "/covers/recorda-mobile.webp",
    alt: "Film frame",
    imageProject: "",
    altImageProject: "",
    label: projectsLabel.FILM,
    buttonLabel: "See project",
    buttonLink: appRoutes.OTHER_PROJECT_DETAIL.replace(':id', 'recorda-te-de-mim'),
    abstract: [],
    primaryOutButton: "",
    primaryOutButtonLink: "",
  },
];

export const OtherProjectsCardsText2020: CardProject[] = [
  {
    id: "bdc",
    year: "2020",
    title: "BDC - Bratislavské dobrovoľnícke centrum",
    subtitle: "BDC - Bratislavské dobrovoľnícke centrum",
    text: [
      "During my volunteering period in Slovakia, I contributes to: Video production and editing; Photography of events; Graphic design for flyers, reports, and visual."
    ],
    imageDesktop: "/covers/brochure.webp",
    imageMobile: "/covers/brochure-mobile.webp",
    alt: "Project photos",
    imageProject: "",
    altImageProject: "",
    label: projectsLabel.GAMEMEDIA,
    buttonLabel: "See project",
    buttonLink: appRoutes.OTHER_PROJECT_DETAIL.replace(':id', 'bdc'),
    abstract: [],
    primaryOutButton: "",
    primaryOutButtonLink: "",
  },
];

export const OtherProjectsCardsText2019: CardProject[] = [
  {
    id:"caminhos-film-festival",
    year: "2019",
    title: "Caminhos Film Festival",
    subtitle: "Caminhos Film Festival",
    text: [""],
    imageDesktop: "/covers/caminhos.webp",
    imageMobile: "/covers/caminhos-mobile.webp",
    alt: "Festival photos",
    imageProject: "",
    altImageProject: "",
    label: projectsLabel.GAMEMEDIA,
    buttonLabel: "See project",
    buttonLink: appRoutes.OTHER_PROJECT_DETAIL.replace(':id', 'caminhos-film-festival'),
    abstract: [],
    primaryOutButton: "Visit the Website",
    primaryOutButtonLink: "",
  },

  {
    id: "entre-tanto",
    year: "2019",
    title: "Entre Tanto",
    subtitle: "Entre Tanto",
    text: [
      "Documentary short",
      "Official Selection, PrimeirOlhar 2020 - Encontros de Cinema de Viana"],
    imageDesktop: "/covers/entre.webp",
    imageMobile: "/covers/entre-mobile.webp",
    alt: "Film frame",
    imageProject: "/covers/entre-tanto-cover.webp",
    imageProjectMobile: "/covers/entre-tanto-cover-mobile.webp",
    altImageProject: "Film poster",
    label: projectsLabel.FILM,
    buttonLabel: "See project",
    buttonLink: appRoutes.OTHER_PROJECT_DETAIL.replace(':id', 'entre-tanto'),
    abstract: [],
    primaryOutButton: "",
    primaryOutButtonLink: "",
  },
];

export const OtherProjectsCardsText2018: CardProject[] = [
  {
    id: "mae-da-minha-mae",
    year: "2018",
    title: "Mãe da minha mãe",
    subtitle: "Mãe da minha mãe",
    text: [
      "Documentary short",
      "Work-in-progress screening: Planos Film Festival 2018"],
    imageDesktop: "/covers/mae.webp",
    imageMobile: "/covers/mae-mobile.webp",
    alt: "Film frame",
    imageProject: "",
    altImageProject: "",
    label: projectsLabel.FILM,
    buttonLabel: "See project",
    buttonLink: appRoutes.OTHER_PROJECT_DETAIL.replace(':id', 'mae-da-minha-mae'),
    abstract: [],
    primaryOutButton: "",
    primaryOutButtonLink: "",
  },

  {
    id: "ma-ras-ma-ti-ca",
    year: "2018",
    title: "Ma.ras.má.ti.ca",
    subtitle: "Ma.ras.má.ti.ca",
    text: [
      "Experimental short",
      "Official Selection, Cinedita - Festival de Curtas de Arganil (2019)",
      "Screned at Mostra Criativa - CAI Galeria IPT"
    ],
    imageDesktop: "/covers/maras.webp",
    imageMobile: "/covers/maras-mobile.webp",
    alt: "Film frame",
    imageProject: "",
    altImageProject: "",
    label: projectsLabel.FILM,
    buttonLabel: "See project",
    buttonLink: appRoutes.OTHER_PROJECT_DETAIL.replace(':id', 'ma-ras-ma-ti-ca'),
    abstract: [],
    primaryOutButton: "",
    primaryOutButtonLink: "",
  },

  {
    id: "e-agora-estamos-aqui",
    year: "2018",
    title: "E agora estamos aqui",
    subtitle: "E agora estamos aqui",
    text: [
      "Docu-experimental",
      "Screned at Mostra Criativa - CAI Galeria IPT"
    ],
    imageDesktop: "/covers/agora.webp",
    imageMobile: "/covers/agora-mobile.webp",
    alt: "Film frame",
    imageProject: "",
    altImageProject: "",
    label: projectsLabel.FILM,
    buttonLabel: "See project",
    buttonLink: appRoutes.OTHER_PROJECT_DETAIL.replace(':id', 'e-agora-estamos-aqui'),
    abstract: [],
    primaryOutButton: "",
    primaryOutButtonLink: "",
  },
];
