export interface Skill {
  name: string;
  lightIcon: string;
  darkIcon?: string;
  currentIcon?: string;
}

export interface Work {
}

export interface Experience {
  title: string;
  company?: string;
  logo?: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Project {
  title: string
  description: string
  imageUrl: string
  tags: string[]
}

export interface Testimonial {
  name: string
  role: string
  avatarUrl: string
  text: string
}

export type Theme = "light" | "dark"
