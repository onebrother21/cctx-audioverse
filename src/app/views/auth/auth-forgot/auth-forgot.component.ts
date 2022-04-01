import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'qs-auth-forgot',
  templateUrl: './auth-forgot.component.html',
  styleUrls: ['./auth-forgot.component.scss'],
})
export class AuthForgotComponent {
  title = "auth-forgot";
  form:FormGroup;
  loading:boolean = false;
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.auth.loading$.subscribe(loading => this.loading = loading);
    this.form = this.fb.group({email:['',Validators.required]});
  }
  get f(){return this.form.controls;}
  submitForm(){
    const o = this.form.value;
    this.auth.send("forgot",o);
    this.form.reset();
  }
}