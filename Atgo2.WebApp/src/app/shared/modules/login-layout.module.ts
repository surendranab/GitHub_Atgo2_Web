import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule }      from '@angular/material/dialog';
import { LoginLayoutComponent } from '../components/login-layout.component';
import { LoginComponent } from '../../modules/login/login.component';
import { LoginRoutingModule } from '../../modules/login/login-routing.module';
import { ForgotPasswordDialogComponent } from '../../modules/forgotpasswordialog/forgotpassword-dialog.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    MatDialogModule
  ],
  declarations: [ LoginLayoutComponent, LoginComponent, ForgotPasswordDialogComponent ], 
  exports: [ LoginLayoutComponent, LoginComponent, ForgotPasswordDialogComponent ],
  entryComponents: [ForgotPasswordDialogComponent]
})
export class LoginLayoutModule { }
