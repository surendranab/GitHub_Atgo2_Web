import { Injectable }         from '@angular/core';
import { HttpService }        from '../../../shared/services/http.service';
import { ApiEndPointService } from '../../../shared/services/api-end-point.service';
import { QuoteFormModel }    from '../model/quote-form.model';

@Injectable()
export class QuoteFormService {

    constructor(private http: HttpService, private api: ApiEndPointService) {}

    getQuoteFormData() {
        return this.http.getAuth(this.api.GetQuoteFormData);
    }

    checkTokenExist() {
        this.http.getToken();
        return this.http.token;
    }    
}