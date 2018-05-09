import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
