import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { takeUntil,Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppAlert,UserJson } from '@state';

@Component({
  selector: 'qs-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss'],
})
export class AuthSignInComponent {
  title = "auth-signin";
  loading = false;
  isSubmitted = false;
  error:AppAlert|null = null;
  editor:FormGroup;
  formdata = {
    username:['',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(16),
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/),
    ]],
    usernameNotExist:[''],
  };
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.editor = this.fb.group(this.formdata);
    this.auth.loading$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(loading => this.loading = loading);
    this.auth.userExists$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(exists => this.setErrorOnNonExistingUser(exists));
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
      const o = this.editor.value;
      delete o.usernameNotExists;
      this.auth.send("signin",o);
      this.isSubmitted = false;
    }
  }
  setErrorOnNonExistingUser(exists?:Record<string,boolean>){
    if(this.f && exists){
      const key = Object.keys(exists)[0];
      const val = Object.values(exists)[0];
      const errname = key +"NotExist";
      if(this.f[errname]){
        if(!val){
          this.f[errname].setErrors({[errname]:true});
          setTimeout(() => this.f[errname].setErrors(null),1800);
        }
        else this.f[errname].setErrors(null);
      }
      this.hasErrors();
    }
  }
  hasErrors(){
    this.error = null;
    if(this.editor.invalid) switch(true){
      case this.f['username'].dirty && this.getErr('usernameNotExist'):this.error =  {name:"usernameNotExist",type:"error"};break;
      case this.isSubmitted && !!this.getErr('username','required'):this.error =  {name:"usernameReq",type:"error"};break;
      case this.isSubmitted && !!this.getErr('username','minlength'):this.error =  {name:"usernameInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('username','maxlength'):this.error =  {name:"usernameInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('username','pattern'):this.error =  {name:"usernameInvalid",type:"error"};break;
      default:break;
    }
    this.isSubmitted = false;
  }
}