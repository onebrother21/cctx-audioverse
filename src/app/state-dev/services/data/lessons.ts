import { Injectable } from '@angular/core';
import { AppHttpService } from './common';
import { HCLLesson } from '../models';

@Injectable({providedIn: 'root'})

export class HCLLessonsService extends AppHttpService {
  url = 'localhost:3000/api/v1/lessons';
  fetchRecent(){return this.get<HCLLesson[]>();}
  create(lesson:HCLLesson){return this.post<HCLLesson>(undefined,lesson);}
  update(id:string,updates:HCLLesson){return this.put<HCLLesson>(undefined,id,updates);}
  remove(id:string){return this.del(undefined,id);}
}