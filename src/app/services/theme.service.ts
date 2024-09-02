import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(this.getInitialTheme());
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();

  private getInitialTheme(): boolean {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleTheme() {
    const newTheme = !this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(newTheme);
    
    // Actualiza la clase del body
    const body = document.body;
    if (newTheme) {
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
    }
  
    // Guarda el tema seleccionado en localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  }

  get isDarkTheme(): boolean {
    return this.isDarkThemeSubject.value;
  }
}