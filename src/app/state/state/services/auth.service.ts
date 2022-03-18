import { Injectable } from '@angular/core';
import { AppEntity, AppService } from '@state';
import { QS_User } from '../models';
import { map,tap } from 'rxjs/operators';
import { Observable,of, throwError } from 'rxjs';
import { AuthUsersDBService } from '../_auth_api';

@Injectable({providedIn:'root'})
export class QS_AuthenticationService {
  ext = "/secur01";
  constructor(private app:AppService,private _auth:AuthUsersDBService){}
  save(o:any){this.app.local.set("appuser",o);}
  navigateAuthentication(action:string){
    const navigator = () => {
      switch(true){
        case /signup/.test(action):return "/secur01/verify";
        case /verify/.test(action):return "/secur01/register";
        case /register-ext/.test(action):return "/secur01/update-pin";
        case /register/.test(action):return "/secur01/register-ext";
        case /update-pin/.test(action):return "/me";
        case /signin/.test(action):return "/secur01/login";
        case /login/.test(action):return "/me";
        default:return "/";
      }
    };
    return of(navigator());
  }
  getAuthStatus(o:Partial<QS_User>){
    const sessionTime = 1000 * 60 * 3;
    const idleTime = o.lastActivity?o.lastActivity.getTime() - Date.now():0;
    return o.username && o.token && sessionTime >= idleTime?"authok":
    o.username && o.token?"signedin":
    "";
  }
  signin(o:{username:string}){return this._auth.signin(o);}
  //this.app.http.post<User>(this.ext+"/signin",o);}
  signup(o:{email:string}){return this._auth.signup(o);}
  //{return this.app.http.post<User>(this.ext+"/signup",o);}
  verify(o:{username:string;code:string}){return this._auth.verify(o);}
  //{return this.app.http.post<User>(this.ext+"/verify",o);}
  login(o:{username:string;pin:string}){return this._auth.login(o);}
  //{return this.app.http.post<User>(this.ext+"/login",o);}
  register(o:QS_User){return this._auth.register(o);}
  //{return this.app.http.post<User>(this.ext+"/register",o);}
  registerExt(o:any){return this._auth.registerExt(o);}
  //{return this.app.http.post<User>(this.ext+"/register",o);}
  forgot(o:{email:string}){return of(o);}
  //{return this.app.http.post<User>(this.ext+"/forgot",o);}
  updatePin(o:{username:string;pin:string}){return this._auth.updatePin(o);}
  //{return this.app.http.post<User>(this.ext+"/updatePin",o);}
}