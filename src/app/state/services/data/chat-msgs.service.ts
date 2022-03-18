import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AppService } from '../app';
import { ChatMsg } from '../../models';

@Injectable({providedIn:'root'})

export class ChatMessagesService {
  ext = "/msgs";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<ChatMsg[]>();}
  send(o:ChatMsg){return this.app.http.post<ChatMsg>(this.ext,o);}
}
