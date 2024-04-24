import { Component } from '@angular/core';
import { Skill } from '../../core/models/interface/models';

@Component({
  selector: 'myport-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: 'Intermediate',
      rating: 85,
    },
    {
      name: 'NodeJS',
      level: 'Intermediate',
      rating: 85,
    },
    {
      name: 'MongoDB, MySQL',
      level: 'Intermediate',
      rating: 80,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermediate',
      rating: 80,
    },
    {
      name: 'JAVA',
      level: 'Intermediate',
      rating: 80,
    },
    {
      name: 'Linux Debian',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'DART, Flutter',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'GCP, AWS EC2',
      level: 'Beginner',
      rating: 65,
    },
    {
      name: 'Deployment',
      level: 'Beginner',
      rating: 65,
    },
  ]

}
