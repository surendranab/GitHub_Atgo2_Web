import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
//import { ReactiveFormsModule, FormsModule }          from '@angular/forms';
//import { MatDialogModule }      from '@angular/material/dialog';
//import { HttpModule }           from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpServiceModule }    from '../../shared/modules/http.module';
import { LoginComponent }       from './login.component';
import { LoginService }         from './login.service';
import { LoginRoutingModule }   from './login-routing.module';
import { ConfirmPromptModule }  from '../../shared/modules/confirm-prompt.module';
import { ForgotPasswordDialogComponent } from '../forgotpasswordialog/forgotpassword-dialog.component';

  @NgModule({
    imports: [
      CommonModule,
      //BrowserModule,
      //FormsModule,
      //ReactiveFormsModule,
      HttpClientModule,
      HttpServiceModule,
      LoginRoutingModule,
      //MatDialogModule,
      ConfirmPromptModule,
      //BrowserAnimationsModule
    ],
    declarations: [LoginComponent, ForgotPasswordDialogComponent],
    providers: [LoginService],
    entryComponents: [LoginComponent, ForgotPasswordDialogComponent]
  })
  export class LoginModule {}
  