import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';
import { AppLayoutComponent }         from './shared/components/app-layout.component';
import { LoginLayoutComponent }       from './shared/components/login-layout.component';
import { LoginLayoutModule }          from './shared/modules/login-layout.module';
import { DashboardLayoutComponent }   from './shared/components/dashboard-layout.component';
import { AuthGuardService }           from './shared/services/auth-guard.service';
import { EmptyRouteComponent }        from './shared/components/empty-route.component';
import { moduleName, moduleLayout }   from './app.config';
import { LoginComponent }             from './modules/login/login.component';
//import { LoginModule }                from './modules/login/login.module';
import { MaincontainerComponent }     from './modules/maincontainer/maincontainer.component';
import { MaincontainerModule }        from './modules/maincontainer/maincontainer.module';
import { DashboardComponent }         from './modules/dashboard/dashboard.component';
import { QuoteSearchComponent }         from './modules/quote/component/quote-search.component';
// import { DashboardModule }            from './modules/dashboard/dashboard.module';
import { SiteheaderComponent }        from './modules/siteheader/siteheader.component';
import { SiteheaderModule }           from './modules/siteheader/siteheader.module';

const appRoutes: Routes = [
  { path: '', redirectTo: moduleLayout.layoutLogin, pathMatch: 'full' },
  { path: moduleLayout.layoutRoot, component: AppLayoutComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' }, 
      { path: '', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
      // { path: 'login', pathMatch: 'full', loadChildren: () => LoginModule }, //
      // {  //   path: 'dashboard',  //   loadChildren: './app/modules/dashboard.module'    // },
      { path: moduleName.empty, component: EmptyRouteComponent },
      { path: moduleName.dashboard, component: DashboardComponent }, 
      { path: moduleName.quote, component: QuoteSearchComponent }, //loadChildren: 'app/modules/quote/module/quote-form.module#QuoteFormModule' },
      // {
      //   path: moduleLayout.layoutQuote,
      //   loadChildren: './app/modules/quote/quote.module'
      // },      
      // {
      //   path: moduleName.settingsTab,
      //   component: TabsComponent,
      //   children: [{
      //       path: modulename.group,
      //       loadChildren: 'app/modules/group/group.module#GroupModule'
      //     },
      //     {
      //       path: modulename.location,
      //       loadChildren: 'app/modules/location/location.module#LocationModule'
      //     },
      //     {
      //       path: modulename.userRole,
      //       loadChildren: 'app/modules/user-role/user-role.module#UserRoleModule'
      //     },
      //     {
      //       path: modulename.user,
      //       loadChildren: 'app/modules/user/user.module#UserModule'
      //     },
      //     {
      //       path: modulename.userAccess,
      //       loadChildren: 'app/modules/user-access/user-access.module#UserAccessModule'
      //     }
      //   ]
      // }
    ]
  },
  { path: moduleLayout.layoutLogin, 
    component: LoginLayoutComponent,
    children: [
      { path: '',  component: LoginComponent, pathMatch: 'full' }, //, , component: LoginComponent redirectTo: moduleName.login
      //{ path: moduleName.login, loadChildren: 'app/modules/login/login.module#LoginModule'}, //'app/modules/login/login.module#LoginModule' },
      //{ path: moduleName.login, component: LoginComponent },
      //{ path: moduleName.login, loadChildren: 'app/shared/modules/login-layout.module#LoginLayoutModule'}, //'app/modules/login/login.module#LoginModule' },
      // {
      //   path: modulename.resetPassword + '/:id',
      //   loadChildren: 'app/modules/reset-password/reset-password.module#ResetPasswordModule'
      // }
    ]
  },
  { path: 'dashboard', component: AppLayoutComponent, //, MaincontainerComponent
    children: [
      { path: '', redirectTo: moduleName.dashboard, pathMatch: 'full' }, //, , component: LoginComponent
      { path: '', component: DashboardComponent },//loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
      //{ path: moduleName.maincontainer, loadChildren: 'app/modules/maincontainer/maincontainer.module#MaincontainerModule' },
      //{ path: moduleName.siteheader, component: SiteheaderComponent },
      // { path: moduleName.maincontainer, component: MaincontainerComponent }
    ]
  },
  { path: 'quote', component: AppLayoutComponent, //, MaincontainerComponent
    children: [
      { path: '', redirectTo: moduleName.quote, pathMatch: 'full' }, //, , component: LoginComponent
      { path: '', component: QuoteSearchComponent },//loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
      //{ path: moduleName.maincontainer, loadChildren: 'app/modules/maincontainer/maincontainer.module#MaincontainerModule' },
      //{ path: moduleName.siteheader, component: SiteheaderComponent },
      // { path: moduleName.maincontainer, component: MaincontainerComponent }
    ]
  },
  // { path: 'quote', component: AppLayoutComponent, //, MaincontainerComponent
  //   children: [
  //     { path: '', redirectTo: moduleName.quote, pathMatch: 'full' }, //, , component: LoginComponent
  //     { path: moduleName.quote, loadChildren: 'app/modules/quote/module/quote-form.module#QuoteFormModule' },
  //     //{ path: moduleName.maincontainer, loadChildren: 'app/modules/maincontainer/maincontainer.module#MaincontainerModule' },
  //     { path: moduleName.siteheader, component: SiteheaderComponent },      
  //     // { path: moduleName.maincontainer, component: MaincontainerComponent }
  //   ]
  // }
];

@NgModule({
  //declarations:[LoginComponent],
  imports: [ RouterModule.forRoot(appRoutes,  //LoginModule,
    { enableTracing: true, // <-- debugging purposes only   
    //useHash: true
  })],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
