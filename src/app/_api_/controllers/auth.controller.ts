import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockApiDBHelpers as DB,
  MockApiHandlers as Handlers,
  MockApiLogger as Logger,
  MockBackendNotifier
} from '../utils';
import { db } from '../db';
import { User } from '../models';

export class AuthController {
  static notifier:MockBackendNotifier;
  static lookup = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = Handlers.queryFromUrl(url);
    const o = db.users.find(o => (o as any)[field] == val);
    return Handlers.ok({results:{[field]:!!o}});
  };
  static signup = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o:eemail} = DB.findone(db.users,"email",body.email);
    if(eemail) return Handlers.e["existingUser"]();
    const verification = Utils.shortId().toLocaleUpperCase();
    const settings = {
      lang:"en",
      app:{
        canActivate:true,
        canShare:false,
        acceptInvites:false,
        maxSessions:2,
        willCollab:true,
      }
    };
    const o = new User({
      ...body,
      name:{first:"",last:""},
      role:"QS-GUEST",
      username:body.email,
      verification,
      settings,
      scopes:["view-room","send-invite"],
      status:{name:"new",time:new Date()}
    });
    o.generateAuthTkn();
    DB.add("qs-users",db.users,o);
    setTimeout(() => this.notifier.send("verification",o.verification as string),500);
    return Handlers.ok(o.json(true));
  };
  static signin = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o,i} = DB.findone(db.users,"username",body.username);
    if(!o) return Handlers.e["userNotFound"]();
    o.generateAuthTkn();
    DB.save('qs-users',db.users,o,i);
    return Handlers.ok(o.json(true));
  };
  static verify = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o,i} = DB.findone(db.users,body.phn?"phn":"email",body.phn||body.email);
    if(!o) return Handlers.e["userNotFound"]();
    if(![o.verification,"55555555"].includes(body.code)) return Handlers.e["invalidCode"]();
    o.phn = body.phn;
    o.verification = null;
    o.verified = new Date();
    o.updated = new Date();
    o.status = {name:"verified",time:new Date()};
    o.generateAuthTkn();
    DB.save('qs-users',db.users,o,i);
    return Handlers.ok(o.json(true));
  };
  static register = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o,i} = DB.findone(db.users,"email",body.email);
    if(!o) return Handlers.e["userNotFound"]();
    o.username = body.username;
    o.role = "QS-USER";
    o.name = body.name;
    o.yob = body.yob;
    o.hometown = body.hometown;
    o.updated = new Date();
    o.generateAuthTkn();
    DB.save('qs-users',db.users,o,i);
    return Handlers.ok(o.json(true));
  };
  static registerExt = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o,i} = DB.findone(db.users,"username",body.username);
    if(!o) return Handlers.e["userNotFound"]();
    o.tastes = body.tastes;
    o.mantles = body.mantles;
    o.uses = body.uses;
    o.updated = new Date();
    o.generateAuthTkn();
    DB.save('qs-users',db.users,o,i);
    return Handlers.ok(o.json(true));
  };
  static updatePin = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o,i} = DB.findone(db.users,"username",body.username);
    if(!o) return Handlers.e["userNotFound"]();
    o.pin = body.pin;
    o.updated = new Date();
    o.lastreset = new Date();
    o.status = {name:"enabled",time:new Date()};
    o.generateAuthTkn(true);
    DB.save('qs-users',db.users,o,i);
    return Handlers.ok(o.json(true,true));
  };
  static login = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    let {o,i} = DB.findone(db.users,["username","email"],body.username);
    if(!o) return Handlers.e["userNotFound"]();
    if(o.pin !== body.pin) return Handlers.e["invalidAuth"]();
    o.lastlogin = new Date();
    o.generateAuthTkn(true);
    DB.save("qs-users",db.users,o,i);
    return Handlers.ok(o.json(true,true));
  };
  static logout = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o,i} = DB.findone(db.users,"username",body.username);
    o.meta = {...(o.meta||{}),loggedout:new Date()};
    o.tokenData = null;
    DB.save("qs-users",db.users,o,i);
    return Handlers.ok();
  };
/*
  resetPin:() => {
    if (!isLoggedIn(headers)) return e["unauthorized"]();
    const updates = body as AuthCreds;
    let {o,i} = findone(db.auth,"id",idFromUrl(url));
    o.pin = updates.pin;
    o.reset = null;
    o.updated = new Date();
    save('qs-users',db.auth,o,i);
    return ok(new AuthAcct(o).json(true));
  },
  forgotName:() => {
    const acctDetails = body as AuthCreds;
    //let {o} = findone(db.auth,"username",username);
    //if(!o) return e["userNotFound"]();
    return ok();//new AuthAcct(o).json());
  },
  forgotPin:() => {
    const {email} = body as AuthCreds;
    let {o} = findone(db.auth,"email",email);
    if(!o) return e["userNotFound"]();
    return ok();//new AuthAcct(o).json());
  },
*/
}