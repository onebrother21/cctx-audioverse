import { Injectable } from "@angular/core";
import { environment as env } from "@env/environment";
import { Constructor } from "../../types";

@Injectable({providedIn:"root"})
export class AppUtilsService {
  isProd = (o = false):o is boolean =>  env.production || env.prod;
  isDebug = (o = false):o is boolean => env.debug;
  cap = (s:string,all?:boolean) => all?s.toUpperCase():(s[0].toUpperCase()+s.slice(1));
  low = (s:string,all?:boolean) => all?s.toLowerCase():(s[0].toLowerCase()+s.slice(1));
  snake = (s:string) => {
    let newStr = "";
    for(let i =0;i<s.length;i++){
      newStr += !i?s[i].toLowerCase():
      /[A-Z]/.test(s[i])?("-"+s[i].toLowerCase()):s[i];}
    return newStr;};
  is = <T>(o:T):o is T => !(o === undefined || o === null);
  isMatch = (test:RegExp|string[],...a:string[]):boolean => {
    for(let i = 0;i<a.length;i++){
      switch(true){
        case this.isArr(test) && test.length && test.indexOf(a[i]) > -1:return true;
        case (test as RegExp).test(a[i]):return true;
        case i == a.length - 1:return false;
        default:break;}}
      return false;};
  isStr = (o:string|any):o is string => typeof o == "string";
  isNum = (o:number|any):o is number => typeof o == "number";
  isBool = (o:boolean|any):o is boolean => typeof o == "boolean";
  isArr = <T>(o:T[]|any):o is T[] => Array.isArray(<T[]>o);
  isObj = (o:{}|any):o is object => !this.isArr(o) && !this.isFunc(o) && typeof o === "object";
  isFunc = (o:Function|any):o is Function => typeof (<Function>o) == "function";
  isErr = (o:Error|any):o is Error => o instanceof Error;
  isDate = (o:Date|any):o is Date => o instanceof Date;
  isType = <T extends any,U extends Constructor<T>>(o:any,c:U):o is T => o instanceof c;
  isEmpty = (o:{}|any[]|any) => {
    if(this.isObj(o)) return !Object.keys(o).length;
    if(this.isArr(o)) return !o.length;
    else throw(`global "empty" called on non-array or non-object`);};
  oProps = (o:{}|any) => {
    if(this.isObj(o)) return Object.keys(o);
    else throw `global "props" called on non-object`;};
  oHas = (o:any[]|{}|any,k:string) => {
    if(this.isArr(o)) return o.indexOf(k) > -1;
    if(this.isObj(o)) return this.oProps(o).indexOf(k) > -1;
    else throw `global "has" called on non-array or non-object`;};
}