import { Component, ElementRef } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  isDarkTheme = false;
  constructor(private themeService: ThemeService, private elRef: ElementRef) {}

  ngOnInit() {
    this.themeService.isDarkTheme$.subscribe((isDark) => {
      this.isDarkTheme = isDark;
      const homeSection = this.elRef.nativeElement.querySelector('footer');
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
  }
}
