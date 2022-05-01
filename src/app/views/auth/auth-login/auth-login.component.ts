import { Component, EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { takeUntil,Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppAlert } from '@state';

@Component({
  selector: 'qs-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  title = "auth-login";
  greeting = "Enter Your Pin";
  pinConfig = {min:4,max:4,masked:true};
  clear = new EventEmitter();
  loading = false;
  isSubmitted = false;
  error:AppAlert|null = null;
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
    this.f["pin"].markAsDirty();
    this.clear.emit();
    this.submitForm();
  }
  submitForm(){
    this.isSubmitted = true;
    this.hasErrors();
    if(this.editor.valid){
      const o = this.editor.value;
      delete o.badPin;
      this.auth.send("login",o);
      this.isSubmitted = false;
    }
  }
  setErrorOnBadPin(err?:Error){
    const errname = "badPin";
    if(this.f && this.f[errname]){
      if(err){
        this.f[errname].setErrors({[errname]:true});
        setTimeout(() => this.f[errname].setErrors(null),1800);
      }
      else this.f[errname].setErrors(null);
    }
    this.hasErrors();
  }
  hasErrors(){
    this.error = null;
    if(this.editor.invalid) switch(true){
      case this.f['pin'].dirty && this.getErr('badPin'):this.error =  {name:"pinIncorrect",type:"error"};break;
      case this.isSubmitted && !!this.getErr('pin','required'):this.error =  {name:"pinReq",type:"error"};break;
      case this.isSubmitted && !!this.getErr('pin','minlength'):this.error =  {name:"pinInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('pin','maxlength'):this.error =  {name:"pinInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('pin','pattern'):this.error =  {name:"pinInvalid",type:"error"};break;
      default:break;
    }
    this.isSubmitted = false;
  }
}