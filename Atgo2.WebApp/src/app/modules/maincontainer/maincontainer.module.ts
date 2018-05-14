import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { HttpServiceModule }    from '../../shared/modules/http.module';
import { MaincontainerComponent}    from './maincontainer.component';

import { DashboardComponent }      from '../dashboard/dashboard.component';
import { DashboardService}    from '../dashboard/dashboard.service';
import { DashboardRoutingModule }   from '../dashboard/dashboard-routing.module';
// import { LoginLayoutComponent }   from '../../shared/components/login-layout.component'
//import { LoginLayoutModule }   from '../../shared/modules/login-layout.module'
import { QuoteFormComponent }      from '../quote/component/quote-form.component';
import { QuoteFindLinerComponent }      from '../quote/component/quote-findliner.component';
import { QuoteFormService }        from '../quote/service/quote-form.service';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpServiceModule,
      DashboardRoutingModule  
    ],
    declarations: [MaincontainerComponent, QuoteFormComponent, QuoteFindLinerComponent],
    providers: [QuoteFormService, DashboardService], //DashboardService,
    exports: [MaincontainerComponent, QuoteFormComponent, QuoteFindLinerComponent]
  })

export class MaincontainerModule {}