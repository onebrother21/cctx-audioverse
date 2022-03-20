import { HttpRequest,HttpHandler} from '@angular/common/http';
import { AuthCreds,AuthAcct,AuthConfig,longId, User, UserConfig } from '@state';
import { ok,isLoggedIn,idFromUrl,errors as e,save,findone,add } from '../utils';
import { db } from '../db';

export const authController = (request:HttpRequest<any>,next:HttpHandler) => {
  const {url,method,headers,body} = request;
  const AUTH = {
    signup:() => {
      const newuser = body as AuthConfig;
      const eemail = db.auth.find(x => x.email === newuser.email);
      if(eemail) return e["existingUser"]();
      const o = new AuthAcct({
        ...newuser,
        verification:longId(),
        scopes:["view-room","send-invite"],
        info:{}
      });
      add("qs-auth",db.auth,o);
      return ok(new AuthAcct(o).json());
    },
    signin:() => {
      const {username} = body as AuthCreds;
      let {o} = findone(db.auth,"username",username);
      if(!o) return e["userNotFound"]();
      return ok(new AuthAcct(o).json());
    },
    signout:() => {
      const {username} = body as {username:string};
      let {o,i} = findone(db.auth,"username",username);
      //o.loggedin = new Date();
      o.info = {...o.info,loggedout:new Date()};
      save("qs-auth",db.auth,o,i);
      return ok();
    },
    verify:() => {
      const {username,code} = body as AuthCreds;
      let {o,i} = findone(db.auth,"username",username);
      if(!o) return e["userNotFound"]();
      if(o.verification !== code) return e["invalidCode"]();
      o.verification = null;
      o.verified = new Date();
      save('qs-auth',db.auth,o,i);
      return ok(new AuthAcct(o).json());
    },
    register:() => {
      const {username} = body as Partial<User>;
      let {o,i} = findone(db.auth,"username",username);
      if(!o) return e["userNotFound"]();
      const u = db.users.find(x => x.username === username);
      if(u) return e["existingUser"]();
      add("qs-users",db.users,new User({
        ...body as UserConfig,
        settings:{lang:"en",app:{}},
        mates:[]
      }));
      return ok(new AuthAcct(o).json());
    },
    registerExt:() => {
      const {username} = body as Partial<User>;
      let {o,i} = findone(db.auth,"username",username);
      if(!o) return e["userNotFound"]();
      const u = db.users.find(x => x.username === username);
      save("qs-users",db.users,{...u,...body},i);
      return ok(new AuthAcct(o).json());
    },
    updatePin:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      const updates = body as AuthCreds;
      let {o,i} = findone(db.auth,"id",idFromUrl(url));
      o.pin = updates.pin;
      o.reset = null;
      o.updated = new Date();
      save('qs-auth',db.auth,o,i);
      return ok(new AuthAcct(o).json(true));
    },
    login:() => {
      const {email,username,pin}  = body as AuthCreds;
      let {o,i} = findone(db.auth,["username","email"],email||username);
      if(!o) return e["userNotFound"]();
      if(o.pin !== pin) return e["invalidAuth"]();
      o.loggedin = new Date();
      save("qs-auth",db.auth,o,i);
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
  };
  switch(true){
    case url.match('/signup') && method === 'POST':return AUTH.signup();
    case url.match('/signin') && method === 'POST':return AUTH.signin();
    case url.match('/verify') && method === 'POST':return AUTH.verify();
    case url.match('/register') && method === 'POST':return AUTH.register();
    case url.match('/register') && method === 'PUT':return AUTH.registerExt();
    case url.match('/login') && method === 'POST':return AUTH.login();
    case url.match('/login') && method === 'PUT':return AUTH.updatePin();
    case url.match('/login') && method === 'DELETE':return AUTH.signout();
    case url.match('/forgot/name') && method === 'POST':return AUTH.forgotName();
    case url.match('/forgot/pin') && method === 'POST':return AUTH.forgotPin();
    default:return e["fourohfour"]();
  }
};