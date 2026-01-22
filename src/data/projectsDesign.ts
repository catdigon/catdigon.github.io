import { badgeColor } from "./badgeColor";
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
    overview: [
      "This academic project explored the creation of the Cinemateca Portuguesa website from scratch, designed as if no prior platform existed, with a structure and navigation fully guided by user needs and content logic. The site was designed to help users easily learn about the institution, explore the film archive, discover screenings and events, read editorial content, and access key information.",
      "The project delivered a high-fidelity prototype and a responsive HTML/CSS implementation. Research included analysis of international cinematecas and film festivals platforms informed content hierarchy, navigation and usability, resulting in a functional, accessible, and modern digital website."
    ],
    imageDesktop: "projects/cinemateca.webp",
    imageMobile: "projects/cinemateca-mobile.webp",
    alt: "Cinemateca's landing page image",
    label: projectsLabel.ACADEMIC,
    badge: [{
      name: "Figma",
      badgeColor: badgeColor.PINK
    },
    {
      name: "HTML & CSS",
      badgeColor: badgeColor.BLUE
    },
    {
      name: "Bootstrap",
      badgeColor: badgeColor.BLUE
    },
    {
      name: "JavaScript",
      badgeColor: badgeColor.BLUE
    },
    {
      name: "JSON",
      badgeColor: badgeColor.BLUE
    },
    {
      name: "Lighthouse",
      badgeColor: badgeColor.GREEN
    },
    {
      name: "GitHub",
      badgeColor: badgeColor.DARK
    }],
    buttonLabel: "See full project",
    buttonLink: appRoutes.CINEMATECA,
    abstract: [""],
  },
  {
    id: "portal-felix",
    year: "October 2024 - February 2025",
    title: "Portal Félix Plataform",
    subtitle: "Portal Félix",
    text: [
      "A UX audit and user-centered redesign of Portal Félix, aiming to improve usability, accessibility, and workflows."
    ],
    overview: [],
    imageDesktop: "projects/portal.webp",
    imageMobile: "projects/portal-mobile.webp",
    alt: "Portal Felix prototype image",
    label: projectsLabel.ACADEMIC,
    badge: [{
      name: "Notion",
      badgeColor: badgeColor.RED
    },
    {
      name: "Figma",
      badgeColor: badgeColor.PINK
    },
    {
      name: "Octopus.do",
      badgeColor: badgeColor.PINK
    },
      {
      name: "ZOOM",
      badgeColor: badgeColor.GOLD
    },
    {
      name: "AccessMonitor",
      badgeColor: badgeColor.GREEN
    },
  ],
    buttonLabel: "See full project",
    buttonLink: appRoutes.PORTAL_FELIX,
    abstract: [""],
  },
  {
    id: "impact-of-notification",
    year: "December 2024 - July 2025",
    title: "Impact of Notifications on Reading Tasks",
    subtitle: "Impact of Notifications",
    text: [
      "An academic research project exploring how desktop notifications impact attention and reading performance."
    ],
    overview: [],
    imageDesktop: "projects/notification.webp",
    imageMobile: "projects/notification-mobile.webp",
    alt: "Heatmap image from the project",
    label: projectsLabel.RESEARCH,
    badge: [{
      name: "GazePoint 3",
      badgeColor: badgeColor.GREEN
    },
    {
      name: "AOI Analysis",
      badgeColor: badgeColor.PURPLE
    },
    {
      name: "Overleaf",
      badgeColor: badgeColor.RED
    },
    {
      name: "Excel & Docs",
      badgeColor: badgeColor.RED
    },
  ],
    buttonLabel: "See full project",
    buttonLink: appRoutes.IMPACT_NOTIFICATIONS,
    abstract: [""],
  },
];
