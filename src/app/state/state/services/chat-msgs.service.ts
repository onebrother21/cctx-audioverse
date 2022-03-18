import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { QS_ChatMsg } from '../models';
import { tap } from 'rxjs/operators';


@Injectable({providedIn:'root'})

export class QS_ChatMessagesService {
  ext = "/msgs";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<QS_ChatMsg[]>();}
  send(o:QS_ChatMsg){return this.app.http.post<QS_ChatMsg>(this.ext,o);}
}
