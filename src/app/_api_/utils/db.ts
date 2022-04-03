export class MockApiDBHelpers {
  static load = (s:string) => JSON.parse(localStorage.getItem(s)||"null");
  static save = <T>(s:string,m:T|T[],o?:T,i?:number) => {
    if(Array.isArray(m) && o && i) m[i] = o;
    localStorage.setItem(s,JSON.stringify(m));};
  static add = <T>(s:string,m:T[],o:T) => {m.push(o);this.save(s,m);};
  static findone = <T>(m:T[],keys:string|string[],value:any|any[]) => {
    let i:number = -1;
    const indexFilter = (k:string) => {
      if(!Array.isArray(value)) i = m.findIndex(o => o[k as keyof T] === value);
      else for(let j = 0,l = value.length;j<l;j++){
        i = m.findIndex(o => o[k as keyof T] === value[j]);
        if(i !== -1) break;
      }
    };
    if(typeof keys == "string") indexFilter(keys);
    else for(let j = 0,l = keys.length;j<l;j++){indexFilter(keys[j]);if(i !== -1) break;}
    return {o:m[i],i};
  };
}