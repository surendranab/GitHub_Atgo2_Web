import {
    Injectable
  } from '@angular/core';

  import {
    HttpService
  } from '../../shared/services/http.service';

  import {
    ApiEndPointService
  } from '../../shared/services/api-end-point.service';

  
@Injectable()
export class DashboardService {

  constructor(private http: HttpService, private api: ApiEndPointService) {}

  checkTokenExist() {
    this.http.getToken();
    return this.http.token;
  }

//   getVersion() {
//     return this.http.getAuth(this.api.GetVersion);
//   }
}