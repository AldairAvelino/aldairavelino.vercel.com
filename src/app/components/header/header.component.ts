import { Component, HostListener, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeService } from '@core/services/theme.service';
import { LanguageService, Language } from '@core/services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('200ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('200ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 150ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('150ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('100ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  isMobile = false;
  isLanguageDropdownOpen = false;

  constructor(
    public themeService: ThemeService,
    public languageService: LanguageService,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }

  get translations() {
    return this.languageService.translations;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isLanguageDropdownOpen = false;
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: Event) {
    this.isLanguageDropdownOpen = false;
    if (this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.isLanguageDropdownOpen = false;

    // Prevent scrolling when menu is open
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';

    // Force change detection to render the menu items immediately
    this.cdr.detectChanges();
  }

  toggleLanguageDropdown() {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  setLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
    this.isLanguageDropdownOpen = false;
  }

  ngOnDestroy() {
    // Clean up event listener
    window.removeEventListener('resize', () => this.checkMobile());
  }
}
