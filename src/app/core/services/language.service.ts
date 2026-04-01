import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'pt' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<Language>('en');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

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
    localStorage.setItem('language', lang);
    // Here we can trigger any global language change logic if needed
    // such as updating the lang attribute on the html element
    document.documentElement.lang = lang;
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }
}
