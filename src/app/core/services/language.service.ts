import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TRANSLATIONS } from '../constants/translations';

export type Language = 'pt' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<Language>('en');
  currentLanguage$ = this.currentLanguageSubject.asObservable();
  translations: any;

  constructor() {
    this.loadLanguage();
  }

  private loadLanguage() {
    const savedLanguage = localStorage.getItem('language') as Language;
    const initialLanguage = savedLanguage || 'en';
    this.setLanguage(initialLanguage);
  }

  setLanguage(lang: Language) {
    this.currentLanguageSubject.next(lang);
    this.translations = TRANSLATIONS[lang];
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }
}
