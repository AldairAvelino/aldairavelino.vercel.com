import { SocialLink } from '@models/interfaces';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getSocialLinks } from '@core/utils/socials-link.utils';
import { getRandomPhoto } from '@core/utils/random-photo.util';
import { LanguageService } from '@core/services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  randomPhotos: string[] = [
    "assets/images/me/hero.jpeg",
    "assets/images/me/blue-shirt.jpg"
  ];

  selectedPhoto!: string;
  socialLinks: SocialLink[] = getSocialLinks();

  constructor(public languageService: LanguageService) {}

  get translations() {
    return this.languageService.translations;
  }

  ngOnInit(): void {
    this.selectedPhoto = getRandomPhoto(
      this.randomPhotos,
      'hero'
    );
  }
}
