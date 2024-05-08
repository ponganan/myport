import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { FormsModule } from '@angular/forms';
//
import { MatCardModule } from '@angular/material/card';
// 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { LoginComponent } from '../pages/login/login.component';
import { AuthService } from '../core/services/auth/auth-service.service';
import { AuthInterceptor } from '../core/interceptors/auth/auth.interceptor';

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
    ShowprojectComponent,
    LoginComponent,
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

  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class PageModule { }
