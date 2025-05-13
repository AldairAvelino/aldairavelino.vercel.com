import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Work } from '@models/interfaces';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  works: Work[] = [
    {
      title: 'Kibaku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      image: 'assets/images/me/about.jpeg',
      technologies: ['React', 'Next.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Cypress', 'Storybook', 'Git'],
      liveUrl: 'https://example.com/kibaku',
      githubUrl: 'https://github.com/username/kibaku'
    },
    {
      title: 'Kibaku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      image: 'assets/images/me/hero.jpeg',
      technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Cypress', 'Storybook', 'Git'],
      liveUrl: 'https://example.com/kibaku',
      githubUrl: 'https://github.com/username/kibaku'
    },
    {
      title: 'Kibaku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      image: 'assets/images/me/hero.jpeg',
      technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Cypress', 'Storybook', 'Git'],
      liveUrl: 'https://example.com/kibaku',
      githubUrl: 'https://github.com/username/kibaku'
    }
  ];
}
