import { Component, OnInit, OnDestroy }       from '@angular/core';
import { Router, ParamMap, ActivatedRoute }   from '@angular/router';
import { DashboardService }                   from './dashboard.service';
import { routeUrl }                           from '../../app.config';
  
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    //styleUrls: ['./dashboard.component.less']
  })

  export class DashboardComponent {
  
    constructor(public dashboardService: DashboardService, private router: Router) {
      // if (!this.dashboardService.checkTokenExist()) {
      //   this.router.navigate([routeUrl.login]);
      // }
    }    
  }
  