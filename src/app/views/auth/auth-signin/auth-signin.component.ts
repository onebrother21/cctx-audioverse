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
  form:FormGroup;
  loading:boolean = false;
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.auth.loading$.subscribe(loading => this.loading = loading);
    this.form = this.fb.group({username:['',Validators.required]});
  }
  get f(){return this.form.controls;}
  submitForm(){
    const o = this.form.value;
    this.auth.send("signin",o);
    this.form.reset({username:""});
  }
}