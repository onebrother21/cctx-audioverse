import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { takeUntil,Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserJson } from '@state';

@Component({
  selector: 'qs-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent {
  title = "auth-register";
  loading = false;
  isSubmitted = false;
  error:{type:string}|null = null;
  user?:UserJson;
  editor:FormGroup;
  formdata = {
    username:['',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(16),
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/),
    ]],
    firstname:['',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(16),
      Validators.pattern(/^[a-zA-Z\s]*$/),
    ]],
    lastname:['',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(16),
      Validators.pattern(/^[a-zA-Z\s]*$/),
    ]],
    yob:['',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern(/^[\d]*$/),
    ]],
    hometown:['',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z\s]*$/),
    ]],
    usernameExists:[''],
  };
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.editor = this.fb.group(this.formdata);
    this.auth.loading$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(loading => this.loading = loading);
    this.auth.me$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(user => this.user = user);
    this.auth.userExists$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(exists => this.setErrorOnExistingUser(exists));
    this.auth.queryForExistingUser("username",this.f["username"].valueChanges);
  }
  private ngUnsubscribe:Subject<boolean> = new Subject();
  ngOnDestroy(){
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
  get f(){return this.editor.controls;}
  getErr(field:string,errname?:string){return this.f[field].errors?.[errname||field];}
  reset(){
    this.editor.reset({
      username:"",
      firstname:"",
      lastname:"",
      yob:"",
      hometown:"",
      usernameExists:"",
    });
  }
  submitForm(){
    this.isSubmitted = true;
    this.hasErrors();
    if(this.editor.valid){
      const {firstname,lastname,..._o} = this.editor.value;
      const o = {
        ..._o,
        name:{first:firstname,last:lastname},
        email:this.user?.email,
        phn:this.user?.phn,
      };
      delete o.usernameExists;
      this.auth.send("register",o);
      this.isSubmitted = false;
    }
  }
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
      case this.f['username'].dirty && this.getErr('usernameExists'):this.error =  {type:"usernameExists"};break;
      case this.isSubmitted && !!this.getErr('firstname','required'):this.error =  {type:"firstnameReq"};break;
      case this.isSubmitted && !!this.getErr('firstname','minlength'):this.error =  {type:"firstnameInvalid"};break;
      case this.isSubmitted && !!this.getErr('firstname','maxlength'):this.error =  {type:"firstnameInvalid"};break;
      case this.isSubmitted && !!this.getErr('firstname','pattern'):this.error =  {type:"firstnameInvalid"};break;
      case this.isSubmitted && !!this.getErr('lastname','required'):this.error =  {type:"lastnameReq"};break;
      case this.isSubmitted && !!this.getErr('lastname','minlength'):this.error =  {type:"lastnameInvalid"};break;
      case this.isSubmitted && !!this.getErr('lastname','maxlength'):this.error =  {type:"lastnameInvalid"};break;
      case this.isSubmitted && !!this.getErr('lastname','pattern'):this.error =  {type:"lastnameInvalid"};break;
      case this.isSubmitted && !!this.getErr('yob','required'):this.error =  {type:"yobReq"};break;
      case this.isSubmitted && !!this.getErr('yob','minlength'):this.error =  {type:"yobInvalid"};break;
      case this.isSubmitted && !!this.getErr('yob','maxlength'):this.error =  {type:"yobInvalid"};break;
      case this.isSubmitted && !!this.getErr('yob','pattern'):this.error =  {type:"yobInvalid"};break;
      case this.isSubmitted && !!this.getErr('hometown','required'):this.error =  {type:"hometownReq"};break;
      case this.isSubmitted && !!this.getErr('hometown','minlength'):this.error =  {type:"hometownInvalid"};break;
      case this.isSubmitted && !!this.getErr('hometown','maxlength'):this.error =  {type:"hometownInvalid"};break;
      case this.isSubmitted && !!this.getErr('hometown','pattern'):this.error =  {type:"hometownInvalid"};break;
      case this.isSubmitted && !!this.getErr('username','required'):this.error =  {type:"usernameReq"};break;
      case this.isSubmitted && !!this.getErr('username','minlength'):this.error =  {type:"usernameInvalid"};break;
      case this.isSubmitted && !!this.getErr('username','maxlength'):this.error =  {type:"usernameInvalid"};break;
      case this.isSubmitted && !!this.getErr('username','pattern'):this.error =  {type:"usernameInvalid"};break;
      default:break;
    }
    this.isSubmitted = false;
  }
}