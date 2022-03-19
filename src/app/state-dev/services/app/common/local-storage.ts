import { Injectable } from '@angular/core';
import { AppWindowService } from './window';

@Injectable({providedIn:'root'})
export class AppLocalStorageService {
  get(k?:string){return JSON.parse(localStorage.getItem(k));}
  set(k:string,o:any){localStorage.setItem(k,JSON.stringify(o));}
  del(k?:string){k?localStorage.removeItem(k):localStorage.clear();}
  save = this.set;
}