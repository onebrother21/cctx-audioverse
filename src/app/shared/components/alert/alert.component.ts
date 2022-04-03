import { Component,Input,Output,EventEmitter } from '@angular/core';
import { AppAlert,Strings,CommonUtils as Utils } from '@state';

@Component({
  selector: 'qs-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  someField: boolean = false;
  title = "alert";
  isShowing = false;
  message = "";
  messageType = "";
  alerts:Strings = {
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
    codeSent:"[SENT VIA EMAIL/TEXT] Your verification code is: {code}",
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
  @Input() set alert(alert:AppAlert|null){
    switch(true){
      case !alert:{
        this.clear();
        break;
      }
      case !this.isShowing:{
        this.show(alert);
        break;
      }
      default:break;
    }
  }
  replaceData(alert?:AppAlert|null){
    if(!alert) return "";
    const msg = Utils.replaceData(this.alerts[alert.name],alert.data||{});
    console.log(msg,alert.data);
    return msg;
  }
  clear(){
    this.message = "";
    this.messageType = "";
    this.isShowing = false;
  }
  show(alert?:AppAlert|null){
    if(alert){
      this.messageType = alert.type;
      this.message = this.replaceData(alert);
      this.isShowing = true;
      this.duration?setTimeout(() => this.clear(),this.duration):null;
    }
  }
  close(){
    this.confirm.emit();
    this.clear();
  }
}
