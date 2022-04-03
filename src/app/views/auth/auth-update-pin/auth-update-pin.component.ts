import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { takeUntil,Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppAlert,UserJson } from '@state';

@Component({
  selector: 'qs-auth-update-pin',
  templateUrl: './auth-update-pin.component.html',
  styleUrls: ['./auth-update-pin.component.scss'],
})
export class AuthUpdatePinComponent {
  title = "auth-update-pin";
  greeting = "Create A Pin";
  pinConfig = {min:4,max:4,masked:true};
  isConfirm = false;
  isReset = false;
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
    confirm:['',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern(/^[0-9]+$/),
    ]],
    badConfirmPin:[''],
  };
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.editor = this.fb.group(this.formdata);
    this.auth.loading$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(loading => this.loading = loading);
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
    if(!this.f["pin"].value){
      this.f["pin"].setValue(pin);
      this.f["pin"].markAsDirty();
      this.greeting = "Now Confirm Your Pin";
      this.isConfirm = true;
    }
    else{
      this.f["confirm"].setValue(pin);
      this.f["confirm"].markAsDirty();
      this.isReset = true;
      this.f["pin"].value !== this.f["confirm"].value?
      this.setErrorOnBadConfirmPin({message:"nope"}):
      this.submitForm();
    }
  }
  submitForm(){
    this.isSubmitted = true;
    this.hasErrors();
    if(this.editor.valid){
      const o = this.editor.value;
      delete o.badConfirmPin;
      this.auth.send("update-pin",o);
      this.isSubmitted = false;
    }
  }
  setErrorOnBadConfirmPin(err?:any){
    const errname = "badConfirmPin";
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
      case this.f['confirm'].dirty && this.getErr('badConfirmPin'):this.error =  {name:"confirmPinInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('pin','required'):this.error =  {name:"pinReq",type:"error"};break;
      case this.isSubmitted && !!this.getErr('pin','minlength'):this.error =  {name:"pinInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('pin','maxlength'):this.error =  {name:"pinInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('pin','pattern'):this.error =  {name:"pinInvalid",type:"error"};break;
      default:break;
    }
    this.isSubmitted = false;
  }
}