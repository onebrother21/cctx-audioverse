import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppLocalStorageService } from './local-storage.service';
import { DeletedEntity } from "../../common";

@Injectable({providedIn:"root"})
export class AppHttpService {
  url = "http://localhost:3000/apis/";
  constructor(public http:HttpClient,private local:AppLocalStorageService){}
  opts(headers?:any){
    const authtkn = this.local.get("token");
    return {
      headers:{
      "Content-Type":"Application/json",
      ...authtkn?{authorization:`Bearer ${authtkn}`}:null,
      ...headers,
      }
    };
  }
  get<T>(x = "",h = {}){return this.http.get<T>(`${this.url}/${x}`,this.opts(h));}
  post<T>(x = "",o:any,h = {}){return this.http.post<T>(`${this.url}/${x}`,o,this.opts(h));}
  put<T>(x = "",o:any,h = {}){return this.http.put<T>(`${this.url}/${x}`,o,this.opts(h));}
  del(x = "",h = {}){return this.http.delete<DeletedEntity>(`${this.url}/${x}`,this.opts(h));}
}