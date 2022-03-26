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
  forgotForm:FormGroup;
  loading:boolean = false;
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.auth.loading$.subscribe(loading => this.loading = loading);
    this.forgotForm = this.fb.group({
      type:['forgot',Validators.required],
      email:['',Validators.required],
    });
  }
  get f(){return this.forgotForm.controls;}
  submitForm(){
    const o = this.forgotForm.value;
    this.auth.send(o);
    this.forgotForm.reset();
  }
}