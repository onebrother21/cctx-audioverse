import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { QS_Task } from '../models';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { tasks } from '../_data_api';


@Injectable({providedIn:'root'})

export class QS_TasksService {
  ext = "/tasks";
  constructor(private app:AppService){}
  fetch(){return of(tasks);}//this.get<QS_Task[]>();}
  send(o:QS_Task){return this.app.http.post<QS_Task>(this.ext,o);}
}
