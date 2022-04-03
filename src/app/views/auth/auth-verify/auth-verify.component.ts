import { AfterViewInit, Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { takeUntil,Subject } from 'rxjs';
import { UserJson } from '@state';
import { AuthService } from '../auth.service';
import { MockBackendNotifier } from "@api";

@Component({
  selector: 'qs-auth-verify',
  templateUrl: './auth-verify.component.html',
  styleUrls: ['./auth-verify.component.scss'],
})
export class AuthVerifyComponent implements AfterViewInit {
  listenForMockVerificationCodeAlert(){this.notifier.notification$.subscribe(alert => this.alert = alert);}
  ngAfterViewInit():void {this.listenForMockVerificationCodeAlert();}
  alert = "";
  title = "auth-verify";
  loading = false;
  isSubmitted = false;
  error:{type:string}|null = null;
  user?:UserJson;
  editor:FormGroup;
  formdata = {
    code:['',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8),
      Validators.pattern(/^[A-Z0-9]+$/),
    ]],
    badCode:[''],
  };
  constructor(
    private notifier:MockBackendNotifier,
    private auth:AuthService,
    private fb:FormBuilder){
    this.editor = this.fb.group(this.formdata);
    this.auth.loading$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(loading => this.loading = loading);
    this.auth.me$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(user => this.user = user);
    this.auth.error$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(err => this.setErrorOnBadCode(err));
  }
  private ngUnsubscribe:Subject<boolean> = new Subject();
  ngOnDestroy(){
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
  get f(){return this.editor.controls;}
  getErr(field:string,errname?:string){return this.f[field].errors?.[errname||field];}
  reset(){this.editor.reset({code:"",badCode:""});}
  submitForm(){
    this.isSubmitted = true;
    this.hasErrors();
    if(this.editor.valid){
      const o = {
        ...this.editor.value,
        email:this.user?.email,
        phn:this.user?.phn,
      };
      delete o.badCode;
      this.auth.send("verify",o);
      this.isSubmitted = false;
    }
  }
  setErrorOnBadCode(err?:any){
    const errname = "badCode";
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
      case this.f['code'].dirty && this.getErr('badCode'):this.error =  {type:"codeIncorrect"};break;
      case this.isSubmitted && !!this.getErr('code','required'):this.error =  {type:"codeReq"};break;
      case this.isSubmitted && !!this.getErr('code','minlength'):this.error =  {type:"codeInvalid"};break;
      case this.isSubmitted && !!this.getErr('code','maxlength'):this.error =  {type:"codeInvalid"};break;
      case this.isSubmitted && !!this.getErr('code','pattern'):this.error =  {type:"codeInvalid"};break;
      default:break;
    }
    this.isSubmitted = false;
  }
}