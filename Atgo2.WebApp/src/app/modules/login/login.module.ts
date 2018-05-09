import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { HttpServiceModule }    from '../../shared/modules/http.module';
import { LoginComponent }       from './login.component';
import { LoginService }         from './login.service';
import { LoginRoutingModule }   from './login-routing.module';
import { ConfirmPromptModule }  from '../../shared/modules/confirm-prompt.module';

  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpServiceModule,
      LoginRoutingModule,
      ConfirmPromptModule
    ],
    declarations: [LoginComponent],
    providers: [LoginService]
  })
  export class LoginModule {}
  