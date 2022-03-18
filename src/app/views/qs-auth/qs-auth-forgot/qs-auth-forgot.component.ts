import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../qs-auth.service';

@Component({
  selector: 'qs-auth-forgot',
  templateUrl: './qs-auth-forgot.component.html',
  styleUrls: ['./qs-auth-forgot.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class AuthForgotComponent {
  title = "qs-auth-forgot";
  forgotForm:FormGroup;
  loading:boolean = false;
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.auth.loading.subscribe(loading => this.loading = loading);
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