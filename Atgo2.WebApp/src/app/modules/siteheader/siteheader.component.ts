import { Component, OnInit, OnDestroy }         from '@angular/core';
import { Router, ParamMap, ActivatedRoute }     from '@angular/router';
import { SiteheaderService }                    from './siteheader.service';
import { SiteheaderModel }                      from './siteheader.model';
// import { DataService }                       from '../../shared/services/data.service';
import { routeUrl }                             from '../../app.config';
  
@Component({
    selector: 'app-Siteheader',
    templateUrl: './siteheader.component.html'    
  })

  export class SiteheaderComponent implements OnDestroy {
    headerData: SiteheaderModel;  
    version: any;
    sessionExist : false;
    notifyObjSub: any;

    constructor(public siteheaderService: SiteheaderService, private router: Router) { //, private validationService: ValidationService
      this.headerData = {
        siteId: 0,
        siteName: '',
        siteLogoIconPath: '',
        siteLogoTooltip: '',
        siteLogoLink: '',
        siteBrandName: '',
        siteHeaderItems: [],
        UserDisplayName: '',
        LoggedInUserId: 0
      };
      
      // if (this.siteheaderService.checkTokenExist()) {
      //      //this.getVersion();
      this.GetMenus();
      //  } //else {
      //   this.router.navigate([routeUrl.login]);
      // }
    }
        
    ngOnDestroy() {
      if (this.notifyObjSub) {
        this.notifyObjSub.unsubscribe();
      }
    }
  
    clearReadonly(event) {
      event.target.focus();
      event.target.blur();
      event.target.focus();
    }
  
    // getVersion() {
    //   this.loginService.getVersion().subscribe(
    //     (response: any) => {
    //       if (response.json()) {
    //         this.version = response.json().value;
    //       }
    //     },
    //     (error: any) => {
    //       //this.validationService.exceptionHappened(error);
    //       throw {
    //         'Error': error,
    //         'Message': 'Version not loaded'
    //       };
    //     }
    //   );
    // }
       
    GetMenus() {      
          this.siteheaderService.getSiteHeaderData()
          .map((response) => {
            const headerData = response.json() && response.json().headerData;
            if (headerData) {
              localStorage.setItem('headerData', JSON.stringify({
                username: this.headerData.UserDisplayName.toLowerCase(),                
                roles: response.json().role,
                access: response.json().permission
              }));
              return response.json();
            } 
          });        
        }
  };



      
        
          