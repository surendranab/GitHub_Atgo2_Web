import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SiteheaderComponent } from '../../modules/siteheader/siteheader.component';
import { MaincontainerComponent } from '../../modules/maincontainer/maincontainer.component';
import { HttpService } from '../../shared/services/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { ApiEndPointService } from '../../shared/services/api-end-point.service';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { RoleAccessService } from '../services/role-access.service';
// import {
//   userActions,
//   roles,
//   moduleName,
//   systemSettings,
//   routeUrl
// } from '../../app.config';
// import {
//   HostListener,
//   Inject
// } from '@angular/core';
// import {
//   environment
// } from '../../../environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: '../views/app-layout.component.html',
  styleUrls: ['../styles/app-layout.component.less']
})

export class AppLayoutComponent implements OnInit {
  title = 'app-Layout';
  
  loginClass1:string = 'flex-row';
  loginClass2:string = 'align-items-center';
  dashClass1:string = 'header-fixed';
  dashClass2:string = 'sidebar-fixed';
  dashClass3:string = 'aside-menu-fixed';
  dashClass4:string = 'sidebar-lg-show';
  dashClass5:string = 'pace-done';
  
    ngOnInit(): void {        
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove(this.loginClass1);   //remove the class
        body.classList.remove(this.loginClass2);   //remove the class
        body.classList.add(this.dashClass1);   //add the class
        body.classList.add(this.dashClass2);   //add the class
        body.classList.add(this.dashClass3);   //add the class
        body.classList.add(this.dashClass4);   //add the class
        body.classList.add(this.dashClass5);   //add the class
    }    
 }


// export class AppLayoutComponent implements AfterViewInit {
//   username: string;
//   showEula: boolean;
//   showApp: boolean;
//   routeUrl: any;
//   showPromptLayout: boolean;
//   showPromptLay: boolean;
//   isPatientAccess: boolean;
//   isMoveAccess: boolean;
//   isReportAccess: boolean;
//   isSettingsTabAccess: boolean;
//   modulename: any;
//   helpUrl: string;
//   moveHighlite: boolean;

//  ngAfterViewInit() {
//     this.moveHighlite = true;
//  }

//   constructor(private router: Router, private http: HttpService, private url: ApiEndPointService, private idle: Idle,
//     private roleAccessService: RoleAccessService, public validationService: ValidationService,
//     private route: ActivatedRoute) {
//     const currentUser = JSON.parse(localStorage.getItem('currentUser'));
//     this.showEula = !currentUser.eula;
//     this.showApp = !this.showEula;
//     this.username = currentUser && currentUser.username;
//     this.showPromptLayout = false;    
//     this.modulename = moduleName;
//     this.getIdleTimeout();
//     this.helpUrl = null;
//     //this.getHelpFileLink();
//     this.moveHighlite = false;
//   }

  // getHelpFileLink() {
  //   this.http.get(this.url.HelpDocLink).subscribe(
  //     (response: any) => {
  //       this.helpUrl = response.json().value;
  //     },
  //     (error: any) => {
  //       this.helpUrl = null;
  //     }
  //   );
  // }

  // checkRouter(name, isAccess) {
  //   if (this.router.url.includes(name) && isAccess) {
  //     switch (name) {
  //       case routeUrl.quote:
  //         this.checkRouteQuote();
  //         break;       
  //       case routeUrl.report:
  //         this.validationService.enableLink = 9;
  //         break;
  //       case routeUrl.setting:
  //         this.validationService.enableLink = 7;
  //         break;
  //     }
  //   }
  // }

  // checkRouteQuote() {
  //   if (this.validationService.themeSelected) {
  //     this.validationService.enableLink = 6;
  //   } else if (this.validationService.filterApplied) {
  //     this.validationService.enableLink = 5;
  //   } else if (this.validationService.isMoveRequestSrc && this.isMoveAccess) {
  //     this.validationService.enableLink = 3;
  //   } else {
  //     this.validationService.enableLink = 1;
  //   }
  // }

  // getIdleTimeout() {
  //   this.validationService.busy = this.http.get(this.url.SessionTimeout).subscribe(
  //     (response: any) => {
  //       const sessionTimeoutSeconds = Number.parseInt(response.json().value);
  //       this.idle.setIdle(sessionTimeoutSeconds);
  //       this.idle.setTimeout(1);
  //       this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
  //       this.idle.onTimeout.subscribe(() => {
  //         this.onYes(true);
  //       });
  //       this.idle.watch();
  //     },
  //     (error: Error) => {
  //       this.validationService.exceptionHappened(error);
  //       throw {
  //         'Error': error,
  //         'Message': 'SessionTimeout not loaded'
  //       };
  //     }
  //   );
  // }

  // onYes(timeout) {
  //   this.validationService.showPrompt = false;
  //   this.validationService.isFormDirty = false;
  //   this.logout(timeout);
  // }

  // logout(timeout) {
  //   this.idle.stop();
  //   this.validationService.logout(timeout);
  // }

  // acceptEula() {
  //   this.showEula = false;
  //   this.showApp = true;
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   currentUser.eula = true;
  //   localStorage.setItem('currentUser', JSON.stringify(currentUser));
  //   this.http.get(this.url.UpdateUserEula + '/' + currentUser.username).subscribe();
  // }

  // rejectEula() {
  //   this.showApp = false;
  // }

  // isHomeEnable() {
  //     this.router.navigate([routeUrl.empty]);
  //   if (this.validationService.isMoveEnable) {
  //     this.validationService.enableLink = 3;
  //     this.validationService.searchText = null;
  //     this.validationService.bbvSearch = false;
  //     this.validationService.moveSelectedInHome = true;
  //     this.validationService.themeSelected = false;
  //     this.validationService.filterApplied = false;
  //     this.validationService.isHomeEnable = true;
  //   } else {
  //     this.validationService.moveClearBorders();
  //     this.validationService.defaultFlags();
  //     this.validationService.selectedFilters = [];
  //     this.validationService.isHomeEnable = true;
  //     this.validationService.enableLink = 1;
  //     this.validationService.ptDisabledSearch();
  //     this.validationService.ptDisabledSearchBtn = false;
  //     this.validationService.moveSelectedInHome = false;
  //   }
  // }

  // navigate(route) {
  //   this.routeUrl = route;
  //   if (this.validationService.isFormDirty) {
  //     this.showPromptLayout = true;
  //     return;
  //   }
  //   this.navigateRoute();
  // }

  // navigateRoute() {
  //   this.validationService.isFormDirty = false;
  //   this.showPromptLayout = false;
  //   switch (this.routeUrl) {
  //     case moduleName.quote:
  //       //this.isHomeEnable();
  //       break;      
  //     case moduleName.settings:
  //       //this.isTabsEnable();
  //       break;
  //   }
  // }

  // openHelp() {
  //   window.open(this.helpUrl);
  // }
//}
