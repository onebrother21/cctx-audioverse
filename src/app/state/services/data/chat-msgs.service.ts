import { Injectable } from '@angular/core';
import { of,tap } from 'rxjs';

import { AppService } from '../app';
import { ChatMsg } from '../../models';
import { msgs } from '../../_data_api';
@Injectable({providedIn:'root'})

export class ChatMessagesService {
  ext = "/msgs";
  constructor(private app:AppService){}
  fetch(){return of(msgs);}//this.app.http.get<ChatMsg[]>("/");}
  fetchOne(id:string){return this.app.http.get<ChatMsg>("/"+id);}
  send(o:ChatMsg){return this.app.http.post<ChatMsg>("/",o);}
}
