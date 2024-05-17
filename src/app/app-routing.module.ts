import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortpageComponent } from './pages/portpage/portpage.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LoginComponent } from './pages/login/login.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { authGuard } from './core/guards/auth.guard';

//Routes for myapp1
const routes: Routes = [

  // for redirect
  // { path: '', redirectTo: 'portpage', pathMatch: 'full' },
  { path: '', component: PortpageComponent },


  // { path: 'myapp1', component: Myapp1ListComponent },
  // { path: 'myapp1/:id', component: Myapp1DetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'userinfo', component: UserInfoComponent, canActivate: [authGuard] },

  { path: 'portpage', component: PortpageComponent },

  // if 404 Not Found redirect to xxxxpage. use "**" path
  // have to use in the end of code 
  { path: "**", redirectTo: 'portpage' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
