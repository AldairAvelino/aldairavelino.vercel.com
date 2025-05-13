import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '@models/interfaces';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Frontend Developer',
      company: 'Aldair Avelino',
      logo: 'assets/images/logo.svg',
      startDate: 'Nov 2021',
      endDate: 'Present',
      responsibilities: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Ut pretium arcu et massa semper, id fringilla leo semper.',
        'Sed quis justo ac magna.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'Aldair Avelino',
      logo: 'assets/images/logo.svg',
      startDate: 'Jul 2017',
      endDate: 'Oct 2021',
      responsibilities: [
        'Sed quis justo ac magna.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed quis justo ac magna.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ]
    },
    {
      title: 'FullStack Developer',
      company: 'Aldair Avelino',
      logo: 'assets/images/logo.svg',
      startDate: 'Dec 2015',
      endDate: 'May 2017',
      responsibilities: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ]
    },
    {
      title: 'UX/UI Designer',
      company: 'Aldair Avelino',
      logo: 'assets/images/logo.svg',
      startDate: 'Dec 2015',
      endDate: 'May 2017',
      responsibilities: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ]
    }
  ];
}
