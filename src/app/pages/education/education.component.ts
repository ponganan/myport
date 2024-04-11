import { Component } from '@angular/core';
import { Education } from '../../core/models/models';

@Component({
  selector: 'myport-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'Ubonratchathani University',
      course: 'B.S. in Computer Science',
      duration: '2005',
      score: '80%'
    },
    {
      institute: 'Mukdahan School, Mukdahan',
      course: 'High School',
      duration: '2001',
      score: '70%'
    },
  ];

}
