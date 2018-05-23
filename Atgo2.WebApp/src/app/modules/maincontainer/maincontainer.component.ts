import { Component, OnInit, OnDestroy }       from '@angular/core';
import { Router, ParamMap, ActivatedRoute }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent }                 from '../dashboard/dashboard.component';
import { DashboardService }                   from '../dashboard/dashboard.service';
import { routeUrl }                           from '../../app.config';

@Component({
    selector: 'app-maincontainer',
    templateUrl: './maincontainer.component.html',
    //styleUrls: ['./dashboard.component.less']
  })

  export class MaincontainerComponent {  
    // constructor(public dashboardService: DashboardService, private router: Router) {
    //   // if (!this.dashboardService.checkTokenExist()) {
    //   //   this.router.navigate([routeUrl.login]);
    //   // }
    // }    
  }
  