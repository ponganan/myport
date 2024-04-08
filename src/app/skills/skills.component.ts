import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'myport-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'JAVA, NodeJS',
      level: 'Intermidiate',
      rating: 69,
    },
    {
      name: 'DART, Flutter',
      level: 'Intermidiate',
      rating: 75,
    },
  ]

}
