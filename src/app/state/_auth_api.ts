import { Injectable } from '@angular/core';
import { map,tap,delay } from 'rxjs/operators';
import { Observable,of, throwError } from 'rxjs';

import { AppEntity, AppService } from '@state';
import { User } from './models';

@Injectable({providedIn:'root'})
export class AuthUsersDBService {
  ext = "/api";
  constructor(private app:AppService){}
  fetchUser(){return this.app.local.get("appuserDB");}
  saveUser(o:any){
    delete o.type;
    this.app.local.set("appuserDB",o);
    return o;
  }
  randomInt(min:number,max:number){return Math.floor(Math.random() * (max - min + 1) + min);}
  genAuthTkn(){let s:string = "";for(let i=0,l=12;i<l;i++) s += this.randomInt(0,9);return s;}
  returnAuth(o:Partial<User>,auth?:boolean):User {
    auth?o.token = this.genAuthTkn():null;
    this.saveUser(o);
    delete o.pin;
    delete o.code;
    return o as User;
  }
  fetchJSON = () => of(this.returnAuth(this.fetchUser()));
  saveAndRespondWJSON = (o:Partial<User>,auth?:boolean,delayTime:number = 300) => {
    return of(this.returnAuth(o,auth)).pipe(delay(delayTime));
  }
  signin(o:{username:string}){
    let user = this.fetchUser();
    if(user.username !== o.username) return throwError(() => ({status:401,message:"No user exists"}));
    return this.saveAndRespondWJSON({...user,...o});
  }
  signup(o:{email:string}){
    let user = new AppEntity({username:o.email,pin:"",name:{first:"",last:""},code:"555555"});
    return this.saveAndRespondWJSON({...user,...o});
  }
  verify(o:{username:string;code:string}){
    const user = this.fetchUser();
    if(user.code !== o.code) return throwError(() => ({name:"Error",status:401,msg:"Bad code"}));
    user.verified = new Date();
    return this.saveAndRespondWJSON({...user,...o,});
  }
  login(o:{username:string;pin:string}){
    const user = this.fetchUser();
    if(user.pin !== o.pin) return throwError(() => ({status:401,message:"Bad pin"}));
    user.lastLogin = new Date();
    return this.saveAndRespondWJSON({...user,...o,},true,1000);
  }
  register(o:Partial<User>){
    const user = this.fetchUser();
    return this.saveAndRespondWJSON({...user,...o});
  }
  registerExt(o:Partial<User>){
    const user = this.fetchUser();
    return this.saveAndRespondWJSON({...user,...o});
  }
  forgot(o:{email:string}){return of(o);}
  updatePin(o:{username:string;pin:string}){
    const user = this.fetchUser();
    user.pin = o.pin;
    return this.saveAndRespondWJSON({...user,...o},true,1000);
  }
  update(o:Partial<User>){
    const user = this.fetchUser();
    return this.saveAndRespondWJSON({...user,...o});
  }
}