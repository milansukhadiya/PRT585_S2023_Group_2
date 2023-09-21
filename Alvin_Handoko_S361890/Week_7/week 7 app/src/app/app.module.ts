import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitInputComponent } from './unit-input/unit-input.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortlistComponent } from './unit-list/sortlist/sortlist.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogEditComponent } from './unit-list/sortlist/dialog-edit/dialog-edit.component';
import { DialogDeleteComponent } from './unit-list/sortlist/dialog-delete/dialog-delete.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentinputComponent } from './studentinput/studentinput.component';
import { StudentsortlistComponent } from './studentlist/studentsortlist/studentsortlist.component';
import { StudentDialogDeleteComponent } from './studentlist/studentsortlist/student-dialog-delete/student-dialog-delete.component';
import { StudentDialogEditComponent } from './studentlist/studentsortlist/student-dialog-edit/student-dialog-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CampusinputComponent } from './campusinput/campusinput.component';
import { CampuslistComponent } from './campuslist/campuslist.component';
import { CampussortlistComponent } from './campuslist/campussortlist/campussortlist.component';
import { CampusDialogDeleteComponent } from './campuslist/campussortlist/campus-dialog-delete/campus-dialog-delete.component';
import { CampusDialogEditComponent } from './campuslist/campussortlist/campus-dialog-edit/campus-dialog-edit.component';
import { ClassroomlistComponent } from './classroom/classroomlist.component';
import { ClassroominputComponent } from './classroominput/classroominput.component';
import { ClassroomsortlistComponent } from './classroom/classroomsortlist/classroomsortlist.component';
import { ClassroomDialogDeleteComponent } from './classroom/classroomsortlist/classroom-dialog-delete/classroom-dialog-delete.component';
import { ClassroomDialogEditComponent } from './classroom/classroomsortlist/classroom-dialog-edit/classroom-dialog-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { ScorelistComponent } from './score/scorelist.component';
import { ScoreinputComponent } from './scoreinput/scoreinput.component';
import { ScoresortlistComponent } from './score/scoresortlist/scoresortlist.component';
import { ScoreDialogDeleteComponent } from './score/scoresortlist/score-dialog-delete/score-dialog-delete.component';
import { ScoreDialogEditComponent } from './score/scoresortlist/score-dialog-edit/score-dialog-edit.component';
import { MatCardModule } from '@angular/material/card';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventinputComponent } from './eventinput/eventinput.component';
import { EventsortlistComponent } from './eventlist/eventsortlist/eventsortlist.component';
import { EventDialogDeleteComponent } from './eventlist/eventsortlist/event-dialog-delete/event-dialog-delete.component';
import { EventDialogEditComponent } from './eventlist/eventsortlist/event-dialog-edit/event-dialog-edit.component';
import { EnrollmentDialogEditComponent } from './enrollment/enrollment-dialog-edit/enrollment-dialog-edit.component';
import { EnrollmentDialogDeleteComponent } from './enrollment/enrollment-dialog-delete/enrollment-dialog-delete.component';
import { EnrollmentDialogAddComponent } from './enrollment/enrollment-dialog-add/enrollment-dialog-add.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodyComponent } from './body/body.component';
import { StudentdetailsComponent } from './studentlist/studentdetails/studentdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnitListComponent,
    UnitInputComponent,
    SortlistComponent,
    DialogEditComponent,
    DialogDeleteComponent,
    StudentlistComponent,
    StudentinputComponent,
    StudentsortlistComponent,
    StudentDialogDeleteComponent,
    StudentDialogEditComponent,
    NavbarComponent,
    CampusinputComponent,
    CampuslistComponent,
    CampussortlistComponent,
    CampusDialogDeleteComponent,
    CampusDialogEditComponent,
    ClassroomlistComponent,
    ClassroominputComponent,
    ClassroomsortlistComponent,
    ClassroomDialogDeleteComponent,
    ClassroomDialogEditComponent,
    ScorelistComponent,
    ScoreinputComponent,
    ScoresortlistComponent,
    ScoreDialogDeleteComponent,
    ScoreDialogEditComponent,
    EnrollmentComponent,
    EnrollmentDialogEditComponent,
    EnrollmentDialogDeleteComponent,
    EnrollmentDialogAddComponent,
    EventlistComponent,
    EventsortlistComponent,
    EventinputComponent,
    EventDialogDeleteComponent,
    EventDialogEditComponent,
    SidenavbarComponent,
    BodyComponent,
    StudentdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
