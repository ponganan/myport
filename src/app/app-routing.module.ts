import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMyapp1Component } from './components/add-myapp1/add-myapp1.component';
import { Myapp1DetailsComponent } from './components/myapp1-details/myapp1-details.component';
import { Myapp1ListComponent } from './components/myapp1-list/myapp1-list.component';
import { PortpageComponent } from './pages/portpage/portpage.component';
import { ChatComponent } from './pages/chat/chat.component'

//Routes for myapp1
const routes: Routes = [

  // for redirect
  // { path: '', redirectTo: 'portpage', pathMatch: 'full' },
  { path: '', component: PortpageComponent },


  { path: 'myapp1', component: Myapp1ListComponent },
  { path: 'myapp1/:id', component: Myapp1DetailsComponent },
  { path: 'myapp1/add', component: AddMyapp1Component },
  { path: 'chat', component: ChatComponent },

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
