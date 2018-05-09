import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';
import { QuoteFormComponent }           from '../component/quote-form.component';
import { QuoteSearchComponent }           from '../component/quote-search.component';

const routes: Routes = [
    { path: '', redirectTo: 'quote-search', pathMatch: 'full' },
    { path: 'add-quote', component: QuoteFormComponent },
    { path: 'edit-quote/:id', component: QuoteFormComponent },
    { path: 'quote-search', component: QuoteSearchComponent },
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class QuoteFormRoutingModule {}
  