import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { minSelectedCheckboxes } from '@shared';
import { AuthService } from '../auth.service';

@Component({
  selector: 'qs-auth-register-ext',
  templateUrl: './auth-register-ext.component.html',
  styleUrls: ['./auth-register-ext.component.scss'],
})
export class AuthRegisterExtComponent {
  title = "auth-register-ext";
  registerForm:FormGroup;
  loading = false;
  isSubmitted = false;
  tastes = ["Country","Jazz","HipHop & Rap","Pop","Rock","Indie"];
  roles = ["Producer","Engineer","Writer","Vocalist","Rapper","Instrumentalist","Industry Rep","Fan"];
  uses = ["Create new music","Browse new music","Learn from others","Socialize with others"];
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.auth.loading.subscribe(loading => this.loading = loading);
    this.registerForm = this.fb.group({
      action:['register-ext',Validators.required],
      roles:new FormArray([],minSelectedCheckboxes(1)),
      tastes:new FormArray([],minSelectedCheckboxes(1)),
      uses:new FormArray([],minSelectedCheckboxes(1)),
    });
    
    this.addCheckboxes();
  }
  private addCheckboxes() {
    this.tastes.forEach(() => this.tastesFormArray.push(new FormControl(false)));
    this.roles.forEach(() => this.rolesFormArray.push(new FormControl(false)));
    this.uses.forEach(() => this.usesFormArray.push(new FormControl(false)));
  }
  get f(){return this.registerForm.controls;}
  get tastesFormArray(){return this.registerForm.controls["tastes"] as FormArray;}
  get tastesControls(){return this.tastesFormArray.controls;}
  get rolesFormArray(){return this.registerForm.controls["roles"] as FormArray;}
  get rolesControls(){return this.rolesFormArray.controls;}
  get usesFormArray(){return this.registerForm.controls["uses"] as FormArray;}
  get usesControls(){return this.usesFormArray.controls;}
  mapAndFilterCheckList(o:any[],_o:any[]){return o.map((checked:boolean,i:number) => checked?_o[i]:null).filter((v:any) => v !== null);}
  submitForm(){
    this.isSubmitted = true;
    if(!this.registerForm.valid){false;}
    const tastes = this.mapAndFilterCheckList(this.registerForm.value.tastes,this.tastes);
    const roles = this.mapAndFilterCheckList(this.registerForm.value.roles,this.roles);
    const uses = this.mapAndFilterCheckList(this.registerForm.value.uses,this.uses);
    const o = {action:this.registerForm.value.action,tastes,roles,uses};
    console.log(o);
    this.auth.send(o);
    this.registerForm.reset({
      action:"register-ext",
      tastes:[],
      roles:[],
      uses:[],
    });
  }
}

