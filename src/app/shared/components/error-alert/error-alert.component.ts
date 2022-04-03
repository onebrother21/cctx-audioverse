import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'qs-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.scss'],
})
export class ErrorAlertComponent {
  someField: boolean = false;
  title = "error-alert";
  isShowing = false;
  errorType ?= "";
  errors:{[k:string]:string} = {
    phnOrEmailReq:"Phone or email is required.",
    phnReq:"Phone is required.",
    phnInvalid:"Phone must be a valid US phone number.",
    phnExists:"This phone number is already in use.",
    emailReq:"Email is required.",
    emailInvalid:"Email must be a valid email address.",
    emailExists:"This email is already in use.",
    codeReq:"Code is required.",
    codeInvalid:"Code is invalid.",
    codeIncorrect:"Code is incorrect.",
    usernameReq:"Username is required.",
    usernameInvalid:"Username is invalid.",
    usernameExists:"This username is already in use.",
    usernameNotExist:"This username does not exist.",
    firstnameReq:"First name is required.",
    firstnameInvalid:"First name is invalid. Letters and spaces only,between 2 and 20 characters.",
    lastnameReq:"Last name is required.",
    lastnameInvalid:"Last name is invalid. Letters and spaces only,between 2 and 20 characters.",
    dobReq:"DOB is required.",
    hometownReq:"Hometown is required.",
    hometownInvalid:"Hometown is invalid. Letters and spaces only,between 4 and 20 characters.",
    pinReq:"Pin is required.",
    pinInvalid:"Pin is invalid.",
    pinIncorrect:"Pin is incorrect.",
    confirmPinInvalid:"Pin confirmation does not match.",
  };
  @Output() confirm:EventEmitter<any> = new EventEmitter();
  @Input() duration:number = 0;
  @Input() set alert(err:{type:string}|null){
    switch(true){
      case !err:{this.errorType = "";this.isShowing = false;break;}
      case !this.isShowing:{this.showAlert((err||{}).type);break;}
      default:break;
    }
  }
  showAlert(err?:string){
    this.errorType = err;
    this.isShowing = true;
    this.duration?setTimeout(() => {
      this.errorType = "";
      this.isShowing = false;
    },this.duration):null;
  }
  closeAlert(){
    this.confirm.emit();
    this.isShowing = false;
  }
}
