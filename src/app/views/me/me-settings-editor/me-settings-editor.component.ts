import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { User } from '@state';
import { MeService } from '../me.service';

@Component({
  selector: 'qs-me-settings-editor',
  templateUrl: './me-settings-editor.component.html',
  styleUrls: ['./me-settings-editor.component.scss'],
})
export class MeSettingsEditorComponent {
  title = "me-settings-editor";
  updateSettingsForm:FormGroup;
  loading:boolean = false;
  me:Partial<User> = {};
  constructor(private user:MeService,private fb:FormBuilder){
    this.updateSettingsForm = this.fb.group({
      action:['update-settings',Validators.required],
      email:['',Validators.required],
      phn:['',Validators.required],
      motto:['',Validators.required],
      bio:['',Validators.required],
    });
    this.user.loading$.subscribe(loading => this.loading = loading);
    this.user.me$.subscribe(me => {
      this.me = me;
      console.log(me);
      this.updateSettingsForm.reset({
        action:"update-settings",
        email:me.email,
        phn:me.phn,
        motto:me.motto||"",
        bio:me.bio||"",
      });
    });
  }
  get f(){return this.updateSettingsForm.controls;}
  submitForm(){
    const {firstname,lastname,..._o} = this.updateSettingsForm.value;
    const o = {..._o,name:{first:firstname,last:lastname}};
    this.user.send(o);
    this.updateSettingsForm.reset({
      action:"update-settings",
      email:"",
      phn:"",
      motto:"",
      bio:"",
    });
  }
}