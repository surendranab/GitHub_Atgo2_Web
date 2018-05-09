import { Component, OnInit, OnDestroy }     from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { LoginService }                     from './login.service';
import { LoginModel }                       from './login.model';
//   import {
//     DataService
//   } from '../../shared/services/data.service';
import { routeUrl }                         from '../../app.config';
//import { ValidationService }                from '../../shared/services/validation.service';

  
@Component({
    selector: 'app-formLogin',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
  })

  export class LoginComponent implements OnDestroy {
    loginData: LoginModel;
    isError: boolean;
    errorMessage: string;
    isLogin: boolean;
    isForgotPassword: boolean;
    userName: string;
    resetPasswordErrorMessage: string;
    isResetPasswordError: boolean;
    isResetPasswordSuccess: boolean;
    resetPasswordSuccessMessage: string;
    version: any;
    passwordHide: any;
    passwordValue: any;
    notifyObjSub: any;
    sessionExist: boolean;
  
    constructor(public loginService: LoginService, private router: Router) { //, private validationService: ValidationService
      this.loginData = {
        username: '',
        password: ''        
      };
      this.isError = false;
      this.errorMessage = '';
      this.isLogin = true;
      this.version = '';
      this.isForgotPassword = false;
      this.passwordValue = '';
      this.passwordHide = {
        value: ''
      };
      this.sessionExist = false;
      if (this.loginService.checkTokenExist()) {
        this.router.navigate([routeUrl.quote]);
      } else {
        //this.getVersion();
        //this.validationService.defaultFlags();
      }
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
  
    showForgotPassword() {
      this.isResetPasswordError = false;
      this.isResetPasswordSuccess = false;
      this.userName = this.loginData.username;
      this.isForgotPassword = true;
      this.isLogin = false;
    }
  
    showLogin() {
      this.loginData.username = this.userName;
      this.isError = false;
      this.isForgotPassword = false;
      this.isLogin = true;
    }
  
    resetUserPassword() {
      this.loginService.resetPassword(this.userName).subscribe((result: any) => {
          if (result._body === '1') {
            this.isResetPasswordError = true;
            this.resetPasswordErrorMessage = 'Invalid Login Email.';
            this.isResetPasswordSuccess = false;
            return;
          }
          if (result._body === '2') {
            this.isResetPasswordError = true;
            this.resetPasswordErrorMessage = 'Your account is locked. Please contact your administrator.';
            this.isResetPasswordSuccess = false;
            return;
          }
          if (result._body === '3') {
            this.isResetPasswordError = true;
            this.resetPasswordErrorMessage = 'Your account is inactivate. Please contact your administrator';
            this.isResetPasswordSuccess = false;
            return;
          }
          if (result._body === '0') {
            this.isResetPasswordError = false;
            this.isResetPasswordSuccess = true;
            this.resetPasswordSuccessMessage = 'Reset Password Link sent to your Email Id.';
          }
        },
        (error: any) => {
          throw {
            'Error': error,
            'Message': 'resetPassword Failed'
          };
        });
    }
  
    login(loginForm) {
      if (this.loginService.checkTokenExist()) {
        this.sessionExist = true;
        return;
      }
      this.loginData.username = this.loginData.username.trim();
      if (loginForm.valid) {
        this.loginData.password = this.passwordValue;
        this.loginService.post(this.loginData)
          .map((response) => {
            const token = response.json() && response.json().token;
            const eula = response.json() && response.json().eula;
            if (token) {
              localStorage.setItem('currentUser', JSON.stringify({
                username: this.loginData.username.toLowerCase(),
                eula: eula,
                token: token,
                roles: response.json().role,
                access: response.json().permission
              }));
              return response.json();
            } else {
              return response.json();
            }
          })
          .subscribe(
            (result: any) => {
              if (result.authenticated) {                
                  this.router.navigate([routeUrl.userDashboard]);
              } else {
                this.isError = true;
                this.errorMessage = 'Invalid Login Email or Password. Please try again';
                if (result.isLocked) {
                  this.errorMessage = 'Your Account is Locked. Please contact your Administrator';
                }
                if (result.isInActive) {
                  this.errorMessage = 'Your Account is Inactive. Please contact your Administrator';
                }
                if (this.isError) {
                  this.passwordValue = this.loginData.password;
                  this.passwordHide.type = 'password';
                  this.passwordHide.value = this.passwordValue;
                }
                throw new Error('Token was not found');
              }
            },
            (error: any) => {
              this.isError = true;
              if (this.isError) {
                this.passwordValue = this.loginData.password;
                this.passwordHide.type = 'password';
                this.passwordHide.value = this.passwordValue;
              }
              this.errorMessage = 'Service Unavailable, Please try again.';
              throw {
                'Error': error,
                'Message': 'Login Failed'
              };
            }
          );
      } else {
        this.isError = true;
        if (this.isError) {
          this.passwordValue = this.loginData.password;
          this.passwordHide.type = 'password';
          this.passwordHide.value = this.passwordValue;
        }
        this.errorMessage = 'Please enter Login Username and Password';
      }
    }
  }
  