import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ApiEndPointService } from '../services/api-end-point.service';
import { HttpService } from '../services/http.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [ ApiEndPointService, HttpService ]
})
export class HttpServiceModule { }
