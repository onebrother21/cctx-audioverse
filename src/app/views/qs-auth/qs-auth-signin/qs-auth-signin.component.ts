import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'qs-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss'],
})
export class AuthSignInComponent {
  title = "auth-signin";
  signinForm:FormGroup;
  loading:boolean = false;
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.auth.loading.subscribe(loading => this.loading = loading);
    this.signinForm = this.fb.group({
      action:['signin',Validators.required],
      username:['',Validators.required],
    });
  }
  get f(){return this.signinForm.controls;}
  submitForm(){
    const o = this.signinForm.value;
    this.auth.send(o);
    this.signinForm.reset({action:"signin",username:""});
  }
}