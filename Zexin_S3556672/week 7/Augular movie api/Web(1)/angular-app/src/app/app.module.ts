import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserListService} from './user-list/user-list.service';
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
import { UserDialogComponent } from './user-dialog/user-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    EmailComponent,
    UserDialogComponent
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
    MatDialogModule
  ],
  providers: [UserListService,EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
