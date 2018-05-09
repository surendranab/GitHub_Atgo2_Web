import {
    Injectable
  } from '@angular/core';

  import {
    HttpService
  } from '../../shared/services/http.service';

  import {
    ApiEndPointService
  } from '../../shared/services/api-end-point.service';

  import {
    LoginModel
  } from './login.model';

  @Injectable()
export class LoginService {

  constructor(private http: HttpService, private api: ApiEndPointService) {}

  post(loginData: LoginModel) {
    return this.http.postAuth(this.api.Login, loginData);
  }

  resetPassword(email: string) {
    return this.http.getAuth(this.api.ResetPasswordLogin + '/' + email);
  }

  checkTokenExist() {
    this.http.getToken();
    return this.http.token;
  }

  getVersion() {
    return this.http.getAuth(this.api.GetVersion);
  }
}