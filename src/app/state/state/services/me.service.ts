import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { QS_User } from '../models';
import { map,tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';
import { AuthUsersDBService } from '../_auth_api';

const me:QS_User = {
  id:"my-id-01",
  phn:"832-448-1315",
  created:new Date("06/06/2020"),
  username:"jackswift",
  email:"service.onebrother@gmail.com",
  img:"",
  name:{first:"Jack",last:"Swift"},
};

@Injectable({providedIn:'root'})
export class QS_MeService {
  ext = "/app-user";
  constructor(private app:AppService,private _auth:AuthUsersDBService){}
  update(o:Partial<QS_User>){return this._auth.update(o).pipe(tap(o => this.save(o)));
  }//{return this.app.http.post<User>(this.ext+"/update",o);}
  populate(){return this.app.local.get("appuser");}
  save(o:any){return this.app.local.set("appuser",o);}
}
