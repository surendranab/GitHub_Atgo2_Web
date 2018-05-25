import { Component, OnInit, Inject } from "@angular/core";
import {FormGroup, FormBuilder} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ForgotPassworDialogModel }       from "./forgotpassword-dialog.model";

@Component({
    selector: 'app-forgotPasswordialog',
    templateUrl: './forgotpassword-dialog.component.html'    
  })

  export class ForgotPasswordDialogComponent implements OnInit {
    form: FormGroup;
    username:string;
    emailid:string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ForgotPasswordDialogComponent>,
        @Inject(MAT_DIALOG_DATA) {userName, emailId}: ForgotPassworDialogModel ) {

        this.username = userName;
        this.emailid = emailId;

        this.form = this.fb.group({
          username: [userName, []],            
        });
    }

    ngOnInit() {
        
  }
}