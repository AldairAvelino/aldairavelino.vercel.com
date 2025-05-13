import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '@models/interfaces';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: 'Job well done! I am really impressed. He is very very good at what he does! I would recommend Aldair and will rehire in the future for Frontend development.',
      name: 'John Doe',
      title: 'Founder',
      company: 'Kibaku',
      avatar: 'assets/images/me/hero.jpeg'
    },
    {
      quote: 'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
      name: 'Joana Doe',
      title: 'Founder',
      company: 'Unitel',
      avatar: 'assets/images/me/hero.jpeg'
    },
    {
      quote: 'Aldair was extremely easy and pleasant to work with and he truly cares about the project being a success. Aldair has a high level of knowledge and was able to work on my MERN stack application without any issues.',
      name: 'John Doe',
      title: 'Freelancer',
      company: '',
      avatar: 'assets/images/me/hero.jpeg'
    }
  ]
}
