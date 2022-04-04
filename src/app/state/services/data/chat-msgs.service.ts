import { Injectable } from '@angular/core';
import { of,tap } from 'rxjs';

import { AppService } from '../app/app.service';
import { ChatMsg } from '../../models';
@Injectable({providedIn:'root'})

export class ChatMessagesService {
  ext = "/msgs";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<ChatMsg[]>("/");}
  fetchOne(id:string){return this.app.http.get<ChatMsg>("/"+id);}
  send(o:ChatMsg){return this.app.http.post<ChatMsg>("/",o);}
}
