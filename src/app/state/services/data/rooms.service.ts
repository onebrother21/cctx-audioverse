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
  fetch(){return of(rooms);}//this.get<Room[]>();}
  send(o:Room){return this.app.http.post<Room>(this.ext,o);}
}
