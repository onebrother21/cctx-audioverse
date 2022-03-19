import { Injectable } from '@angular/core';
import { map,tap } from 'rxjs/operators';
import { Observable,of, throwError } from 'rxjs';

import { AppService } from '../app';
import { AuthAcct, AuthJson, User } from '../../models';
import { AuthUsersDBService } from '../../_auth_api';

@Injectable({providedIn:'root'})
export class AuthenticationService {
  ext = "/secur01";
  url = "localhost:3000/api/v1/auth";
  //register(newuser:AuthConfig){return this.app.http.post<AuthStatus>('/register',newuser);}
  //login(creds:AuthCreds){return this.app.http.post<AuthStatus>('/login',creds);}
  //verify(creds:AuthCreds){return this.app.http.post<AuthStatus>('/verify',creds);}
  //reset(creds:AuthCreds){return this.app.http.post<AuthStatus>('/reset',creds);}
  //logout(username:string){return this.app.http.del('/login',username);}
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
  getAuthStatus(o:Partial<AuthJson>){
    const sessionTime = 1000 * 60 * 3;
    const lastActivity = new Date(o.lastActivity||"");
    const idleTime = lastActivity.getTime() - Date.now();
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
  register(o:User){return this._auth.register(o);}
  //{return this.app.http.post<User>(this.ext+"/register",o);}
  registerExt(o:any){return this._auth.registerExt(o);}
  //{return this.app.http.post<User>(this.ext+"/register",o);}
  forgot(o:{email:string}){return of(o);}
  //{return this.app.http.post<User>(this.ext+"/forgot",o);}
  updatePin(o:{username:string;pin:string}){return this._auth.updatePin(o);}
  //{return this.app.http.post<User>(this.ext+"/updatePin",o);}
}