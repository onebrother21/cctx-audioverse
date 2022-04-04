import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { takeUntil,Subject } from 'rxjs';
import { MeService } from '../me.service';
import { AppAlert,UserJson } from '@state';

@Component({
  selector: 'qs-me-acct-editor',
  templateUrl: './me-acct-editor.component.html',
  styleUrls: ['./me-acct-editor.component.scss'],
})
export class MeAccountEditorComponent {
  title = "me-acct-editor";
  loading = false;
  isSubmitted = false;
  error:AppAlert|null = null;
  editor:FormGroup;
  formdata = {
    username:['',[
      Validators.minLength(4),
      Validators.maxLength(16),
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/),
    ]],
    email:['',[Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
    phn:['',[Validators.pattern(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)]],
    motto:['',[
      Validators.minLength(1),
      Validators.maxLength(150),
    ]],
    bio:['',[
      Validators.minLength(1),
      Validators.maxLength(150),
    ]],
    usernameExists:[''],
    emailExists:[''],
  };
  constructor(private user:MeService,private fb:FormBuilder){
    this.editor = this.fb.group(this.formdata);
    this.user.loading$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(loading => this.loading = loading);
    //this.user.userExists$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(exists => this.setErrorOnExistingUser(exists));
    //this.user.queryForExistingUser("username",this.f["username"].valueChanges);
  }
  private ngUnsubscribe:Subject<boolean> = new Subject();
  ngOnDestroy(){
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
  get f(){return this.editor.controls;}
  reset(){
    this.editor.reset({
      username:"",
      email:"",
      phn:"",
      motto:"",
      bio:"",
      usernameExists:"",
      emailExists:"",
    });
  }
  submitForm(){
    this.isSubmitted = true;
    this.hasErrors();
    if(this.editor.valid){
      const o = this.editor.value;
      delete o.usernameExists;
      delete o.emailExists;
      console.log(o);//this.user.send(o);
      this.isSubmitted = false;
    }
  }
  getErr(field:string,errname?:string){return this.f[field].errors?.[errname||field];}
  setErrorOnExistingUser(exists?:Record<string,boolean>){
    if(this.f && exists){
      const key = Object.keys(exists)[0];
      const val = Object.values(exists)[0];
      const errname = key +"Exists";
      if(this.f[errname]){
        if(val){
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
      case this.f['username'].dirty && this.getErr('usernameExists'):this.error =  {name:"usernameExists",type:"error"};break;
      case this.isSubmitted && !!this.getErr('username','minlength'):this.error =  {name:"usernameInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('username','maxlength'):this.error =  {name:"usernameInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('username','pattern'):this.error =  {name:"usernameInvalid",type:"error"};break;
      case this.f['email'].dirty && this.getErr('emailExists'):this.error =  {name:"emailExists",type:"error"};break;
      case this.isSubmitted && !!this.getErr('email','pattern'):this.error =  {name:"emailInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('phn','pattern'):this.error =  {name:"phnInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('motto','minlength'):this.error =  {name:"mottoInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('motto','maxlength'):this.error =  {name:"mottoInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('bio','minlength'):this.error =  {name:"bioInvalid",type:"error"};break;
      case this.isSubmitted && !!this.getErr('bio','maxlength'):this.error =  {name:"bioInvalid",type:"error"};break;
      default:break;
    }
    this.isSubmitted = false;
  }
}