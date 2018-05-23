import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BsModalModule } from 'ng2-bs3-modal';
import { ConfirmPromptComponent } from '../components/confirm-prompt.component';

@NgModule({
  imports: [
    CommonModule,
    // BsModalModule
  ],
  declarations: [ ConfirmPromptComponent ],
  exports: [ ConfirmPromptComponent ]
})
export class ConfirmPromptModule { }
