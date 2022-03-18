import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { QS_AuthService } from '../qs-auth.service';

@Component({
  selector: 'qs-auth-verify',
  templateUrl: './qs-auth-verify.component.html',
  styleUrls: ['./qs-auth-verify.component.scss'],
})
export class QS_AuthVerifyComponent {
  title = "qs-auth-verify";
  verifyForm:FormGroup;
  loading:boolean = false;
  constructor(private auth:QS_AuthService,private fb:FormBuilder){
    this.auth.loading.subscribe(loading => this.loading = loading);
    this.verifyForm = this.fb.group({
      action:['verify',Validators.required],
      code:['',Validators.required],
    });
  }
  get f(){return this.verifyForm.controls;}
  submitForm(){
    const o = this.verifyForm.value;
    this.auth.send(o);
    this.verifyForm.reset({action:"verify",code:""});
  }
}