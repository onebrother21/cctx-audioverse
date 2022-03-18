import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { QS_User } from '../models';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { users } from '../_data_api';


@Injectable({providedIn:'root'})

export class QS_UsersService {
  ext = "/users";
  constructor(private app:AppService){}
  fetch(){return of(users);}//this.get<QS_User[]>();}
  send(o:QS_User){return this.app.http.post<QS_User>(this.ext,o);}
}
