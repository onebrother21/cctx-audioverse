import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class AppLocalStorageService {
  _get(){
    const o = localStorage.getItem("qs");
    return JSON.parse(o||"{}");}
  _set<T>(o?:T){localStorage.setItem("qs",JSON.stringify(o));}
  del(k?:string){k?localStorage.removeItem(k):localStorage.clear();}
  get<k extends string>(s:k){return this._get()[s];}
  set<k extends string,T>(s:k,o:T){return this._set({...this._get(),[s]:o});}
  save = this.set;
}