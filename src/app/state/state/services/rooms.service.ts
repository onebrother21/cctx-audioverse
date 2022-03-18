import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { QS_Room } from '../models';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { rooms } from '../_data_api';


@Injectable({providedIn:'root'})

export class QS_RoomsService {
  ext = "/rooms";
  constructor(private app:AppService){}
  fetch(){return of(rooms);}//this.get<QS_Room[]>();}
  send(o:QS_Room){return this.app.http.post<QS_Room>(this.ext,o);}
}
