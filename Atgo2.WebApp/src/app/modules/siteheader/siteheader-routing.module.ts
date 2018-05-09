import {
    NgModule
  } from '@angular/core';
  import {
    Routes,
    RouterModule
  } from '@angular/router';
  import {
    SiteheaderComponent
  } from './siteheader.component';
  
  const routes: Routes = [{
    path: '',
    component: SiteheaderComponent
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class SiteheaderRoutingModule {}
  