import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { LoginComponent } from '../../modules/login/login.component';
// import { LoginModule } from '../../modules/login/login.module';

@Component({
  selector: 'app-login',
  templateUrl: '../views/login-layout.component.html'  
})
export class LoginLayoutComponent implements OnInit {
  title = 'Atgo-Quote-Login';
  
  loginClass1:string = 'flex-row';
  loginClass2:string = 'align-items-center';
  dashClass1:string = 'header-fixed';
  dashClass2:string = 'sidebar-fixed';
  dashClass3:string = 'aside-menu-fixed';
  dashClass4:string = 'sidebar-lg-show';
  dashClass5:string = 'pace-done';

    ngOnInit(): void {
      let body = document.getElementsByTagName('body')[0];
      body.classList.remove(this.dashClass1);   //remove the class
      body.classList.remove(this.dashClass2);   //remove the class
      body.classList.remove(this.dashClass3);   //remove the class
      body.classList.remove(this.dashClass4);   //remove the class
      body.classList.remove(this.dashClass5);   //remove the class

      body.classList.add(this.loginClass1);   //add the class
      body.classList.add(this.loginClass2);   //add the class
    }
 }
