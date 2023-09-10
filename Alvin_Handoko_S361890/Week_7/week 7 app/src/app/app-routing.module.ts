import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { CampuslistComponent } from './campuslist/campuslist.component';
import { EventlistComponent } from './eventlist/eventlist.component';

const routes:Routes =[
  {path: 'students', component: StudentlistComponent},
  {path: 'units', component: UnitListComponent},
  {path: 'campuses', component: CampuslistComponent},
  {path: 'events', component: EventlistComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
