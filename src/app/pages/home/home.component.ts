import { Component, ElementRef } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private themeService: ThemeService, private elRef: ElementRef) {}

  ngAfterViewInit() {
    // Suscribirse a los cambios en el tema y actualizar la clase del `section`
    this.themeService.isDarkTheme$.subscribe((isDark) => {
      const homeSection = this.elRef.nativeElement.querySelector('#home');
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

  scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
