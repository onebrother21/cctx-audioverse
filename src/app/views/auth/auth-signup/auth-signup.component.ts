import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { checkAsyncError } from '@shared';
import { AppService,userExists$,users$,UsersActions as USERS } from '@state';
import { concat, debounceTime, distinctUntilChanged,filter,map, subscribeOn, tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'qs-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss'],
})
export class AuthSignUpComponent {
  title = "auth-signup";
  loading = false;
  isSubmitted = false;
  form:FormGroup;
  constructor(
    private app:AppService,
    private auth:AuthService,
    private fb:FormBuilder){
    this.auth.loading$.subscribe(loading => this.loading = loading);
    this.auth.userExists$.subscribe(exists => this.setErrorOnExistingUser(exists));
    this.form = this.fb.group({
      email:['',[
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      emailExists:[""],
    });
    this.queryForExistingUser();
  }
  get f(){return this.form.controls;}
  hasValidationErrors(){return this.isSubmitted && this.form.invalid;}
  hasExistingEmailError(){
    return this.form.dirty && 
    this.form.invalid && 
    this.f['emailExists'].errors?.['emailExists'];
  }
  submitForm(){
    this.isSubmitted = true;
    if(this.form.valid){
      const o = this.form.value;
      delete o.emailExists;
      this.auth.send("signup",o);
      this.isSubmitted = false;
    }
  }
  queryForExistingUser(){
    this.f["email"].valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter(v => typeof v == "string"))
    .subscribe((v:string) => this.app.do(USERS.exists({email:v})));
  }
  setErrorOnExistingUser(exists?:boolean){
    if(exists){
      this.f["emailExists"].setErrors({emailExists:true});
      setTimeout(() => {
        this.f["emailExists"].setErrors(null);
        //this.verifyForm.reset({action:"verify",code:""});
      },1500);
    }
    else this.f["emailExists"].setErrors(null);
  }
}