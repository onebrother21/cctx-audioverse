import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppService } from '@state';
import { Session } from '../models';
import { sessions } from '../_data_api';


@Injectable({providedIn:'root'})

export class SessionsService {
  ext = "/sessions";
  constructor(private app:AppService){}
  fetch(){return of(sessions);}//this.get<Session[]>();}
  send(o:Session){return this.app.http.post<Session>(this.ext,o);}
}
