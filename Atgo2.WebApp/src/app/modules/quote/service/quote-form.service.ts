import { Injectable }         from '@angular/core';
import { HttpService }        from '../../../shared/services/http.service';
import { ApiEndPointService } from '../../../shared/services/api-end-point.service';
import { RoleAccessService } from '../../../shared/services/role-access.service';
import { QuoteFormModel }    from '../model/quote-form.model';

@Injectable()
export class QuoteFormService {
    hideAdd: boolean;
    isAddShow: boolean;
    isAddable: boolean;
    isEditable: boolean;
    isDeletable: boolean;

    constructor(private http: HttpService, private api: ApiEndPointService, private roleAccessService: RoleAccessService) {}

    getQuoteFormData() {
        return this.http.getAuth(this.api.GetQuoteFormData);
    }

    checkTokenExist() {
        this.http.getToken();
        return this.http.token;
    }

    genarateAccess() {
        // this.isAddable = this.roleAccessService.getAccess(systemsettings.bedAttributes, roles.create, systemsettings.name);
        // this.isEditable = this.roleAccessService.getAccess(systemsettings.bedAttributes, roles.update, systemsettings.name);
        // this.isDeletable = this.roleAccessService.getAccess(systemsettings.bedAttributes, roles.delete, systemsettings.name);
      }
}