import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';
import { QuoteFormComponent }           from '../component/quote-form.component';
import { QuoteFindLinerComponent }           from '../component/quote-findliner.component';
import { QuoteSearchComponent }           from '../component/quote-search.component';

const routes: Routes = [
    { path: '', redirectTo: 'quote', pathMatch: 'full' },
    { path: 'add-quote', component: QuoteFormComponent },
    { path: 'edit-quote/:id', component: QuoteFormComponent },
    { path: 'add-quote-findliner', component: QuoteFindLinerComponent},
    { path: 'edit-quote-findliner/:id', component: QuoteFindLinerComponent },
    { path: 'quote', component: QuoteSearchComponent },
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class QuoteFormRoutingModule {}
  