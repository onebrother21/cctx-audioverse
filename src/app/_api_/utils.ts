import { HttpResponse, HttpHeaders, HttpEvent } from '@angular/common/http';
import { AppError } from '@state';
import { of,Observable } from 'rxjs';

export const load = (s:string) => JSON.parse(localStorage.getItem(s)||"null");
export const save = <T>(s:string,m:T|T[],o?:T,i?:number) => {
  if(Array.isArray(m) && o && i) m[i] = o;
  localStorage.setItem(s,JSON.stringify(m));};
export const add = <T>(s:string,m:T[],o:T) => {m.push(o);save(s,m);};
export const findone = <T>(m:T[],keys:string|string[],value:any|any[]) => {
  let i:number = -1;
  const checker = (k:string) => {
    if(!Array.isArray(value)) i = m.findIndex(o => o[k as keyof T] === value);
    else for(let j = 0,l = value.length;j<l;j++){
      i = m.findIndex(o => o[k as keyof T] === value[j]);
      if(i !== -1) break;
    }
  };
  if(typeof keys == "string") checker(keys);
  else for(let j = 0,l = keys.length;j<l;j++){checker(keys[j]);if(i !== -1) break;}
  return {o:m[i],i};
};
export const ok = (body?:any) => of(new HttpResponse({status:200,body}));
export const isLoggedIn = (headers:HttpHeaders) => {
  const auth = headers.get('Authorization');
  return auth && /auth-token/.test(auth.split(" ")[1]);
};
export const idFromUrl = (url:string) => {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1];
};
export const queryFromUrl = (url:string) => {
  const urlParts = url.split('q?');
  const q = urlParts[urlParts.length - 1].split("=");
  return {[q[0]]:q[1]};
};
export const errors:{[k:string]:(...a:any) => Observable<HttpEvent<AppError|Error>>} = {
  error:(error:AppError) => {throw error;},
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