import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Strings } from "../../common";

@Injectable({providedIn:"root"})
export class AppAlertsService {
  errors:Strings = {
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
    firstnameReq:"First name is required.",
    firstnameInvalid:"First name is invalid. Letters and spaces only,between 2 and 20 characters.",
    lastnameReq:"Last name is required.",
    lastnameInvalid:"Last name is invalid. Letters and spaces only,between 2 and 20 characters.",
    dobReq:"DOB is required.",
    hometownReq:"Hometown is required.",
    hometownInvalid:"Hometown is invalid. Letters and spaces only,between 4 and 20 characters.",
  };
  make(err:{type:string}){return of({type:err.type,msg:this.errors[err.type]});}
}