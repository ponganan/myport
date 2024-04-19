import { Component } from '@angular/core';
import { WorkExperience } from '../../core/models/interface/models';

@Component({
  selector: 'myport-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'The Mos Idea Back Office',
      company: 'The Mos Idea Limited Partnership',
      duration: '03/2010 - 02/2022',
      description: [
        'Designed, developed and maintained back office',
        'application and created invoice/packing list system',
        'for submit the import declaration and all',
        'supporting documents to Customs officials at Mukdahan port.',
      ],
    },
    {
      role: 'The Mos Idea Back Office',
      company: 'The Mos Idea Limited Partnership',
      duration: '03/2010 - 02/2022',
      description: [
        'Designed, developed and maintained back office',
        'application and created invoice/packing list system',
        'for submit the import declaration and all',
        'supporting documents to Customs officials at Mukdahan port.',
      ],
    }
  ]

}
