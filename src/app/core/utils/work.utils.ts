import { Work } from "@models/interfaces";

export type WorkStaticData = Omit<Work, 'title' | 'description'>;

export function getWorksStaticData(): WorkStaticData[] {
  return [
    {
      image: 'assets/images/work/agricargas.png',
      technologies: ['React', 'Tailwind', 'TypeScript', 'Git'],
      liveUrl: 'https://agricargas.vercel.app/',
      githubUrl: 'https://github.com/AldairAvelino/agricargas'
    },
    {
      image: 'assets/images/work/pickaseat.png',
      technologies: ['React.js', 'TypeScript', 'Tailwindcss', 'Figma', 'Git'],
      liveUrl: 'https://pickaseat.vercel.app/',
      githubUrl: 'https://github.com/AldairAvelino/pickaseat'
    },
    {
      image: 'assets/images/work/edubrain.png',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwindcss', 'Figma', 'Git'],
      liveUrl: 'https://edubraingest.vercel.app/',
      githubUrl: 'https://github.com/AldairAvelino/EduBrain'
    }
  ];
}
