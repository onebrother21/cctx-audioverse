import { Injectable } from '@angular/core';
import { map,tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';

import { AppService } from '../app';
import { User } from '../../models';
import { AuthUsersDBService } from '../../_auth_api';

@Injectable({providedIn:'root'})
export class MeService {
  ext = "/app-user";
  constructor(private app:AppService,private _auth:AuthUsersDBService){}
  update(o:Partial<User>){return this._auth.update(o).pipe(tap(o => this.save(o)));
  }//{return this.app.http.post<UserJson>(this.ext+"/update",o);}
  populate(){return this.app.local.get("appuser");}
  save(o:any){return this.app.local.set("appuser",o);}
}
