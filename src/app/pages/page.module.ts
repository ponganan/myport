import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { FormsModule } from '@angular/forms';
//


//
import { PersonalInformationComponent } from '../pages/personal-information/personal-information.component';
import { BannerComponent } from '../pages/banner/banner.component';
import { EducationComponent } from '../pages/education/education.component';
import { WorkExperienceComponent } from '../pages/work-experience/work-experience.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ResponsiveDirective } from '../shared/directives/responsive.directive';
import { UserInputComponent } from '../pages/user-input/user-input.component';
import { PortpageComponent } from './portpage/portpage.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    PersonalInformationComponent,
    BannerComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ResponsiveDirective,
    UserInputComponent,
    PortpageComponent,
    ChatComponent,
  ],
  exports: [
    PersonalInformationComponent,
    BannerComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ResponsiveDirective,
    UserInputComponent,
    PortpageComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class PageModule { }
