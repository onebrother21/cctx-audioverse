import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { minSelectedCheckboxes } from '@shared';
import { UserJson } from '@state';
import { AuthService } from '../auth.service';

@Component({
  selector: 'qs-auth-register-ext',
  templateUrl: './auth-register-ext.component.html',
  styleUrls: ['./auth-register-ext.component.scss'],
})
export class AuthRegisterExtComponent {
  title = "auth-register-ext";
  loading = false;
  isSubmitted = false;
  user?:UserJson;
  editor:FormGroup;
  tastes = ["Country","Jazz","HipHop & Rap","R & B/Soul","Pop","Rock","Indie","Other"];
  mantles = ["Producer","Engineer","Writer","Vocalist","Rapper","Instrumentalist","Industry Rep","Fan","Other"];
  uses = [
    {label:"Create new music",value:"create"},
    {label:"Browse new music",value:"browse"},
    {label:"Learn from others",value:"learn"},
    {label:"Socialize with others",value:"socialize"},];
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.auth.loading$.subscribe(loading => this.loading = loading);
    this.auth.me$.subscribe(user => this.user = user);
    this.editor = this.fb.group({
      action:['register-ext',Validators.required],
      mantles:new FormArray([],minSelectedCheckboxes(1)),
      tastes:new FormArray([],minSelectedCheckboxes(1)),
      uses:new FormArray([],minSelectedCheckboxes(1)),
    });
    
    this.addCheckboxes();
  }
  private addCheckboxes() {
    this.tastes.forEach(() => this.tastesFormArray.push(new FormControl(false)));
    this.mantles.forEach(() => this.mantlesFormArray.push(new FormControl(false)));
    this.uses.forEach(() => this.usesFormArray.push(new FormControl(false)));
  }
  get f(){return this.editor.controls;}
  get tastesFormArray(){return this.editor.controls["tastes"] as FormArray;}
  get tastesControls(){return this.tastesFormArray.controls;}
  get mantlesFormArray(){return this.editor.controls["mantles"] as FormArray;}
  get mantlesControls(){return this.mantlesFormArray.controls;}
  get usesFormArray(){return this.editor.controls["uses"] as FormArray;}
  get usesControls(){return this.usesFormArray.controls;}
  mapAndFilterCheckList(o:any[],_o:any[]){return o.map((checked:boolean,i:number) => checked?_o[i]:null).filter((v:any) => v !== null);}
  submitForm(){
    this.isSubmitted = true;
    if(!this.editor.valid){false;}
    const tastes = this.mapAndFilterCheckList(this.editor.value.tastes,this.tastes);
    const mantles = this.mapAndFilterCheckList(this.editor.value.mantles,this.mantles);
    const uses = this.mapAndFilterCheckList(this.editor.value.uses,this.uses).map(o => o.value);
    const o = {
      action:this.editor.value.action,
      tastes,mantles,uses,
      username:this.user?.username,
    };
    this.auth.send("register-ext",o);
    this.editor.reset({
      tastes:[],
      mantles:[],
      uses:[],
    });
  }
}

