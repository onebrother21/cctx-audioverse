import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AppService } from '../app';
import { ChatMsg } from '../../models';
import { msgs } from '../../_data_api';
@Injectable({providedIn:'root'})

export class ChatMessagesService {
  ext = "/msgs";
  constructor(private app:AppService){}
  fetch(){return of(msgs);}//this.app.http.get<ChatMsg[]>("/");}
  fetchOne(username:string){return this.app.http.get<ChatMsg>("/"+username);}
  create(username:string){return this.app.http.post<ChatMsg>("/",{username});}
  update(id:string,updates:Partial<ChatMsg>){return this.app.http.put<ChatMsg>("/"+id,updates);}
  remove(id:string){return this.app.http.del("/"+id);}
}
