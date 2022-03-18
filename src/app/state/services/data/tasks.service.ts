import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppService } from '@state';
import { Task } from '../models';
import { tasks } from '../_data_api';


@Injectable({providedIn:'root'})

export class TasksService {
  ext = "/tasks";
  constructor(private app:AppService){}
  fetch(){return of(tasks);}//this.get<Task[]>();}
  send(o:Task){return this.app.http.post<Task>(this.ext,o);}
}
