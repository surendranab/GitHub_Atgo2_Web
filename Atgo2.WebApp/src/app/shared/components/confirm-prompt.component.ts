import {
    Component,
    ViewChild,
    AfterViewInit,
    Output,
    EventEmitter,
    Input
  } from '@angular/core';
  import {
    Router
  } from '@angular/router';
  // import {
  //   BsModalComponent
  // } from 'ng2-bs3-modal';
  
  @Component({
    selector: 'app-confirm-prompt',
    templateUrl: '../views/confirm-prompt.component.html',
    styleUrls: ['../styles/confirm-prompt.component.less']
  })
  export class ConfirmPromptComponent implements AfterViewInit {
    // @ViewChild('modal')
    // modal: BsModalComponent;
  
    @Input() message: string;
    @Input() showCancel: boolean;
    @Input() showOK: boolean;
    @Input() isNoBackdrop: boolean;
  
    @Output() onYes = new EventEmitter < any > ();
    @Output() onNo = new EventEmitter < any > ();
    @Output() onCancel = new EventEmitter < any > ();
    @Output() onOK = new EventEmitter < any > ();
  
    static = 'static';
  
    ngAfterViewInit() {
      // setTimeout(() => {
      //   this.modal.open();
      // }, 1);
    }
  
    // onYesClick() {
    //   this.onYes.emit();
    //   this.modal.close();
    // }
  
    // onNoClick() {
    //   this.onNo.emit();
    //   this.modal.close();
    // }
  
    // onCancelClick() {
    //   this.onCancel.emit();
    //   this.modal.close();
    // }
  }
  