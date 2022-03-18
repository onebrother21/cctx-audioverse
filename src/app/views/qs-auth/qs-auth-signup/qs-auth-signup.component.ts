import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { QS_AuthService } from '../qs-auth.service';

@Component({
  selector: 'qs-auth-signup',
  templateUrl: './qs-auth-signup.component.html',
  styleUrls: ['./qs-auth-signup.component.scss'],
})
export class QS_AuthSignUpComponent {
  title = "qs-auth-signup";
  signupForm:FormGroup;
  loading:boolean = false;
  constructor(private auth:QS_AuthService,private fb:FormBuilder){
    this.auth.loading.subscribe(loading => this.loading = loading);
    this.signupForm = this.fb.group({
      action:['signup',Validators.required],
      email:['',Validators.required],
    });
  }
  get f(){return this.signupForm.controls;}
  submitForm(){
    const o = this.signupForm.value;
    this.auth.send(o);
    this.signupForm.reset({action:"signup",email:""});
  }
}