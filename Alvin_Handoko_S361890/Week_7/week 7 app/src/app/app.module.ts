import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { UnitListComponent } from './unit-list/unit-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitInputComponent } from './unit-input/unit-input.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortlistComponent } from './unit-list/sortlist/sortlist.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule, } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogEditComponent } from './unit-list/sortlist/dialog-edit/dialog-edit.component';
import { DialogDeleteComponent } from './unit-list/sortlist/dialog-delete/dialog-delete.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentinputComponent } from './studentinput/studentinput.component';
import { StudentsortlistComponent } from './studentlist/studentsortlist/studentsortlist.component';
import { StudentDialogDeleteComponent } from './studentlist/studentsortlist/student-dialog-delete/student-dialog-delete.component';
import { StudentDialogEditComponent } from './studentlist/studentsortlist/student-dialog-edit/student-dialog-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CampusinputComponent } from './campusinput/campusinput.component';
import { CampuslistComponent } from './campuslist/campuslist.component';
import { CampussortlistComponent } from './campuslist/campussortlist/campussortlist.component';
import { CampusDialogDeleteComponent } from './campuslist/campussortlist/campus-dialog-delete/campus-dialog-delete.component';
import { CampusDialogEditComponent } from './campuslist/campussortlist/campus-dialog-edit/campus-dialog-edit.component';

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
    MatSlideToggleModule


    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
