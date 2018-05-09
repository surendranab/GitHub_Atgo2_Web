import { Injectable }         from '@angular/core';
import { HttpService }        from '../../shared/services/http.service';
import { ApiEndPointService } from '../../shared/services/api-end-point.service';
import { LeftsideNavModel }    from './leftsidenav.model';

@Injectable()
export class LeftsideNavService {

    constructor(private http: HttpService, private api: ApiEndPointService) {}

    getLeftsideNavData() {
        return this.http.getAuth(this.api.GetLeftsideNavItems);
    }

    checkTokenExist() {
        this.http.getToken();
        return this.http.token;
    }    
}