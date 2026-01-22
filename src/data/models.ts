export interface CardProject {
  id:string;
  year?: string;
  title?: string;
  subtitle: string;
  context?: string;
  text?: string[];
  overview: string[];
  imageDesktop: string;
  imageMobile: string;
  alt: string;
  imageProject?: string;
  imageProjectMobile?: string;
  altImageProject?: string;
  label?: string;
  buttonLabel: string;
  badge?: Tool[];
  buttonLink: string;
  abstract?: string[];
  primaryOutButton?: string;
  primaryOutButtonLink?: string;
}

export interface Tool{
    name: string;
    badgeColor: string;
}