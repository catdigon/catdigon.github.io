export interface CardProject {
  id:string;
  year?: string;
  title?: string;
  subtitle: string;
  text?: string[];
  image: string;
  alt: string;
  imageProject?: string;
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