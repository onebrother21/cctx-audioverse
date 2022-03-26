import { HttpRequest } from '@angular/common/http';
import { AppUtils,User } from '@state';
import { ok,errors as e,save,findone,add,isLoggedIn,idFromUrl, } from '../utils';
import { db } from '../db';
import { MockBackendNotifier } from '../api-notifier';

export const authController = (request:HttpRequest<any>,notifier:MockBackendNotifier) => {
  const {url,method,headers,body} = request;
  const AUTH = {
    signup:() => {
      const {o:eemail} = findone(db.users,"email",body.email);
      if(eemail) return e["existingUser"]();
      const verification = AppUtils.shortId().toLocaleUpperCase();
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
      add("qs-users",db.users,o);
      notifier.send("verification",o.verification as string);
      AppUtils.log(o.json(true))
      return ok(o.json(true));
    },
    verify:() => {
      const {o,i} = findone(db.users,body.phn?"phn":"email",body.phn||body.email);
      if(!o) return e["userNotFound"]();
      if(o.verification !== body.code) return e["invalidCode"]();
      o.phn = body.phn;
      o.verification = null;
      o.verified = new Date();
      save('qs-users',db.users,o,i);
      return ok(o.json(true));
    },
    register:() => {
      console.log(body)
      const {o,i} = findone(db.users,"username",[body.email,body.username]);
      if(!o) return e["userNotFound"]();
      o.username = body.username;
      o.name = body.name;
      o.dob = body.dob;
      o.hometown = body.hometown;
      o.updated = new Date();
      console.log(o)
      save('qs-users',db.users,o,i);
      return ok(o.json(true));
    },
    registerExt:() => {
      console.log(body)
      const {o,i} = findone(db.users,"username",body.username);
      if(!o) return e["userNotFound"]();
      o.tastes = body.tastes;
      o.mantles = body.mantles;
      o.uses = body.uses;
      o.updated = new Date();
      save('qs-users',db.users,o,i);
      return ok(o.json(true));
    },
    updatePin:() => {
      const {o,i} = findone(db.users,"username",body.username);
      if(!o) return e["userNotFound"]();
      o.pin = body.pin;
      o.updated = new Date();
      save('qs-users',db.users,o,i);
      return ok(o.json(true,true));
    },
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
    /*
    signin:() => {
      const {username} = body as AuthCreds;
      let {o} = findone(db.auth,"username",username);
      if(!o) return e["userNotFound"]();
      return ok(new AuthAcct(o).json());
    },
    login:() => {
      const {email,username,pin}  = body as AuthCreds;
      let {o,i} = findone(db.auth,["username","email"],email||username);
      if(!o) return e["userNotFound"]();
      if(o.pin !== pin) return e["invalidAuth"]();
      o.loggedin = new Date();
      save("qs-users",db.auth,o,i);
      return ok(new AuthAcct(o).json(true));
    },
    signout:() => {
      const {username} = body as {username:string};
      let {o,i} = findone(db.auth,"username",username);
      //o.loggedin = new Date();
      o.info = {...o.info,loggedout:new Date()};
      save("qs-users",db.auth,o,i);
      return ok();
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
  };
  switch(true){
    case url.match('/signup') && method === 'POST':return AUTH.signup();
    case url.match('/verify') && method === 'POST':return AUTH.verify();
    case url.match('/register') && method === 'POST':return AUTH.register();
    case url.match('/register') && method === 'PUT':return AUTH.registerExt();
    case url.match('/login') && method === 'PUT':return AUTH.updatePin();
    /*
    case url.match('/signin') && method === 'POST':return AUTH.signin();
    case url.match('/login') && method === 'POST':return AUTH.login();
    case url.match('/login') && method === 'DELETE':return AUTH.signout();
    case url.match('/forgot/name') && method === 'POST':return AUTH.forgotName();
    case url.match('/forgot/pin') && method === 'POST':return AUTH.forgotPin();
    */
    default:return e["fourohfour"]();
  }
};