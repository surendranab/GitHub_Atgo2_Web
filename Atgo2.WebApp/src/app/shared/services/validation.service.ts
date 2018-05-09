import {
    Injectable
  } from '@angular/core';
//   import {
//     ThemeService
//   } from '../../modules/theme/services/theme.service';
//   import {
//     LookupService
//   } from './lookup.service';
  import {
    ApiEndPointService
  } from './api-end-point.service';
  import {
    userActions,
    systemSettings,
    roles
  } from '../../app.config';
//   import {
//     RoleAccessService
//   } from './role-access.service';
  import * as moment from 'angular2-moment';
  import {
    Router
  } from '@angular/router';
  import {
    HttpService
  } from './http.service';
  import {
    routeUrl
  } from '../../app.config';

  @Injectable()
export class ValidationService {
  isFormDirty = false;
  themeName = '';
  showPrompt: boolean;
  isHomeEnable: boolean;
  appliedTheme: null;
  isExceptionRaised: false;
  busy: any;

  //private themeService: ThemeService, private lookupService: LookupService, private roleAccessService: RoleAccessService, 
  constructor( private apiUrl: ApiEndPointService, private router: Router, private http: HttpService) {
    this.appliedTheme = null;
  }

  defaultFlags() {
    this.isHomeEnable = false;
  }

  logout(timeout) {
    this.defaultFlags();    
    if (this.isFormDirty) {
      this.showPrompt = true;
    } else {
      const url = timeout ? this.apiUrl.SystemLogout : this.apiUrl.UserLogout;
      this.http.get(url).subscribe(
        (response: any) => {
          localStorage.clear();
          this.router.navigate([routeUrl.login]);
        },
        (error: any) => {
          localStorage.clear();
          this.router.navigate([routeUrl.login]);
          throw {
            'Error': error,
            'Message': 'Logout not happened'
          };
        }
      );     
    }
  }

  logoutIfForbidden(error) {
    if (error.status === 403) {
      this.isFormDirty = false;
      this.logout(true);
    }
  }

  exceptionHappened(error) {
    this.logoutIfForbidden(error);
    if (error.status !== 412 && !(error._body && error._body.exceptionType === 'SqlUniqueKeyException')) {
      this.isExceptionRaised = false;
      setTimeout(() => {
        this.isExceptionRaised = false;
      }, 2000);
    }
  }
}