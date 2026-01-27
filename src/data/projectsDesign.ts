import { appRoutes } from "./constants";
import type { CardProject } from "./models";
import { projectsLabel } from "./projectsLabel";

export const ProjectsCardsText: CardProject[] = [
  {
    id: "cinemateca",
    year: "October 2024 - April 2025",
    title: "Cinemateca Website",
    subtitle: "Cinemateca",
    context: "Public Cultural Instituion (Cinema & Film)",
    text: [
      "A design of the website of the Cinemateca Portuguesa originally created in 2013."
    ],
    task:["UI Design, Prototyping, Front-end"],
    overview: [
      "This academic project explored the creation of the Cinemateca Portuguesa website from scratch, designed as if no prior platform existed, with a structure and navigation fully guided by user needs and content logic. The site was designed to help users easily learn about the institution, explore the film archive, discover screenings and events, read editorial content, and access key information.",
      "The project delivered a high-fidelity prototype and a responsive HTML/CSS implementation. Research included analysis of international cinematecas and film festivals platforms informed content hierarchy, navigation and usability, resulting in a functional, accessible, and modern digital website."
    ],
    imageDesktop: "projects/cinemateca-card.webp",
    imageMobile: "projects/cinemateca-card-mobile.webp",
    alt: "Cinemateca's landing page image",
    label: projectsLabel.ACADEMIC,
    tools: ["Figma", "HTML & CSS","Bootstrap",
      "JavaScript", "JSON", "Lighthouse", "GitHub",
],
    buttonLabel: "See full project",
    buttonLink: appRoutes.CINEMATECA,
    abstract: [""],
  },
  {
    id: "portal-felix",
    year: "October 2024 - February 2025",
    title: "Portal Félix Plataform",
    subtitle: "Portal Félix",
    context: "Film Heritage Platform (Public Cultural Institution)",
    text: [
      "A UX audit and user-centered redesign of Portal Félix, aiming to improve usability, accessibility, and workflows."
    ],
    task:["User Research, UX Design, Interaction Design, Prototyping"],
    overview: [
      "This use case study focused on Portal Félix, the centralized access point to Portuguese cinematographic heritage, designed for cinema researchers and the general public. The platform faced usability and navigation challenges, with workflows that did not support research effectively.",
      "Through heuristic and accessibility evaluations, user testing, mapping new user flows, and iterative prototyping, the project delivered a medium-fidelity prototype in Figma. The redesign enables researchers to manage large content sets efficiently, reduce repetitive actions, and make search results more intuitive and actionable."
    ],
    imageDesktop: "projects/portal-card.webp",
    imageMobile: "projects/portal-card-mobile.webp",
    alt: "Portal Felix prototype image",
    label: projectsLabel.ACADEMIC,
    tools: ["Notion", "Figma", "Octopus.do", "ZOOM", "AccessMonitor" ],
    buttonLabel: "See full project",
    buttonLink: appRoutes.PORTAL_FELIX,
    abstract: [""],
  },
  {
    id: "impact-of-notification",
    year: "December 2024 - July 2025",
    title: "Impact of Notifications on Reading Tasks",
    subtitle: "Impact of Notifications",
    context: "Academic Research",
    text: [
      "An academic research project exploring how desktop notifications impact attention and reading performance."
    ],
    task:["UX Research, Experimental Design, Data Analysis"],
    overview: [
      "This academic research project examined how desktop notifications affect attention during digital reading tasks. Using eye-trackinh and biometric sensors, we analysed the cognitive and physiological impact of visual and auditory interruptions.",
      "The study involved 35 participants tested under three conditions: no notifications, visual.only notifications, and combined visual and auditory notifications. Resulst showed that while notifications do not always cause immediate visual distraction, they generate subtle responses that negatively affect sustained attention over time."
    ],
    imageDesktop: "projects/notification-card.webp",
    imageMobile: "projects/notification-card-mobile.webp",
    alt: "Heatmap image from the project",
    label: projectsLabel.RESEARCH,
    tools: [ "GazePoint 3",  "AOI Analysis", "Overleaf", "Excel & Docs" ],
    buttonLabel: "See full project",
    buttonLink: appRoutes.IMPACT_NOTIFICATIONS,
    abstract: [""],
  },
];
