import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkTheme.asObservable();

  constructor() {
    this.loadTheme();
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

    this.setTheme(isDark);
  }

  toggleTheme() {
    this.setTheme(!this.isDarkTheme.value);
  }

  private setTheme(isDark: boolean) {
    this.isDarkTheme.next(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }
}
