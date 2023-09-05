import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import { EmailComponent } from './email/email.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  {path:"home",component:HomepageComponent},
  {path:"movie",component:MovieListComponent},
  {path:"userlist",component:UserListComponent},
  {path:"email",component:EmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
