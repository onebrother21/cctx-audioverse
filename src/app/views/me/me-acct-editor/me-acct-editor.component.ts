import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MeService } from '../me.service';

@Component({
  selector: 'qs-me-acct-editor',
  templateUrl: './me-acct-editor.component.html',
  styleUrls: ['./me-acct-editor.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class MeAccountEditorComponent {
  title = "me-acct-editor";
  updateAcctForm:FormGroup;
  loading:boolean = false;
  constructor(private user:MeService,private fb:FormBuilder){
    this.user.loading.subscribe(loading => this.loading = loading);
    this.updateAcctForm = this.fb.group({
      action:['update',Validators.required],
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      age:['',Validators.required],
      hometown:['',Validators.required],
    });
  }
  get f(){return this.updateAcctForm.controls;}
  submitForm(){
    const {firstname,lastname,..._o} = this.updateAcctForm.value;
    const o = {..._o,name:{first:firstname,last:lastname}};
    this.user.send(o);
    this.updateAcctForm.reset({
      action:"updateAcct",
      username:"",
      firstname:"",
      lastname:"",
      age:"",
      hometown:"",
    });
  }
}