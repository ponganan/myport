import { Component } from '@angular/core';

@Component({
  selector: 'myport-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss'
})
export class PersonalInformationComponent {

  myData: string[][] = [
    ['Name', 'Ponganan Saensuk'],
    ['DOB', '10/08/1983'],
    ['Work Exp', '15 Years'],
    ['Education', 'UBU (2005)'],
    ['Interrests', 'Football'],
  ]
  aboutMe: string[] = [
    'I am a developer with extensive experience and seeking for a challenge',
    'where I can produce new technologies and innovation.',
    'I am an adaptive and self growth mindset.'
  ]
}
