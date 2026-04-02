import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '@core/services/language.service';
import { getWorksStaticData } from '@core/utils/work.utils';
import { Work } from '@models/interfaces';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  private staticData = getWorksStaticData();

  constructor(public languageService: LanguageService) {}

  get works(): Work[] {
    const translations = this.languageService.translations.work.list;
    return translations.map((translation: any, index: number) => ({
      ...translation,
      ...this.staticData[index]
    }));
  }
}
