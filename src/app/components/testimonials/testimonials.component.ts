import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '@core/services/language.service';
import { getTestimonialsStaticData } from '@core/utils/testimonials.utils';
import { Testimonial } from '@models/interfaces';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  private staticData = getTestimonialsStaticData();

  constructor(public languageService: LanguageService) {}

  get testimonials(): Testimonial[] {
    const translations = this.languageService.translations.testimonials.list;
    return translations.map((translation: any, index: number) => ({
      ...translation,
      ...this.staticData[index]
    }));
  }
}
