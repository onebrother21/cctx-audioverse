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
  form:FormGroup;
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.auth.loading$.subscribe(loading => this.loading = loading);
    this.auth.me$.subscribe(user => this.user = user);
    this.form = this.fb.group({
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      dob:['',Validators.required],
      hometown:['',Validators.required],
    });
  }
  get f(){return this.form.controls;}
  submitForm(){
    console.log(this.form.value,this.user);
    const {firstname,lastname,dob,..._o} = this.form.value;
    const o = {
      ..._o,
      name:{first:firstname,last:lastname},
      dob:new Date(dob),
      email:this.user?.email,
      phn:this.user?.phn,
    };
    this.auth.send("register",o);
    this.form.reset({
      username:"",
      firstname:"",
      lastname:"",
      dob:"",
      hometown:"",
    });
  }
}