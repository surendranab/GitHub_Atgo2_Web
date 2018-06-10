import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router }                   from '@angular/router';
import { FormsModule, ReactiveFormsModule }              from '@angular/forms';
import { AppRoutingModule }         from './app-routing.module';
import { HttpServiceModule }        from './shared/modules/http.module';
import { MatDialogModule }      from '@angular/material/dialog';
// import { BsModalModule }         from 'ng2-bs3-modal/ng2-bs3-modal';
// import { MyDatePickerModule }         from 'mydatepicker';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

import { AppComponent }             from './app.component';
import { AppLayoutComponent }       from './shared/components/app-layout.component';
//import { LoginComponent } from './modules/login/login.component';
//import { LoginModule } from './modules/login/login.module';

import { EmptyRouteComponent }      from './shared/components/empty-route.component';
import { ValidationService }        from './shared/services/validation.service';
import { ConfirmPromptModule }      from './shared/modules/confirm-prompt.module';
import { LoginLayoutComponent }     from './shared/components/login-layout.component';
import { ForgotPasswordDialogComponent } from './modules/forgotpasswordialog/forgotpassword-dialog.component';
// import { DashboardLayoutComponent } from './shared/components/dashboard-layout.component';
import { DashboardComponent }       from './modules/dashboard/dashboard.component';
import { QuoteSearchComponent }     from './modules/quote/component/quote-search.component';
import { SiteheaderComponent }      from './modules/siteheader/siteheader.component';
import { SiteheaderService }        from './modules/siteheader/siteheader.service';
import { LeftsideNavComponent }     from './modules/leftsidenav/leftsidenav.component';
import { LeftsideNavService }       from './modules/leftsidenav/leftsidenav.service';
import { MaincontainerComponent }   from './modules/maincontainer/maincontainer.component';
import { MaincontainerModule }      from './modules/maincontainer/maincontainer.module';
import { environment }              from '../environments/environment';
import { HttpService }              from './shared/services/http.service';
import { LoginLayoutModule }        from './shared/modules/login-layout.module';
import { LoginService }             from './modules/login/login.service';
import { RoleAccessService }        from './shared/services/role-access.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    EmptyRouteComponent,
    //LoginComponent,
    //LoginLayoutComponent,
    //DashboardLayoutComponent,    
    SiteheaderComponent,
    LeftsideNavComponent,
    DashboardComponent,
    QuoteSearchComponent  
    //MaincontainerComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    //BsModalModule,
    AngularDateTimePickerModule,
    MatDialogModule,
    HttpServiceModule,
    MaincontainerModule,
    LoginLayoutModule
  ],
  providers: [RoleAccessService, SiteheaderService, LeftsideNavService, LoginService],
  bootstrap: [AppComponent],
  exports: [SiteheaderComponent, LeftsideNavComponent, MaincontainerComponent, DashboardComponent, QuoteSearchComponent]
})
export class AppModule { }
