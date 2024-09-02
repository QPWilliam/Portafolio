import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isDarkTheme = false;
  isMobileMenuOpen = false;
  currentLanguage = 'en';

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    this.themeService.isDarkTheme$.subscribe((isDark) => {
      this.isDarkTheme = isDark;
      const homeSection = this.elRef.nativeElement.querySelector('#navbar');
      if (homeSection) {
        if (isDark) {
          homeSection.classList.add('dark');
          homeSection.classList.remove('light');
        } else {
          homeSection.classList.add('light');
          homeSection.classList.remove('dark');
        }
      }
    });
    this.languageService.language$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isMobileMenuOpen = false;
  }
}
