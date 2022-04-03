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
export class MockApiLogger {
  static log = toConsole.bind(null,"log");
  static info = toConsole.bind(null,"info");
  static warn = toConsole.bind(null,"warn");
  static error = toConsole.bind(null,"error");
  static trace = toConsole.bind(null,"trace");
  static traceErr = toConsole.bind(null,"error");
  static ok = toConsole.bind(null,"ok");
  static clear = () => console.clear();
}