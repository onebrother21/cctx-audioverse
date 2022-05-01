import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { takeUntil,Subject } from 'rxjs';
import { MeService } from '../me.service';
import { AppAlert } from '@state';

@Component({
  selector: 'qs-me-editor-settings',
  templateUrl: './me-editor-settings.component.html',
  styleUrls: ['./me-editor-settings.component.scss'],
})
export class MeEditorSettingsComponent {
  title = "me-editor-settings";
  loading = false;
  isSubmitted = false;
  error:AppAlert|null = null;
  editor:FormGroup;
  formdata = {
    canActivate:[''],
    canShare:[''],
    acceptInvites:[''],
    sendInvites:[''],
    createSnippets:[''],
    maxSessions:[''],
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
  getErr(field:string,errname?:string){return this.f[field].errors?.[errname||field];}
  reset(){
    this.editor.reset({
      canActivate:"",
      canShare:"",
      acceptinvites:"",
      sendInvites:"",
      createSnippets:"",
      maxSessions:"",
    });
  }
  submitForm(){
    this.isSubmitted = true;
    this.hasErrors();
    if(this.editor.valid){
      const o = this.editor.value;
      console.log(o);//this.user.send(o);
      this.isSubmitted = false;
    }
  }
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
      default:break;
    }
    this.isSubmitted = false;
  }
}