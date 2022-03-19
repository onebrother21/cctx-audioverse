import { Injectable } from '@angular/core';
import { environment as env } from "@env/environment";
import { AppLocalStorageService } from './local-storage';

export type Constructor<T> = {new(...a:any[]):T;};

@Injectable({providedIn:'root'})
export class AppGlobalsService {
  isProd = (o = null):o is boolean =>  env.prod;
  isDebug = (o = null):o is boolean => env.debug;
  cap = (s:string,all?:boolean) => all?s.toUpperCase():(s[0].toUpperCase()+s.substr(1));
  low = (s:string,all?:boolean) => all?s.toLowerCase():(s[0].toLowerCase()+s.substr(1));
  snake = (s:string) => {
    let newStr = "";
    for(let i =0;i<s.length;i++){
      newStr += !i?s[i].toLowerCase():
      /[A-Z]/.test(s[i])?("-"+s[i].toLowerCase()):s[i];}
    return newStr;};
  is = <T>(o:T):o is T => !(o === undefined || o === null);
  isMatch = (r:RegExp|string,s:string|string[],...a:string[]) => {
    if(this.isArr(s) && s.length){return s.indexOf(<string>r) > -1;}
    if(a.length){for(let i = 0;i<a.length;i++) if((<RegExp>r).test(a[i])) return true;}
    else{return (<RegExp>r).test(<string>s);}};
  isStr = (o:string|any):o is string => typeof o == "string";
  isNum = (o:number|any):o is number => typeof o == "number";
  isBool = (o:boolean|any):o is boolean => typeof o == "boolean";
  isArr = <T>(o:T[]|any):o is T[] => Array.isArray(<any[]>o);
  isObj = (o:{}|any):o is object => !this.isArr(o) && !this.isFunc(o) && typeof o === "object";
  isFunc = (o:Function|any):o is Function => typeof (<Function>o) == "function";
  isErr = (o:Error|any):o is Error => o instanceof Error;
  isDate = (o:Date|any):o is Date => o instanceof Date;
  instance = <T extends any,U extends Constructor<T>>(o:any,c:U):o is T => o instanceof c;
  type = <T extends any,U extends Constructor<T>>(o:any,c:U):o is T => o instanceof c;
  empty = (o:{}|any[]|any) => {
    if(this.isObj(o)) return !Object.keys(o).length;
    if(this.isArr(o)) return !o.length;
    else throw(`global "empty" called on non-array or non-object`);};
  props = (o:{}|any) => {
    if(this.isObj(o)) return Object.keys(o);
    else throw `global "props" called on non-object`;};
  has = (o:any[]|{}|any,k:string) => {
    if(this.isArr(o)) return o.indexOf(k) > -1;
    if(this.isObj(o)) return this.props(o).indexOf(k) > -1;
    else throw `global "has" called on non-array or non-object`;};
}