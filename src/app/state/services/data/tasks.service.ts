import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppService } from '../app';
import { Task } from '../../models';
import { tasks } from '../../_data_api';


@Injectable({providedIn:'root'})

export class TasksService {
  ext = "/tasks";
  constructor(private app:AppService){}
  fetch(){return of(tasks);}//this.app.http.get<Task[]>("/");}
  fetchOne(username:string){return this.app.http.get<Task>("/"+username);}
  create(username:string){return this.app.http.post<Task>("/",{username});}
  update(id:string,updates:Partial<Task>){return this.app.http.put<Task>("/"+id,updates);}
  remove(id:string){return this.app.http.del("/"+id);}
}
