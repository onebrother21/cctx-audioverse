import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeletedEntity } from '../../models';
import { AppLocalStorageService } from './local-storage';
import { AppLoggingService } from './logger';

@Injectable({providedIn:'root'})
export class AppHttpService {
  url = "";
  constructor(public http:HttpClient,public local:AppLocalStorageService){}
  get opts(){
    const authtkn = this.local.get("hcl-auth-tkn");
    return {headers:{
      'Content-Type':'application/json',
      ...authtkn?{authorization:`Bearer ${authtkn}`}:null}};}
  get<T>(x = ""){return this.http.get<T>(this.url+x,this.opts);}
  post<T>(x = "",o:any){return this.http.post<T>(this.url+x,o,this.opts);}
  put<T>(x = "",id:string,o:any){return this.http.put<T>(`${this.url+x}/${id}`,o,this.opts);}
  del(x = "",id:string){return this.http.delete<DeletedEntity>(`${this.url+x}/${id}`,this.opts);}
}