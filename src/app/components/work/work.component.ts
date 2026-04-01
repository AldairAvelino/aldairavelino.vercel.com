import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '@core/services/language.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  constructor(public languageService: LanguageService) {}

  get works() {
    return this.languageService.translations.work.list;
  }
}
