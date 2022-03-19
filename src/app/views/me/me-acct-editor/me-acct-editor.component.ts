import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { User } from '@state';
import { MeService } from '../me.service';

@Component({
  selector: 'qs-me-acct-editor',
  templateUrl: './me-acct-editor.component.html',
  styleUrls: ['./me-acct-editor.component.scss'],
})
export class MeAccountEditorComponent {
  title = "me-acct-editor";
  updateAcctForm:FormGroup;
  loading:boolean = false;
  me:Partial<User> = {};
  constructor(private user:MeService,private fb:FormBuilder){
    this.updateAcctForm = this.fb.group({
      action:['update-acct',Validators.required],
      email:['',Validators.required],
      phn:['',Validators.required],
      motto:['',Validators.required],
      bio:['',Validators.required],
    });
    this.user.loading$.subscribe(loading => this.loading = loading);
    this.user.me$.subscribe(me => {
      this.me = me;
      console.log(me);
      this.updateAcctForm.reset({
        action:"update-acct",
        email:me.email,
        phn:me.phn,
        motto:me.motto||"",
        bio:me.bio||"",
      });
    });
  }
  get f(){return this.updateAcctForm.controls;}
  submitForm(){
    const {firstname,lastname,..._o} = this.updateAcctForm.value;
    const o = {..._o,name:{first:firstname,last:lastname}};
    this.user.send(o);
    this.updateAcctForm.reset({
      action:"update-acct",
      email:"",
      phn:"",
      motto:"",
      bio:"",
    });
  }
}