import { Component } from '@angular/core';

@Component({
  selector: 'myport-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss'
})
export class PersonalInformationComponent {

  myData: string[][] = [
    ['Name', 'Ponganan Saensuk'],
    ['Date of birth', '10/08/1983'],
    ['Work Exp', '15 Years'],
    ['Education', 'UBU (2005)'],
    ['Interrests', 'AI'],
  ]
  aboutMe: string[] = [
    'I am a highly motivated software developer with extensive experience.',
    'Seeking a challenging opportunity to contribute to cutting-edge technological advancements.',
    'Possesses a strong track record of innovation and a continuous learning mindset,',
    'allowing for rapid adaptation to new technologies and environments.'
  ]
}
