import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../qs-auth.service';

@Component({
  selector: 'qs-auth-register',
  templateUrl: './qs-auth-register.component.html',
  styleUrls: ['./qs-auth-register.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class AuthRegisterComponent {
  title = "qs-auth-register";
  registerForm:FormGroup;
  loading:boolean = false;
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.auth.loading.subscribe(loading => this.loading = loading);
    this.registerForm = this.fb.group({
      action:['register',Validators.required],
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      age:['',Validators.required],
      hometown:['',Validators.required],
    });
  }
  get f(){return this.registerForm.controls;}
  submitForm(){
    const {firstname,lastname,..._o} = this.registerForm.value;
    const o = {..._o,name:{first:firstname,last:lastname}};
    this.auth.send(o);
    this.registerForm.reset({
      action:"register",
      username:"",
      firstname:"",
      lastname:"",
      age:"",
      hometown:"",
    });
  }
}