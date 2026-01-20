export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ClientLogo {
  id: number;
  name: string;
  src: string;
}