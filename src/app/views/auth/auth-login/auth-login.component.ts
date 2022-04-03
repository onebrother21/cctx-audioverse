import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { takeUntil,Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserJson } from '@state';

@Component({
  selector: 'qs-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  title = "auth-login";
  greeting = "Enter Your Pin";
  pinConfig = {min:4,max:4,masked:true};
  isReset = false;
  loading = false;
  isSubmitted = false;
  error:{type:string}|null = null;
  user?:UserJson;
  editor:FormGroup;
  formdata = {
    pin:['',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern(/^[0-9]+$/),
    ]],
    badPin:[''],
  };
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.editor = this.fb.group(this.formdata);
    this.auth.loading$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(loading => this.loading = loading);
    this.auth.me$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(user => this.user = user);
    this.auth.error$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(err => this.setErrorOnBadPin(err));
  }
  private ngUnsubscribe:Subject<boolean> = new Subject();
  ngOnDestroy(){
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
  get f(){return this.editor.controls;}
  getErr(field:string,errname?:string){return this.f[field].errors?.[errname||field];}
  reset(){this.editor.reset({pin:"",badCode:""});}
  updatePin(pin:string){
    this.f["pin"].setValue(pin);
    this.isReset = true;
    this.submitForm();
  }
  submitForm(){
    this.isSubmitted = true;
    this.hasErrors();
    if(this.editor.valid){
      const o = {...this.editor.value,username:this.user?.username,};
      delete o.badPin;
      this.auth.send("login",o);
      this.isSubmitted = false;
    }
  }
  setErrorOnBadPin(err?:Error){
    const errname = "badPin";
    if(this.f && err){
      this.f[errname].setErrors({[errname]:true});
      setTimeout(() => this.f[errname].setErrors(null),1800);
    }
    else this.f[errname].setErrors(null);
    this.hasErrors();
  }
  hasErrors(){
    this.error = null;
    if(this.editor.invalid) switch(true){
      case this.f['pin'].dirty && this.getErr('badPin'):this.error =  {type:"pinIncorrect"};break;
      case this.isSubmitted && !!this.getErr('pin','required'):this.error =  {type:"pinReq"};break;
      case this.isSubmitted && !!this.getErr('pin','minlength'):this.error =  {type:"pinInvalid"};break;
      case this.isSubmitted && !!this.getErr('pin','maxlength'):this.error =  {type:"pinInvalid"};break;
      case this.isSubmitted && !!this.getErr('pin','pattern'):this.error =  {type:"pinInvalid"};break;
      default:break;
    }
    this.isSubmitted = false;
  }
}