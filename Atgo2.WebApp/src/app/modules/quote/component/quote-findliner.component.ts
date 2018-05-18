import { Component, OnInit, OnDestroy }         from '@angular/core';
import { Router, ParamMap, ActivatedRoute }     from '@angular/router';
import { QuoteFormService }                     from '../service/quote-form.service';
import { QuoteFormModel }                       from '../model/quote-form.model';
import { PersonProfileModel }                   from '../../../shared/models/personprofile.model';
// import { DataService }                       from '../../shared/services/data.service';
import { routeUrl }                             from '../../../app.config';
import { empty }                                from 'rxjs/observable/empty';
//import { ValidationService }                    from '../../../shared/services/validation.service';

// import { IMyOptions, IMyDate, IMyDateModel } from 'mydatepicker';

@Component({
    selector: 'app-QuoteForm-FindLiner',
    templateUrl: '../view/quote-findliner.component.html',
    styleUrls: ['../styles/quote-form.component.css']
  })

  export class QuoteFindLinerComponent {
    quoteFormData: QuoteFormModel;  
    version: any;
    sessionExist : false;
    notifyObjSub: any;
    paramId: number;

    constructor(public quoteFormService: QuoteFormService, private router: Router, private route: ActivatedRoute){ //, private validationService: ValidationService){
      this.quoteFormData = {
        quoteNo: '',
        quoteDate: '',
        quoteBranch: null,
        quoteSalesExecutive: null,
        quoteOriginAddress: null,
        quoteDestinationAddress: null,
        quoteDestinationAddressPrint: '',
        quoteOriginAddressPrint: '',
        quoteOriginPort: null,
        quoteDestinationPort: null,
        quoteOriginDate: null,
        quoteDeliveryDate: null,
        quoteIncoTerm: null,
        quotePackageDimension: null,
        quotePackageDimensionDisplayValue: '',
        quotePickPointLocation: '',
        quoteDropPointLocation: '',
        quoteHazordous: '',
        quoteInsurance: '',
        quotePerishable: '',
        quoteTermsandConditions: null,
        quoteGoodsDescriptionForPrint: '',
        quoteGoodsDescriptionDetail: '',
        quoteRemarks: ''
      }

      this.paramId = +this.route.snapshot.params['id'];

      // if (this.siteheaderService.checkTokenExist()) {
      //      //this.getVersion();
      if (this.paramId) {
      this.getQuoteById();
      }
      //  } //else {
      //   this.router.navigate([routeUrl.login]);
      // }
    }
       
    getQuoteById() {      
          this.quoteFormService.getQuoteFormData()
          .map((response) => {
            const quoteFormData = response.json() && response.json().leftsideNav;            
              return response.json();
            }
          );
        }
  };



      
        
          