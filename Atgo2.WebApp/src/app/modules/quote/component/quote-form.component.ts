import { Component, OnInit, OnDestroy }         from '@angular/core';
import { Router, ParamMap, ActivatedRoute }     from '@angular/router';
import { QuoteFormService }                     from '../service/quote-form.service';
import { QuoteFormModel }                       from '../model/quote-form.model';
import { PersonProfileModel }                   from '../../../shared/models/personprofile.model';
// import { DataService }                       from '../../shared/services/data.service';
import { routeUrl }                             from '../../../app.config';
import { empty }                                from 'rxjs/observable/empty';

// import { IMyOptions, IMyDate, IMyDateModel } from 'mydatepicker';

@Component({
    selector: 'app-QuoteForm',
    templateUrl: '../view/quote-form.component.html'    
  })

  export class QuoteFormComponent implements OnDestroy {
    quoteFormData: QuoteFormModel;  
    version: any;
    sessionExist : false;
    notifyObjSub: any;

    constructor(public quoteFormService: QuoteFormService, private router: Router) { //, private validationService: ValidationService
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
      };
      
      // if (this.siteheaderService.checkTokenExist()) {
      //      //this.getVersion();
      this.GetQuoteFormData();
      //  } //else {
      //   this.router.navigate([routeUrl.login]);
      // }
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
       
    GetQuoteFormData() {      
          this.quoteFormService.getQuoteFormData()
          .map((response) => {
            const quoteFormData = response.json() && response.json().leftsideNav;            
              return response.json();
            }
          );
        }
  };



      
        
          