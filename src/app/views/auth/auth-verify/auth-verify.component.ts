import { AfterViewInit, Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AppService,UserJson } from '@state';
import { AuthService } from '../auth.service';
import { MockBackendNotifier } from "@api";

@Component({
  selector: 'qs-auth-verify',
  templateUrl: './auth-verify.component.html',
  styleUrls: ['./auth-verify.component.scss'],
})
export class AuthVerifyComponent implements AfterViewInit {
  title = "auth-verify";
  alert = "";
  loading = false;
  isSubmitted = false;
  user?:UserJson;
  form:FormGroup;
  constructor(
    private notifier:MockBackendNotifier,
    private auth:AuthService,
    private fb:FormBuilder){
    this.auth.loading$.subscribe(loading => this.loading = loading);
    this.auth.me$.subscribe(user => this.user = user);
    this.auth.error$.subscribe(err => this.setErrorOnBadCode(err as any));
    this.form = this.fb.group({
      code:['',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/),
      ]],
      badCode:[''],
    });
  }
  ngAfterViewInit():void {
    this.notifier.notification$.subscribe(alert => {
      console.log(alert);
      this.alert = alert;
    });
  }
  get f(){return this.form.controls;}
  hasValidationErrors(){return this.isSubmitted && this.form.invalid;}
  submitForm(){
    this.isSubmitted = true;
    if(this.form.valid){
      const o = {
        ...this.form.value,
        email:this.user?.email,
        phn:this.user?.phn,
      };
      delete o.badCode;
      this.auth.send("verify",o);
      this.isSubmitted = false;
    }
  }
  hasBadCodeError(){return this.form.dirty && this.form.invalid && this.f['badCode'].errors?.['badCode'];}
  setErrorOnBadCode = (err:Error) => {
      if(err){
        this.f["badCode"].setErrors({badCode:true});
        setTimeout(() => {
          this.f["badCode"].setErrors(null);
          //this.form.reset({action:"verify",code:""});
        },1500);
      }
      else this.f["badCode"].setErrors(null);
  }
}