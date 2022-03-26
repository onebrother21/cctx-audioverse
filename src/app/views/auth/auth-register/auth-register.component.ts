import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserJson } from '@state';
import { AuthService } from '../auth.service';

@Component({
  selector: 'qs-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent {
  title = "auth-register";
  loading = false;
  isSubmitted = false;
  user?:UserJson;
  registerForm:FormGroup;
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.auth.loading$.subscribe(loading => this.loading = loading);
    this.auth.me$.subscribe(user => this.user = user);
    this.registerForm = this.fb.group({
      action:['register',Validators.required],
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      dob:['',Validators.required],
      hometown:['',Validators.required],
    });
  }
  get f(){return this.registerForm.controls;}
  submitForm(){
    console.log(this.registerForm.value,this.user);
    const {firstname,lastname,dob,..._o} = this.registerForm.value;
    const o = {
      ..._o,
      name:{first:firstname,last:lastname},
      dob:new Date(dob),
      email:this.user?.email,
      phn:this.user?.phn,
    };
    this.auth.send(o);
    this.registerForm.reset({
      action:"register",
      username:"",
      firstname:"",
      lastname:"",
      dob:"",
      hometown:"",
    });
  }
}