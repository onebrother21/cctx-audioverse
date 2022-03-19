import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppService } from '../app';
import { Room } from '../../models';
import { rooms } from '../../_data_api';


@Injectable({providedIn:'root'})

export class RoomsService {
  ext = "/rooms";
  constructor(private app:AppService){}
  fetch(){return of(rooms);}//this.app.http.get<Room[]>("/");}
  fetchOne(id:string){return this.app.http.get<Room>("/"+id);}
  create(o:Room){return this.app.http.post<Room>("/",o);}
  update(id:string,updates:Partial<Room>){return this.app.http.put<Room>("/"+id,updates);}
  remove(id:string){return this.app.http.del("/"+id);}
}
