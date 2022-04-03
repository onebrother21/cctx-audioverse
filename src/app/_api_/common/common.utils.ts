import { environment as env } from "@env/environment";

type Constructor<T> = new (...args:any[]) => T;
export class CommonUtils {
  static isProd = (o = false):o is boolean =>  env.production || env.prod;
  static isDebug = (o = false):o is boolean => env.debug;
  static is = <T>(o:T):o is T => !(o === undefined || o === null);
  static isMatch = (test:RegExp|string[],...a:string[]):boolean => {
    for(let i = 0;i<a.length;i++){
      switch(true){
        case this.isArr(test) && test.length && test.indexOf(a[i]) > -1:return true;
        case (test as RegExp).test(a[i]):return true;
        case i == a.length - 1:return false;
        default:break;
      }
    }
    return false;
  };
  static isStr = (o:string|any):o is string => typeof o == "string";
  static isNum = (o:number|any):o is number => typeof o == "number";
  static isBool = (o:boolean|any):o is boolean => typeof o == "boolean";
  static isArr = <T>(o:T[]|any):o is T[] => Array.isArray(<T[]>o);
  static isObj = (o:{}|any):o is object => !this.isArr(o) && !this.isFunc(o) && typeof o === "object";
  static isFunc = (o:Function|any):o is Function => typeof (<Function>o) == "function";
  static isErr = (o:Error|any):o is Error => o instanceof Error;
  static isDate = (o:Date|any):o is Date => o instanceof Date;
  static isType = <T extends any,U extends Constructor<T>>(o:any,c:U):o is T => o instanceof c;
  static isEmpty = (o:{}|any[]|any) => {
    if(this.isObj(o)) return !Object.keys(o).length;
    if(this.isArr(o)) return !o.length;
    else throw(`global "empty" called on non-array or non-object`);
  };
  static randnum = (min:number,max:number) => Math.floor(Math.random() * (max - min + 1) + min);
  static S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  static longId = () => this.S4()+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4();
  static shortId = () => this.S4()+this.S4();
  static cap = (s:string,all?:boolean) => all?s.toUpperCase():(s[0].toUpperCase()+s.slice(1));
  static low = (s:string,all?:boolean) => all?s.toLowerCase():(s[0].toLowerCase()+s.slice(1));
  static snake = (s:string) => {
    let newStr = "";
    for(let i =0;i<s.length;i++){
      newStr += !i?s[i].toLowerCase():
      /[A-Z]/.test(s[i])?("-"+s[i].toLowerCase()):s[i];}
    return newStr;
  };
  static replaceData(str:string,data:any = {}){
    const dataReplacer = (withDelimiters:string,withoutDelimiters:string):string =>
    data.hasOwnProperty(withoutDelimiters)?
    data[withoutDelimiters]:
    withDelimiters;
    return str.replace(/{(\w+)}/g,dataReplacer);
  };
  static oProps = (o:{}|any) => {
    if(this.isObj(o)) return Object.keys(o);
    else throw `global "props" called on non-object`;
  };
  static oHas = (o:any[]|{}|any,k:string) => {
    if(this.isArr(o)) return o.indexOf(k) > -1;
    if(this.isObj(o)) return this.oProps(o).indexOf(k) > -1;
    else throw `global "has" called on non-array or non-object`;
  };
  static dateParser = (str:string|Date) => {
    if(str){
      if(str instanceof Date) return str;
      else if(new Date(str) instanceof Date) return new Date(str);
      else{
        //format should be dd/mm/yyyy. Separator can be anything e.g. / or -. It wont effect
        const day   = parseInt(str.substring(0,2));
        const month  = parseInt(str.substring(3,5));
        const yr   = parseInt(str.substring(6,10));
        const date = new Date(yr,month - 1,day);
        return date;
      }
    }
    return null;
  };
}