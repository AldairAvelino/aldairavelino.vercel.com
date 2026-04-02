import { Testimonial } from "@models/interfaces";

export type TestimonialStaticData = Omit<Testimonial, 'quote' | 'title'>;

export function getTestimonialsStaticData(): TestimonialStaticData[] {
  return [
    {
      name: 'John Doe',
      company: 'Kibaku',
      avatar: 'assets/images/me/hero.jpeg'
    },
    {
      name: 'Joana Doe',
      company: 'Unitel',
      avatar: 'assets/images/me/hero.jpeg'
    },
    {
      name: 'John Doe',
      company: '',
      avatar: 'assets/images/me/hero.jpeg'
    }
  ];
}
