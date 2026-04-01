import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getRandomPhoto } from '@core/utils/random-photo.util';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  randomPhotos: string[] = [
    "assets/images/me/about.jpeg",
    "assets/images/me/coat.jpg",
  ];

  selectedPhoto!: string;

  ngOnInit(): void {
    this.selectedPhoto = getRandomPhoto(
      this.randomPhotos,
      'about'
    );
  }

}
