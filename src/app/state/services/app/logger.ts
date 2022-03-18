import { Injectable } from "@angular/core";
import { Strings } from "../../models";

const colors:Strings = {
  log:"cyan",
  warn:"yellow",
  info:"blue",
  error:"red",
  trace:"purple",
  ok:"lime-green"};
const reset = "\x1b[39m";

@Injectable({providedIn:"root"})
export class AppLoggingService {
  log = this.toConsole.bind(null,"log");
  info = this.toConsole.bind(null,"info");
  warn = this.toConsole.bind(null,"warn");
  error = this.toConsole.bind(null,"error");
  trace = this.toConsole.bind(null,"trace");
  traceErr = this.toConsole.bind(null,"error");
  ok = this.toConsole.bind(null,"ok");
  toConsole(c:string,...a:any[]){
    const color = colors[c];
    const error = console.error.bind(console,"%c "+c.toLocaleUpperCase(),"color:"+color);
    const warn = console.warn.bind(console,"%c "+c.toLocaleUpperCase(),"color:"+color);
    const trace = console.trace.bind(console,"%c "+c.toLocaleUpperCase(),"color:"+color);
    const log = console.log.bind(console,"%c "+c.toLocaleUpperCase(),"color:"+color);
    switch(c){
      case "error":error(...a);break;
      case "warn":warn(...a);break;
      case "trace":trace(...a);break;
      default:log(...a);break;}
    return true;}
  clear = () => console.clear();
}