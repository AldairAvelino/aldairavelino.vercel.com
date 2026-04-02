import { Experience } from "@models/interfaces";

export type ExperienceStaticData = Omit<Experience, 'title' | 'role' | 'company' | 'responsibilities'>;

export function getExperiencesStaticData(): ExperienceStaticData[] {
  return [
    {
      logo: 'assets/images/logo.svg',
      startDate: 'Nov 2021',
      endDate: 'Present'
    },
    {
      logo: 'assets/images/logo.svg',
      startDate: 'Jul 2017',
      endDate: 'Oct 2021'
    },
    {
      logo: 'assets/images/logo.svg',
      startDate: 'Dec 2015',
      endDate: 'May 2017'
    },
    {
      logo: 'assets/images/logo.svg',
      startDate: 'Dec 2015',
      endDate: 'May 2017'
    }
  ];
}
