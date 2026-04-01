import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getRandomPhoto } from '@core/utils/random-photo.util';
import { LanguageService } from '@core/services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  randomPhotos: string[] = [
    "assets/images/me/about.jpeg",
    "assets/images/me/coat.jpg",
  ];

  selectedPhoto!: string;

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    this.selectedPhoto = getRandomPhoto(
      this.randomPhotos,
      'about'
    );
  }
}
