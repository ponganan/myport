import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { FormsModule } from '@angular/forms';
//
import { MatCardModule } from '@angular/material/card';
// 
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

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
import { ShowprojectComponent } from './showproject/showproject.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({ declarations: [
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
        ShowprojectComponent,
        LoginComponent,
        UserInfoComponent,
    ],
    exports: [
        // Optional: If component is used in other modules
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
        ShowprojectComponent
    ], imports: [CommonModule,
        FormsModule,
        MatCardModule], providers: [
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class PageModule { }
