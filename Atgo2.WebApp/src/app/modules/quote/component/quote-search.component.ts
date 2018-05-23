import { Component, 
         ViewChild, 
         AfterViewInit, 
         Output, 
         EventEmitter, 
         Input }                                from '@angular/core';
import { Router }                               from '@angular/router';
//import { BsModalComponent }                     from 'ng2-bs3-modal';

import { QuoteFormService }                     from '../service/quote-form.service';
import { QuoteSearchModel }                       from '../model/quote-search.model';
import { PersonProfileModel }                   from '../../../shared/models/personprofile.model';
// import { DataService }                       from '../../shared/services/data.service';
import { routeUrl }                             from '../../../app.config';
import { empty }                                from 'rxjs/observable/empty';
import { DatePicker } from 'angular2-datetimepicker';

@Component({
    selector: 'app-QuoteSearch',
    templateUrl: '../view/quote-search.component.html'     
  })

  export class QuoteSearchComponent implements AfterViewInit {
   
    searchModel: QuoteSearchModel;
    toDate: Date = new Date();
    dateSettings = {
        bigBanner: false,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: false
    }
    isFormValid: boolean;
    isDtValid: boolean;
    dateModel: Object;
    //@ViewChild('modal') modal: BsModalComponent;

    constructor(private router: Router, public quoteFormService: QuoteFormService) {
      this.quoteFormService.genarateAccess();
      this.searchModel = {
        quoteNo: '',
        branch: '',
        fromDate: new Date(),
        toDate: new Date(),
        salesExecutive: '',
        customer: '',
        party: '',
        port: '',
        portBy: ''
      };

      DatePicker.prototype.ngOnInit = function() {
        this.dateSettings = Object.assign(this.defaultSettings, this.settings);
        if (this.dateSettings.defaultOpen) {
          this.popover = true;
        }
          this.date = new Date();
        };
    }
    
    searchquote(searchquoteForm) {
      
      if(searchquoteForm.valid){
        this.quoteFormService.searchQuoteData(this.searchModel);
      }
    }

    openQuoteForm() {
      //event.preventDefault();      
      this.router.navigate(['quote/add-quote']);
    }

    ngAfterViewInit() {
      //this.modal.open();
    }

    openCustomerModal() {
      //this.modal.open();
    }

    onNoClick() {
    //this.setDefaultValues();
      //this.modal.close();
    }

    onDateChangeFormat($event) {
      this.isFormValid = $event.valid;
      this.isDtValid = $event.valid;
      if (this.isFormValid) {
        //this.patient.dob = $event.value;
      }
    } 
    
  }