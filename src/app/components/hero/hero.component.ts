import { SocialLink } from '@models/interfaces';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getSocialLinks } from '@core/utils/socials-link.utils';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  socialLinks: SocialLink[] = getSocialLinks();

}
