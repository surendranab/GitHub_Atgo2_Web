//System imports
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { BsModalModule }            from 'ng2-bs3-modal';

//General imports
import { HttpServiceModule }        from '../../../shared/modules/http.module';
//Form imports
import { QuoteFormComponent }       from '../component/quote-form.component';
import { QuoteSearchComponent }     from '../component/quote-search.component';
import { QuoteFormService}          from '../service/quote-form.service';
import { QuoteFindLinerComponent }  from '../component/quote-findliner.component';
import { QuoteFormRoutingModule }   from '../route/quote-form-routing.module';

// import { QuoteFormComponent }      from '../quote/quote-form.component';
// import { QuoteFormService }        from '../quote/quote-form.service';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpServiceModule,
      BsModalModule,
      QuoteFormRoutingModule,     
    ],
    declarations: [QuoteSearchComponent, QuoteFormComponent, QuoteFindLinerComponent],
    providers: [QuoteFormService], 
    exports: [QuoteSearchComponent, QuoteFormComponent, QuoteFindLinerComponent]
  })

export class QuoteFormModule {}