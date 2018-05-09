import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { HttpServiceModule }    from '../../shared/modules/http.module';
import { DashboardComponent}    from './dashboard.component';
import { DashboardService}    from './dashboard.service';
import { DashboardRoutingModule }   from './dashboard-routing.module';

// import { QuoteFormComponent }      from '../quote/quote-form.component';
// import { QuoteFormService }        from '../quote/quote-form.service';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpServiceModule,
      DashboardRoutingModule,     
    ],
    declarations: [DashboardComponent], //, QuoteFormComponent
    providers: [DashboardService], // , QuoteFormService
    exports: [DashboardComponent] //QuoteFormComponent
  })

export class DashboardModule {}