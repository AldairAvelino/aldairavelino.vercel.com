export interface Skill {
  name: string;
  lightIcon: string;
  darkIcon?: string;
  currentIcon?: string;
}

export interface Work {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  title: string;
  company?: string;
  logo?: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
}

export interface Contact {
  email: string;
  phone: string;
}

export type Theme = "light" | "dark"
