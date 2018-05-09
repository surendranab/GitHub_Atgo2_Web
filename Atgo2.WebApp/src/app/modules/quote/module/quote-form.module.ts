import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { HttpServiceModule }    from '../../../shared/modules/http.module';
import { QuoteFormComponent }   from '../component/quote-form.component';
import { QuoteFormService}    from '../service/quote-form.service';
import { QuoteFormRoutingModule }   from '../route/quote-form-routing.module';

// import { QuoteFormComponent }      from '../quote/quote-form.component';
// import { QuoteFormService }        from '../quote/quote-form.service';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpServiceModule,
      QuoteFormRoutingModule,     
    ],
    declarations: [QuoteFormComponent], //, QuoteFormComponent
    providers: [QuoteFormService], // , QuoteFormService
    exports: [QuoteFormComponent] //QuoteFormComponent
  })

export class QuoteFormModule {}