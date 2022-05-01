import { HttpResponse, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { AppError } from "../common";
import { of,Observable } from 'rxjs';

@Injectable({providedIn:"root"})
export class MockBackendHandlers {
  errors:{[k:string]:(...a:any) => Observable<HttpEvent<AppError|Error>>} = {
    someerror:(error:AppError) => {throw error;},
    fourohfour:() => {throw new AppError({status:404,msg:'Page not found',code:"ENOTFOUND"});},
    unauthorized:() => {throw new AppError({status:401,msg:'Unauthorized',code:"EAUTHORIZED"});},
    existingUser:() => {throw new AppError({
      msg:'This username or email is already taken',
      status:422,
      code:"EEXISTINGUSER",
    });},
    userNotFound:() => {throw new AppError({
      msg:'This user does not exist in our records',
      status:422,
      code:"ENOUSER",
    });},
    invalidAuth:() => {throw new AppError({
      msg:'This username and password do not match our records',
      status:422,
      code:"EBADAUTH"
    });},
    invalidCode:() => {throw new AppError({
      msg:'This username and verification code do not match our records',
      status:422,
      code:"EBADCODE"
    });},
  };
  e = this.errors;
  ok = (body?:any) => of(new HttpResponse({status:200,body}));
  private isLoggedIn = (headers:HttpHeaders) => {
    const auth = headers.get('Authorization');
    return auth && /auth-token/.test(auth.split(" ")[1]);
  };
  authGuard = (req:HttpRequest<any>,res:any) => !this.isLoggedIn(req?.headers)?this.e["unauthorized"]():this.ok(res);
  idFromUrl = (url:string) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
  };
  queryFromUrl = (url:string) => {
    const querySeperator = url.includes('lookup?')?"lookup?":url.includes('query?')?"query?":"q?";
    const urlParts = url.split(querySeperator);
    const q = urlParts[urlParts.length - 1].split("=");
    return {field:q[0],val:q[1]};
  };
  
}