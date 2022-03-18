import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'qs-select-form',
  templateUrl: './qs-select-form.component.html',
  styleUrls: ['./qs-select-form.component.scss'],
})
export class SelectFormComponent {
  title = "qs-select-form";
  registerForm:FormGroup;
  loading = false;
  isSubmitted = false;
  cities:string[] = ['Florida','South Dakota','Tennessee','Michigan'];
  constructor(private fb:FormBuilder){
    this.registerForm = this.fb.group({
      action:['select-example',Validators.required],
      cityName:[null,Validators.required],
    });
  }
  changeCity(e:any){this.cityName?.setValue(e.target.value,{onlySelf:true});}
  get f(){return this.registerForm.controls;}
  get cityName(){return this.registerForm.get('cityName');}
  submitForm(){
    this.isSubmitted = true;
    if(!this.registerForm.valid){false;}
    else {
      const {firstname,lastname,..._o} = this.registerForm.value;
      const o = {..._o,name:{first:firstname,last:lastname}};
      //this.auth.send(o);
      this.registerForm.reset({
        action:"register-ext",
        tastes:[],
        roles:[],
      });
    }
  }
}
