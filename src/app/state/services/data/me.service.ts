import { Injectable } from '@angular/core';
import { AppService } from '../app';
import { User,UserJson } from '../../models';

@Injectable({providedIn:'root'})
export class MeService {
  ext = "/app-user";
  constructor(private app:AppService){}
  update(o:Partial<User>){return this.app.http.post<UserJson>(this.ext+"/update",o);}
  populate(){return this.app.local.get("appuser") as UserJson|undefined;}
  save(o:any){return this.app.local.set("appuser",o||null);}
}
