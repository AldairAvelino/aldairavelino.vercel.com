export interface Skill {
  name: string
  iconUrl: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
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
