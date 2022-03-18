import { Injectable } from '@angular/core';
import { AppEntity, AppService } from '@state';
import { QS_User,QS_Task,QS_TaskAgent, QS_Session, QS_Room } from './models';
import { map,tap,delay } from 'rxjs/operators';
import { Observable,of, throwError } from 'rxjs';

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
  returnAuth(o:Partial<QS_User>,auth?:boolean):QS_User {
    auth?o.token = this.genAuthTkn():null;
    this.saveUser(o);
    delete o.pin;
    delete o.code;
    return o as QS_User;
  }
  fetchJSON = () => of(this.returnAuth(this.fetchUser()));
  saveAndRespondWJSON = (o:Partial<QS_User>,auth?:boolean,delayTime:number = 300) => {
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
  register(o:Partial<QS_User>){
    const user = this.fetchUser();
    return this.saveAndRespondWJSON({...user,...o});
  }
  registerExt(o:Partial<QS_User>){
    const user = this.fetchUser();
    return this.saveAndRespondWJSON({...user,...o});
  }
  forgot(o:{email:string}){return of(o);}
  updatePin(o:{username:string;pin:string}){
    const user = this.fetchUser();
    user.pin = o.pin;
    return this.saveAndRespondWJSON({...user,...o},true,1000);
  }
  update(o:Partial<QS_User>){
    const user = this.fetchUser();
    return this.saveAndRespondWJSON({...user,...o});
  }
}
export const users:QS_User[] = [
  {
    username:"tiabia",
    phn:"340-893-2724",
    name:{first:"Tia",last:"McBia"},
    id:"sdsds",
    img:"lncnsjcnj",
    email:"sjhhhhhcdscj",
    created:new Date("11/22/2020")},
  {
    username:"jackswift",
    phn:"904-247-8293",
    name:{first:"Jack",last:"Johnson"},
    id:"sdsds",
    img:"lncnsjcnj",
    email:"jahscjbcywc",
    created:new Date("11/22/2020")},
];
export const tasks:QS_Task[] = [
  {id:"1",created:new Date("06/06/2020"),agent:null,type:"onboarding",dueOn:new Date("05/24/2020"),progress:63.50},
  {id:"2",created:new Date("06/06/2020"),type:"new-lead",agent:users[0],dueOn:new Date("05/21/2020"),progress:63.50},
  {id:"3",created:new Date("06/06/2020"),type:"new-lead",agent:users[1],dueOn:new Date("05/19/2020"),progress:63.50},
  {id:"4",created:new Date("06/06/2020"),type:"doc-review",agent:null,dueOn:new Date("05/24/2020"),progress:0},
];
export const sessions:QS_Session[] = [
  {id:"1",created:new Date("06/06/2020"),agent:null,type:"onboarding",dueOn:new Date("05/24/2020"),progress:63.50},
  {id:"2",created:new Date("06/06/2020"),type:"new-lead",agent:users[0],dueOn:new Date("05/21/2020"),progress:63.50},
  {id:"3",created:new Date("06/06/2020"),type:"new-lead",agent:users[1],dueOn:new Date("05/19/2020"),progress:63.50},
  {id:"4",created:new Date("06/06/2020"),type:"doc-review",agent:null,dueOn:new Date("05/24/2020"),progress:0},
];
export const rooms:QS_Room[] = [
  {id:"1",created:new Date("06/06/2020"),agent:null,type:"onboarding",dueOn:new Date("05/24/2020"),progress:63.50},
  {id:"2",created:new Date("06/06/2020"),type:"new-lead",agent:users[0],dueOn:new Date("05/21/2020"),progress:63.50},
  {id:"3",created:new Date("06/06/2020"),type:"new-lead",agent:users[1],dueOn:new Date("05/19/2020"),progress:63.50},
  {id:"4",created:new Date("06/06/2020"),type:"doc-review",agent:null,dueOn:new Date("05/24/2020"),progress:0},
];