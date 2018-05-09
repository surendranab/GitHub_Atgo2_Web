import { Component, OnInit, OnDestroy }         from '@angular/core';
import { Router, ParamMap, ActivatedRoute }     from '@angular/router';
import { LeftsideNavService }                    from './leftsidenav.service';
import { LeftsideNavModel }                      from './leftsidenav.model';
// import { DataService }                       from '../../shared/services/data.service';
import { routeUrl }                             from '../../app.config';
  
@Component({
    selector: 'app-LeftsideNav',
    templateUrl: './leftsidenav.component.html'    
  })

  export class LeftsideNavComponent implements OnDestroy {
    leftsideNavData: LeftsideNavModel;  
    version: any;
    sessionExist : false;
    notifyObjSub: any;

    constructor(public leftsideNavService: LeftsideNavService, private router: Router) { //, private validationService: ValidationService
      this.leftsideNavData = {
        NavId: 0,
        NavName:'',
        NavIconPath: '',
        NavLink: '',
        NavTooltip: '',
        SubNavItems: []        
      };
      
      // if (this.siteheaderService.checkTokenExist()) {
      //      //this.getVersion();
      this.GetLeftNav();
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
       
    GetLeftNav() {      
          this.leftsideNavService.getLeftsideNavData()
          .map((response) => {
            const leftsideNavData = response.json() && response.json().leftsideNav;
            if (leftsideNavData) {
              localStorage.setItem('leftsideNav', JSON.stringify({
                leftsideNavItems: this.leftsideNavData                
              }));
              return response.json();
            }
          });
        }
  };



      
        
          