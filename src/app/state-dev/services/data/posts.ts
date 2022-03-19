import { Injectable } from '@angular/core';
import { HCLPost } from '../models';
import { AppHttpService } from './common';

@Injectable({providedIn: 'root'})

export class HCLPostsService extends AppHttpService {
  url = 'localhost:3000/api/v1/posts';
  fetch(){return this.get<HCLPost[]>();}
  fetchRecent(){return this.get<HCLPost[]>("/recent");}
  create(post:HCLPost){return this.post<HCLPost>(undefined,post);}
  update(id:string,updates:HCLPost){return this.put<HCLPost>(undefined,id,updates);}
  remove(id:string){return this.del(undefined,id);}
}