import { Experience } from "@models/interfaces";

export type ExperienceStaticData = Omit<Experience, 'title' | 'role' | 'company' | 'responsibilities' | 'startDate' | 'endDate'>;

export function getExperiencesStaticData(): ExperienceStaticData[] {
  return [
    {
      logo: 'assets/images/logo.svg'
    },
    {
      logo: 'assets/images/logo.svg'
    },
    {
      logo: 'assets/images/logo.svg'
    },
    {
      logo: 'assets/images/logo.svg'
    }
  ];
}
