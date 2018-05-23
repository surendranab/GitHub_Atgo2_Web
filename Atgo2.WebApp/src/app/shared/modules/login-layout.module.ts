import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { BsModalModule } from 'ng2-bs3-modal';
import { LoginLayoutComponent } from '../components/login-layout.component';
import { LoginComponent } from '../../modules/login/login.component';
//import { LoginModule } from '../../modules/login/login.module';
import { LoginRoutingModule } from '../../modules/login/login-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    //BsModalModule,   
    //LoginModule //LoginRoutingModule
  ],
  declarations: [ LoginLayoutComponent, LoginComponent ], //LoginComponent
  exports: [ LoginLayoutComponent, LoginComponent ] // LoginComponent
})
export class LoginLayoutModule { }
