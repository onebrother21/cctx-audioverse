import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppService } from '@state';
import { User } from '../models';
import { users } from '../../_data_api';


@Injectable({providedIn:'root'})

export class UsersService {
  ext = "/users";
  constructor(private app:AppService){}
  fetch(){return of(users);}//this.get<User[]>();}
  send(o:User){return this.app.http.post<User>(this.ext,o);}
}
