import { Component, OnInit, Inject, Injectable } from "@angular/core";
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { ForgotPassworDialogModel }       from "./forgotpassword-dialog.model";

@Component({
    selector: 'app-forgotPasswordialog',
    templateUrl: './forgotpassword-dialog.component.html'    
  })

  export class ForgotPasswordDialogComponent implements OnInit {
    form: FormGroup;    
    forgotPassworData: ForgotPassworDialogModel;
    modalTitle:string;

    constructor(@Inject(FormBuilder) fb: FormBuilder,
        public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: ForgotPassworDialogModel ) {          
        this.modalTitle = 'Forgot Password';
        if(this.data && this.data.userName) {
        this.forgotPassworData.userName = data.userName;
        }
        if(this.data && this.data.emailId) {
        this.forgotPassworData.emailId = data.emailId;
        }
        this.form = fb.group({
          //username: [data.userName, []],            
        });        
    }

    ngOnInit(){
      // this.data = new ForgotPassworDialogModel();
      // this.data.userName = '';
      // this.data.emailId = '';
    }

    save() {
      this.dialogRef.close(this.form.value);
    }

    close() {
      this.dialogRef.close();
    }    
}