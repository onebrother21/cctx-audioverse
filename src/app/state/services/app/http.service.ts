import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppLocalStorageService } from './local-storage.service';
import { DeletedEntity } from "../../common";

@Injectable({providedIn:"root"})
export class AppHttpService {
  url = "http://localhost:3000/apis/";
  constructor(public http:HttpClient,private local:AppLocalStorageService){}
  get opts(){
    const authtkn = this.local.get("token");
    return {
      headers:{
      "Content-Type":"Application/json",
      ...authtkn?{authorization:`Bearer ${authtkn}`}:null
      }
    };
  }
  get<T>(x = ""){return this.http.get<T>(`${this.url}/${x}`,this.opts);}
  post<T>(x = "",o:any){return this.http.post<T>(`${this.url}/${x}`,o,this.opts);}
  put<T>(x = "",o:any){return this.http.put<T>(`${this.url}/${x}`,o,this.opts);}
  del(x = ""){return this.http.delete<DeletedEntity>(`${this.url}/${x}`,this.opts);}
}