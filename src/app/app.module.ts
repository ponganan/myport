import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//test real time chat
//import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';



import { AppComponent } from './app.component';
import { PageModule } from './pages/page.module';
import { authInterceptor } from './core/interceptors/auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,

    //test real time chat
    // HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    //provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
