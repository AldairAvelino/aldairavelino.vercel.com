import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '@core/services/language.service';
import { getExperiencesStaticData } from '@core/utils/experience.utils';
import { Experience } from '@models/interfaces';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private staticData = getExperiencesStaticData();

  constructor(public languageService: LanguageService) {}

  get experiences(): Experience[] {
    const translations = this.languageService.translations.experience.list;
    return translations.map((translation: any, index: number) => ({
      ...translation,
      ...this.staticData[index]
    }));
  }
}
