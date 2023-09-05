import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserListService} from './user-list/user-list.service';

import { MovieListComponent } from './movie-list/movie-list.component';
import {MovieListService} from './movie-list/movie-list.service';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { EmailComponent } from './email/email.component';
import { EmailService } from './email/email.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    EmailComponent,
    UserDialogComponent,
    MovieDialogComponent,
    MovieListComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [UserListService,EmailService,MovieListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
