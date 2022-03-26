import { environment as env } from "@env/environment";

type Constructor<T> = new (...args:any[]) => T;
export const isProd = (o = false):o is boolean =>  env.production || env.prod;
export const isDebug = (o = false):o is boolean => env.debug;
export const cap = (s:string,all?:boolean) => all?s.toUpperCase():(s[0].toUpperCase()+s.slice(1));
export const low = (s:string,all?:boolean) => all?s.toLowerCase():(s[0].toLowerCase()+s.slice(1));
export const snake = (s:string) => {
  let newStr = "";
  for(let i =0;i<s.length;i++){
    newStr += !i?s[i].toLowerCase():
    /[A-Z]/.test(s[i])?("-"+s[i].toLowerCase()):s[i];}
  return newStr;
};
export const is = <T>(o:T):o is T => !(o === undefined || o === null);
export const isMatch = (test:RegExp|string[],...a:string[]):boolean => {
  for(let i = 0;i<a.length;i++){
    switch(true){
      case isArr(test) && test.length && test.indexOf(a[i]) > -1:return true;
      case (test as RegExp).test(a[i]):return true;
      case i == a.length - 1:return false;
      default:break;
    }
  }
  return false;
};
export const isStr = (o:string|any):o is string => typeof o == "string";
export const isNum = (o:number|any):o is number => typeof o == "number";
export const isBool = (o:boolean|any):o is boolean => typeof o == "boolean";
export const isArr = <T>(o:T[]|any):o is T[] => Array.isArray(<T[]>o);
export const isObj = (o:{}|any):o is object => !isArr(o) && !isFunc(o) && typeof o === "object";
export const isFunc = (o:Function|any):o is Function => typeof (<Function>o) == "function";
export const isErr = (o:Error|any):o is Error => o instanceof Error;
export const isDate = (o:Date|any):o is Date => o instanceof Date;
export const isType = <T extends any,U extends Constructor<T>>(o:any,c:U):o is T => o instanceof c;
export const isEmpty = (o:{}|any[]|any) => {
  if(isObj(o)) return !Object.keys(o).length;
  if(isArr(o)) return !o.length;
  else throw(`global "empty" called on non-array or non-object`);
};
export const oProps = (o:{}|any) => {
  if(isObj(o)) return Object.keys(o);
  else throw `global "props" called on non-object`;
};
export const oHas = (o:any[]|{}|any,k:string) => {
  if(isArr(o)) return o.indexOf(k) > -1;
  if(isObj(o)) return oProps(o).indexOf(k) > -1;
  else throw `global "has" called on non-array or non-object`;
};
export const randnum = (min:number,max:number) => Math.floor(Math.random() * (max - min + 1) + min);
export const S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);
export const longId = () => S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4();
export const shortId = () => S4()+S4();
const colors = {
  log:"cyan",
  warn:"yellow",
  info:"blue",
  error:"red",
  trace:"purple",
  ok:"lime-green"
};
const reset = "\x1b[39m";
const toConsole = (c:string,...a:any[]) => {
  const color = colors[c as keyof typeof colors];
  const error = console.error.bind(console,"%c "+c.toLocaleUpperCase(),"color:"+color);
  const warn = console.warn.bind(console,"%c "+c.toLocaleUpperCase(),"color:"+color);
  const trace = console.trace.bind(console,"%c "+c.toLocaleUpperCase(),"color:"+color);
  const log = console.log.bind(console,"%c "+c.toLocaleUpperCase(),"color:"+color);
  switch(c){
    case "error":error(...a);break;
    case "warn":warn(...a);break;
    case "trace":trace(...a);break;
    default:log(...a);break;
  }
  return true;
};
export const log = toConsole.bind(null,"log");
export const info = toConsole.bind(null,"info");
export const warn = toConsole.bind(null,"warn");
export const error = toConsole.bind(null,"error");
export const trace = toConsole.bind(null,"trace");
export const traceErr = toConsole.bind(null,"error");
export const ok = toConsole.bind(null,"ok");
export const clear = () => console.clear();