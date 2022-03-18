import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'qs-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss'],
})
export class AuthSignUpComponent {
  title = "auth-signup";
  signupForm:FormGroup;
  loading:boolean = false;
  constructor(private auth:AuthService,private fb:FormBuilder){
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