import { AfterViewInit, Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { takeUntil,Subject } from 'rxjs';
import { AppAlert } from '@state';
import { AuthService } from '../auth.service';
import { MockBackendNotifier } from "@api";

@Component({
  selector: 'qs-auth-verify',
  templateUrl: './auth-verify.component.html',
  styleUrls: ['./auth-verify.component.scss'],
})
export class AuthVerifyComponent implements AfterViewInit {
  listenForMockVerificationCodeAlert(){
    this.notifier.notification$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(notification => {
      if(notification) this.alert = {
        name:"codeSent",
        type:"success",
        data:{code:notification.split(": ")[1]}
      };
    });
  }
  ngAfterViewInit(){this.listenForMockVerificationCodeAlert();}
  alert:AppAlert|null = null;
  error:AppAlert|null = null;
  title = "auth-verify";
  loading = false;
  isSubmitted = false;
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
      const o = this.editor.value;
      delete o.badCode;
      this.auth.send("verify",o);
      this.isSubmitted = false;
    }
  }
  setErrorOnBadCode(err?:any){
    const errname = "badCode";
    if(this.f[errname]){
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
      case this.f['code'].dirty && this.getErr('badCode'):this.error =  {name:"codeIncorrect",type:"error"};break;
      case this.isSubmitted && !!this.getErr('code','required'):this.error =  {name:"codeReq",type:"error"};break;
      case this.isSubmitted && !!this.getErr('code','minlength'):this.error =  {name:"codeInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('code','maxlength'):this.error =  {name:"codeInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('code','pattern'):this.error =  {name:"codeInvalid",type:"error"};break;
      default:break;
    }
    this.isSubmitted = false;
  }
}