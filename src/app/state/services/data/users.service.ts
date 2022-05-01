import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppService } from '../app';
import { User, UserJson } from '../../models';


@Injectable({providedIn:'root'})
export class UsersService {
  ext = "/users";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<UserJson[]>(this.ext);}
  fetchOne(username:string){return this.app.http.get<UserJson>(this.ext+"/"+username);}
  create(o:{username:string}){return this.app.http.post<UserJson>(this.ext,o);}
  update(id:string,updates:Partial<User>){return this.app.http.put<UserJson>(this.ext+"/"+id,updates);}
  remove(id:string){return this.app.http.del(this.ext+"/"+id);}
  query(q:{[k in keyof User]?:User[k]}){
    const qstr = `${Object.keys(q)[0]}=${Object.values(q)[0]}`;
    return this.app.http.get<UserJson[]>(this.ext+"/q?"+qstr);
  }
}