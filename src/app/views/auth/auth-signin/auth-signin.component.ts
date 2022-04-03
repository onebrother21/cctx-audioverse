import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { takeUntil,Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserJson } from '@state';

@Component({
  selector: 'qs-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss'],
})
export class AuthSignInComponent {
  title = "auth-signin";
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
    usernameNotExist:[''],
  };
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.editor = this.fb.group(this.formdata);
    this.auth.loading$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(loading => this.loading = loading);
    this.auth.me$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(user => this.user = user);
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
      const {firstname,lastname,yob,..._o} = this.editor.value;
      const o = {
        ..._o,
        name:{first:firstname,last:lastname},
        yob:new Date(yob),
        email:this.user?.email,
        phn:this.user?.phn,
      };
      delete o.usernameExists;
      this.auth.send("signin",o);
      this.isSubmitted = false;
    }
  }
  setErrorOnNonExistingUser(exists?:Record<string,boolean>){
    console.log(exists);
    if(this.f && exists){
      const key = Object.keys(exists)[0];
      const val = Object.values(exists)[0];
      const errname = key +"NotExist";
      if(!val){
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
      case this.f['username'].dirty && this.getErr('usernameNotExist'):this.error =  {type:"usernameNotExist"};break;
      case this.isSubmitted && !!this.getErr('username','required'):this.error =  {type:"usernameReq"};break;
      case this.isSubmitted && !!this.getErr('username','minlength'):this.error =  {type:"usernameInvalid"};break;
      case this.isSubmitted && !!this.getErr('username','maxlength'):this.error =  {type:"usernameInvalid"};break;
      case this.isSubmitted && !!this.getErr('username','pattern'):this.error =  {type:"usernameInvalid"};break;
      default:break;
    }
    this.isSubmitted = false;
  }
}