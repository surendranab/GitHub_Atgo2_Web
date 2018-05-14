import { Component }                            from '@angular/core';
import { Router }                               from '@angular/router';
import { QuoteFormService }                     from '../service/quote-form.service';
import { QuoteFormModel }                       from '../model/quote-form.model';
import { PersonProfileModel }                   from '../../../shared/models/personprofile.model';
// import { DataService }                       from '../../shared/services/data.service';
import { routeUrl }                             from '../../../app.config';
import { empty }                                from 'rxjs/observable/empty';

// import { IMyOptions, IMyDate, IMyDateModel } from 'mydatepicker';

@Component({
    selector: 'app-QuoteSearch',
    templateUrl: '../view/quote-search.component.html'     
  })

  export class QuoteSearchComponent {  
    constructor(private router: Router, public quoteFormService: QuoteFormService) {
      this.quoteFormService.genarateAccess();
    }

    openQuoteForm (){
      //event.preventDefault();      
      this.router.navigate(['quote/add-quote']);
    }
  }

  