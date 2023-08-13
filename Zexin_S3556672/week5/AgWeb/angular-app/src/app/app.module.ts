import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserListService} from './user-list/user-list.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailComponent } from './email/email.component';
import { EmailService } from './email/email.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserListService,EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
