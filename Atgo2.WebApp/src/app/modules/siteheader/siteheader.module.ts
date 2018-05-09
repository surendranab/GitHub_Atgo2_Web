import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { HttpServiceModule }    from '../../shared/modules/http.module';
import { SiteheaderComponent }       from './siteheader.component';
import { SiteheaderService }         from './siteheader.service';
import { SiteheaderRoutingModule }   from './siteheader-routing.module';

  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpServiceModule,
      SiteheaderRoutingModule      
    ],
    declarations: [SiteheaderComponent],
    providers: [SiteheaderService]
  })
  export class SiteheaderModule {}
  