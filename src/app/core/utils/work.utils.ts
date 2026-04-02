import { Work } from "@models/interfaces";

export type WorkStaticData = Omit<Work, 'title' | 'description'>;

export function getWorksStaticData(): WorkStaticData[] {
  return [
    {
      image: 'assets/images/me/about.jpeg',
      technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Cypress', 'Storybook', 'Git'],
      liveUrl: 'https://example.com/kibaku',
      githubUrl: 'https://github.com/username/kibaku'
    },
    {
      image: 'assets/images/me/hero.jpeg',
      technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Cypress', 'Storybook', 'Git'],
      liveUrl: 'https://example.com/kibaku',
      githubUrl: 'https://github.com/username/kibaku'
    },
    {
      image: 'assets/images/me/hero.jpeg',
      technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Cypress', 'Storybook', 'Git'],
      liveUrl: 'https://example.com/kibaku',
      githubUrl: 'https://github.com/username/kibaku'
    }
  ];
}
