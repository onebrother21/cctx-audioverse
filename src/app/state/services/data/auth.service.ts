import { Injectable } from '@angular/core';
import { AppService } from '../app';
import { User,UserJson } from '../../models';
import { of } from 'rxjs';

@Injectable({providedIn:'root'})
export class AuthenticationService {
  ext = "/auth";
  constructor(private app:AppService){}
  lookup(q:Partial<UserJson>){
    const key = Object.keys(q)[0] as keyof UserJson;
    const val = Object.values(q)[0];
    const qstr = `${key}=${val}`;
    return this.app.http.get<{results:{[key:string]:boolean;}}>(this.ext+"/lookup?"+qstr);
  }
  signup(o:{email:string}){return this.app.http.post<UserJson>(this.ext+"/signup",o);}
  signin(o:{username:string}){return this.app.http.post<UserJson>(this.ext+"/signin",o);}
  verify(o:{email:string;code:string;phn?:string}){return this.app.http.post<UserJson>(this.ext+"/verify",o);}
  register(o:Partial<User>){return this.app.http.post<UserJson>(this.ext+"/register",o);}
  registerExt(o:Partial<User>){return this.app.http.put<UserJson>(this.ext+"/register",o);}
  updatePin(o:{username:string;pin:string}){return this.app.http.put<UserJson>(this.ext+"/login",o);}
  login(o:{username:string;pin:string}){return this.app.http.post<UserJson>(this.ext+"/login",o);}
  logout(o:{username?:string;}){return this.app.http.post(this.ext+'/logout',o);}
  forgotName(o:any){return this.app.http.post<UserJson>(this.ext+"/forgot",o);}
  forgotPin(o:{email:string}){return this.app.http.post<UserJson>(this.ext+"/forgot",o);}
  navigateUserentication(action:string){
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
  getUserStatus(o:Partial<UserJson>){
    const sessionTime = 1000 * 60 * 3;
    const activity = o.activity?o.activity.time:new Date();
    const idleTime = activity.getTime() - Date.now();
    return o.username && o.token && sessionTime >= idleTime?"authok":
    o.username && o.token?"signedin":
    "";
  }
}