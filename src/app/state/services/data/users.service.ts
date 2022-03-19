import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppService } from '../app';
import { User, UserJson } from '../../models';
import { users } from '../../_data_api';


@Injectable({providedIn:'root'})

export class UsersService {
  ext = "/users";
  constructor(private app:AppService){}
  fetch(){return of(users);}//this.app.http.get<User[]>("/");}
  fetchOne(username:string){return this.app.http.get<UserJson>("/"+username);}
  create(username:string){return this.app.http.post<UserJson>("/",{username});}
  update(id:string,updates:Partial<User>){return this.app.http.put<UserJson>("/"+id,updates);}
  remove(id:string){return this.app.http.del("/"+id);}
}