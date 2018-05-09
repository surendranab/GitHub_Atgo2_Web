import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SiteheaderComponent } from '../../modules/siteheader/siteheader.component';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: '../views/dashboard-layout.component.html'   
  //,
  //styleUrls: [ 
  //   '../styles/layout.component.less'
  // , '../../../css/elegant-icons-style.css'
  // , '../../../css/font-awesome.min.css'
  // , '../../../css/fullcalendar.css'
  // , '../../../css/owl.carousel.css'
  // , '../../../css/fullcalendar.css'
  // ,'../../../css/widgets.css'
  // ,'../../../css/style.css'
  // ,'../../../css/style-responsive.css'
  // ,'../../../css/xcharts.min.css'
  //,'../../../css/jquery-ui-1.10.4.min.css'
//]  
})

export class DashboardLayoutComponent implements OnInit {
  title = 'Dashboard-Layout';
  
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
