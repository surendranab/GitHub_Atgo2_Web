  import { Injectable }         from '@angular/core';
  import { HttpService }        from '../../shared/services/http.service';
  import { ApiEndPointService } from '../../shared/services/api-end-point.service';
  import { SiteheaderModel }    from './siteheader.model';

  @Injectable()
  export class SiteheaderService {

  constructor(private http: HttpService, private api: ApiEndPointService) {}

  getSiteHeaderData() {
    return this.http.getAuth(this.api.GetSiteHeaderMenus);
  }

  checkTokenExist() {
    this.http.getToken();
    return this.http.token;
  }

  getVersion() {
    return this.http.getAuth(this.api.GetVersion);
  }
}