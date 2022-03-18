import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { QS_Session } from '../models';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { sessions } from '../_data_api';


@Injectable({providedIn:'root'})

export class QS_SessionsService {
  ext = "/sessions";
  constructor(private app:AppService){}
  fetch(){return of(sessions);}//this.get<QS_Session[]>();}
  send(o:QS_Session){return this.app.http.post<QS_Session>(this.ext,o);}
}
