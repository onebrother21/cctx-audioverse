import { Injectable } from "@angular/core";
import { AppWindowService } from "./window";

@Injectable({providedIn:"root"})
export class AppLocalStorageService {
  _get(){
    const o = localStorage.getItem("oba-apps");
    return o?JSON.parse(o):{};}
  _set<T>(o?:T){localStorage.setItem("oba-apps",JSON.stringify(o||{}));}
  del(k?:string){k?localStorage.removeItem(k):localStorage.clear();}
  get<k extends string>(s:k){return this._get()[s];}
  set<k extends string,T>(s:k,o:T){return this._set({...this._get(),[s]:o});}
  save = this.set;
}