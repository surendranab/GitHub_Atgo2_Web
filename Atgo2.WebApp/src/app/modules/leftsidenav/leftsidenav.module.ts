import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { HttpServiceModule }    from '../../shared/modules/http.module';
import { LeftsideNavComponent }       from './leftsidenav.component';
import { LeftsideNavService }         from './leftsidenav.service';
//import { SiteheaderRoutingModule }   from './siteheader-routing.module';

  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpServiceModule,
      //SiteheaderRoutingModule      
    ],
    declarations: [LeftsideNavComponent],
    providers: [LeftsideNavService]
  })
  export class LeftsideNavModule {}
  