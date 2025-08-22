import { appRoutes } from "./constants";
import type { CardProject } from "./models";
import { projectsLabel } from "./projectsLabel";

export const ProjectsCardsText: CardProject[] = [
  {
    id: "cinemateca",
    year: "October 2024 - April 2025",
    title: "Cinemateca Website",
    subtitle: "Cinemateca",
    text: "A design of the website of the Cinemateca Portuguesa originally created in 2013.",
    image: "/cinemateca.jpg",
    alt: "Cinemateca's landing page image",
    label: projectsLabel.ACADEMIC,
    buttonLabel: "See full project",
    buttonLink: appRoutes.PROJECT,
    abstract: "",
  },
  {
    id:"portal-felix",
    year: "October 2024 - February 2025",
    title: "Portal Félix Plataform",
    subtitle: "Portal Félix",
    text: "A UX evaluation and user-centered design of Portal Félix, aiming to improve usability, accessibility, and workflows.",
    image: "/portal.jpg",
    alt: "Portal Felix prototype image",
    label: projectsLabel.ACADEMIC,
    buttonLabel: "See full project",
    buttonLink: "",
    abstract: "",
  },
  {
    id: "impact-of-notification",
    year: "December 2024 - July 2025",
    title: "Impact of Notifications on Reading Tasks",
    subtitle: "Impact of Notifications",
    text: "An academic research project exploring how desktop notifications impact attention and reading performance.",
    image: "/notification.png",
    alt: "Heatmap image from the project",
    label: projectsLabel.RESEARCH,
    buttonLabel: "See full project",
    buttonLink: "",
    abstract: "",
  },
];
