import { Component } from '@angular/core';
import { Project } from '../../core/models/interface/models';

@Component({
  selector: 'myport-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'PS Music Player ',
      technologies: 'Flutter',
      description: [
        'Building application with Flutter 3.3.8',
        'Use Audioplayers package'
      ]
    },
    {
      title: 'PS Music Player ',
      technologies: 'Flutter',
      description: [
        'Building application with Flutter 3.3.8',
        'Use Audioplayers package'
      ]
    }
  ]

}
