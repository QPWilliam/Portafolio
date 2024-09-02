import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Skill } from '../../interfaces/skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  technicalSkills: Skill[] = [
    { name: 'Python', level: 60 },
    { name: 'JavaScript', level: 80 },
    { name: 'Node.js', level: 85 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'Angular', level: 70 },
    { name: 'React', level: 55 },
    { name: 'Ionic', level: 40 },
    { name: 'Git', level: 70 },
    { name: 'Docker', level: 60 },
    { name: 'Linux', level: 60 },
    { name: 'RESTful APIs', level: 90 },
    { name: 'SOAP', level: 75 },
    { name: 'AI/ML', level: 55 },
  ];

  databaseSkills: Skill[] = [
    { name: 'SQL', level: 75 },
    { name: 'MySQL/PostgreSQL', level: 70 },
    { name: 'MongoDB', level: 65 },
  ];

  softSkills: Skill[] = [
    { name: 'Comunicación', level: 85 },
    { name: 'Trabajo en Equipo', level: 80 },
    { name: 'Gestión del Tiempo', level: 75 },
    { name: 'Resolución de Problemas', level: 85 },
    { name: 'Multilingual (Spanish/English/Japanese)', level: 55 }
  ];
}
