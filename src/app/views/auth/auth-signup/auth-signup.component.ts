import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { takeUntil,Subject } from 'rxjs';
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
  error:{type:string}|null = null;
  editor:FormGroup;
  formdata = {
    email:['',[
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    phn:['',[Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    emailExists:[""],
    phnExists:[""],
  };
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.editor = this.fb.group(this.formdata);
    this.auth.loading$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(loading => this.loading = loading);
    this.auth.userExists$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(exists => this.setErrorOnExistingUser(exists));
    this.auth.queryForExistingUser("email",this.f["email"].valueChanges);
    this.auth.queryForExistingUser("phn",this.f["phn"].valueChanges);
  }
  private ngUnsubscribe:Subject<boolean> = new Subject();
  ngOnDestroy(){
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
  get f(){return this.editor.controls;}
  reset(){this.editor.reset({email:"",phn:"",emailExists:"",phnExists:""});}
  submitForm(){
    this.isSubmitted = true;
    this.hasErrors();
    if(this.editor.valid){
      const o = this.editor.value;
      delete o.emailExists;
      delete o.phnExists;
      this.auth.send("signup",o);
    }
  }
  getErr(field:string,errname?:string){return this.f[field].errors?.[errname||field];}
  setErrorOnExistingUser(exists?:Record<string,boolean>){
    console.log(exists);
    if(this.f && exists){
      const key = Object.keys(exists)[0];
      const val = Object.values(exists)[0];
      const errname = key +"Exists";
      if(val){
        this.f[errname].setErrors({[errname]:true});
        setTimeout(() => this.f[errname].setErrors(null),1800);
      }
      else this.f[errname].setErrors(null);
      this.hasErrors();
    }
  }
  hasErrors(){
    this.error = null;
    if(this.editor.invalid) switch(true){
      case this.f['email'].dirty && this.getErr('emailExists'):this.error =  {type:"emailExists"};break;
      case this.f['phn'].dirty && this.getErr('phnExists'):this.error =  {type:"phnExists"};break;
      case this.isSubmitted && !!this.getErr('email','required'):this.error =  {type:"emailReq"};break;
      case this.isSubmitted && !!this.getErr('email','pattern'):this.error =  {type:"emailInvalid"};break;
      default:break;
    }
    this.isSubmitted = false;
  }
}