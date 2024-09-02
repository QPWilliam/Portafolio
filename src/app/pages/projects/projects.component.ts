import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Bot Builder',
      description: 'A flowchart-based bot building interface with nodes connecting one-to-one.',
      image: 'assets/webp/project-1.webp',  // Reemplaza con la ruta correcta de la imagen
      demoUrl: 'https://example.com/demo1',
    },
    {
      title: 'WhatsApp Conversation Management',
      description: 'Manage and interact with WhatsApp conversations effectively.',
      image: 'assets/webp/project-2.webp',  // Reemplaza con la ruta correcta de la imagen
      demoUrl: 'https://example.com/demo2',
    },
    {
      title: 'RPG Game with Python and Twitch Integration',
      description: 'A 2D RPG game developed in Python using Pygame with Twitch integration.',
      image: 'assets/webp/project-3.webp',  // Reemplaza con la ruta correcta de la imagen
      demoUrl: 'https://example.com/demo3',
    },
  ];
}
