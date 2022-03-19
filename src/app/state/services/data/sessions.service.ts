import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppService } from '../app';
import { Session } from '../../models';
import { sessions } from '../../_data_api';


@Injectable({providedIn:'root'})

export class SessionsService {
  ext = "/sessions";
  constructor(private app:AppService){}
  fetch(){return of(sessions);}//this.app.http.get<Session[]>("/");}
  fetchOne(id:string){return this.app.http.get<Session>("/"+id);}
  create(o:Session){return this.app.http.post<Session>("/",o);}
  update(id:string,updates:Partial<Session>){return this.app.http.put<Session>("/"+id,updates);}
  remove(id:string){return this.app.http.del("/"+id);}
}
