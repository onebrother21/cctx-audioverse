import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockBackendDB,
  MockBackendHandlers,
  MockBackendLogger,
  MockBackendNotifier
} from '../providers';
import { User } from '../models';

@Injectable({providedIn:"root"})
export class AuthController extends MockBackendDB<User> {
  constructor(private handlers:MockBackendHandlers,private notifier:MockBackendNotifier){
    super();
    this.name = "users";
    this.ctr = User;
  }
  lookup = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = this.handlers.queryFromUrl(url);
    const o = this._find(field as keyof User,val);
    return this.handlers.ok({results:{[field]:!!o}});
  };
  signup = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o:eemail} = this._find("email",body.email);
    if(eemail) return this.handlers.e["existingUser"]();
    const verification = Utils.shortId().toLocaleUpperCase();
    const settings = {
      lang:"en",
      app:{
        canActivate:true,
        canShare:false,
        acceptInvites:true,
        sendInvites:false,
        createSnippets:true,
        maxSessions:2,
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
      status:{name:"new",time:new Date()},
      meta:{},
    });
    o.generateAuthTkn();
    this.add(o);
    setTimeout(() => this.notifier.send("verification",o.verification as string),500);
    return this.handlers.ok(o.json(true));
  };
  signin = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o,i} = this._find("username",body.username);
    if(!o) return this.handlers.e["userNotFound"]();
    o.generateAuthTkn();
    this._save(o,i);
    return this.handlers.ok(o.json(true));
  };
  verify = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o,i} = this._find(body.phn?"phn":"email",body.phn||body.email);
    if(!o) return this.handlers.e["userNotFound"]();
    if(![o.verification,"55555555"].includes(body.code)) return this.handlers.e["invalidCode"]();
    o.phn = body.phn;
    o.verification = null;
    o.meta = {...o.meta,verified:new Date()};
    o.status = {name:"verified",time:new Date()};
    o.updated = new Date();
    o.generateAuthTkn();
    this._save(o,i);
    return this.handlers.ok(o.json(true));
  };
  register = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o,i} = this._find("email",body.email);
    if(!o) return this.handlers.e["userNotFound"]();
    o.username = body.username;
    o.role = "QS-USER";
    o.acct = "SLV1";
    o.name = body.name;
    o.yob = body.yob;
    o.hometown = body.hometown;
    o.meta = {...o.meta,registered:new Date()};
    o.updated = new Date();
    o.generateAuthTkn();
    this._save(o,i);
    return this.handlers.ok(o.json(true));
  };
  registerExt = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o,i} = this._find("username",body.username);
    if(!o) return this.handlers.e["userNotFound"]();
    o.tastes = body.tastes;
    o.mantles = body.mantles;
    o.uses = body.uses;
    o.updated = new Date();
    o.generateAuthTkn();
    this._save(o,i);
    return this.handlers.ok(o.json(true));
  };
  updatePin = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o,i} = this._find("username",body.username);
    if(!o) return this.handlers.e["userNotFound"]();
    const isNew = !o.pin;
    o.pin = body.pin;    
    o.meta = {...o.meta,[isNew?"activated":"reset"]:new Date()};
    o.status = {name:"enabled",time:new Date()};
    o.updated = new Date();
    o.generateAuthTkn(true);
    this._save(o,i);
    return this.handlers.ok(o.json(true,true));
  };
  login = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    let {o,i} = this._find(["username","email"],body.username);
    if(!o) return this.handlers.e["userNotFound"]();
    if(o.pin !== body.pin) return this.handlers.e["invalidAuth"]();
    o.meta = {...o.meta,loggedin:new Date()};
    o.generateAuthTkn(true);
    this._save(o,i);
    return this.handlers.ok(o.json(true,true));
  };
  logout = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {o,i} = this._find("username",body.username);
    o.meta = {...o.meta,loggedout:new Date()};
    o.clearAuthTkn();
    this._save(o,i);
    return this.handlers.ok();
  };
}
/*
  resetPin:() => {
    if (!isLoggedIn(headers)) return e["unauthorized"]();
    const updates = body as AuthCreds;
    let {o,i} = _find(auth,"id",idFromUrl(url));
    o.pin = updates.pin;
    o.reset = null;
    o.updated = new Date();
    _save('qs-users',auth,o,i);
    return ok(new AuthAcct(o).json(true));
  },
  forgotName:() => {
    const acctDetails = body as AuthCreds;
    //let {o} = _find(auth,"username",username);
    //if(!o) return e["userNotFound"]();
    return ok();//new AuthAcct(o).json());
  },
  forgotPin:() => {
    const {email} = body as AuthCreds;
    let {o} = _find(auth,"email",email);
    if(!o) return e["userNotFound"]();
    return ok();//new AuthAcct(o).json());
  },
*/