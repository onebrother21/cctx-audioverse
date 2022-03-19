import { HttpResponse, HttpHeaders, HttpEvent } from '@angular/common/http';
import { AppError } from '@state';
import { of,throwError,Observable } from 'rxjs';

export const load = (s:string) => JSON.parse(localStorage.getItem(s)||"null");
export const save = <T>(s:string,m:T|T[],o?:T,i?:number) => {
  if(Array.isArray(m) && o && i) m[i] = o;
  localStorage.setItem(s,JSON.stringify(m));};
export const add = <T>(s:string,m:T[],o:T) => {
  m.push(o);
  save(s,m);};
export const findone = <T>(m:T[],k:string|string[],v:any|any[]) => {
  const multi = Array.isArray(k);
  const inc = multi && Array.isArray(v) && k.length == v.length;
  let i = m.findIndex(o => {
    if(multi){
      for(let i = 0,l = k.length;i<l;i++){
        const key = k[i];
        if(!inc && o[key] === v) return true;
        else if(o[key] !== v[i]) return false;
        else if(i == l - 1) return true;
      }
    }
    else return o[k as string] == v;
  }),o = m[i] as T;
  return {o,i};};
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
  error:(error:AppError) => throwError(error),
  fourohfour:() => throwError(new AppError({status:404,message:'Page not found',code:"ENOTFOUND"})),
  unauthorized:() => throwError(new AppError({status:401,message:'Unauthorized',code:"EAUTHORIZED"})),
  existingUser:() => throwError(new AppError({
    msg:'This username or email is already taken',
    status:422,
    code:"EEXISTINGUSER",
  })),
  userNotFound:() => throwError(new AppError({
    msg:'This user does not exist in our records',
    status:422,
    code:"EEXISTINGUSER",
  })),
  invalidAuth:() => throwError(new AppError({
    msg:'This username and password do not match our records',
    status:422,
    code:"EBADAUTH"
  })),
  invalidVCode:() => throwError(new AppError({
    msg:'This username and verification code do not match our records',
    status:422,
    code:"EBADCODE"
  })),
};