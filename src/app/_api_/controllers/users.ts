import { HttpRequest,HttpHandler} from '@angular/common/http';
import { AuthCreds,AuthAcct,AuthConfig,longId,AppError } from '@state';
import { ok,isLoggedIn,idFromUrl,errors as e,save,findone,add } from '../utils';
import { db } from '../db';

export type AuthModel = {o:AuthAcct;i:number};
export const usersController = (request:HttpRequest<any>,next:HttpHandler) => {
  const {url,method,headers,body} = request;
  const ACCTS = {
    register:() => {
      const newuser = body as AuthConfig;
      const eemail = db.users.find(x => x.email === newuser.email);
      const ehandle = db.users.find(x => x.handle === newuser.handle);
      if(eemail||ehandle) return e["existingUser"]();
      const o = {
        ...newuser,
        verification:longId(),
        scopes:["players","invites"],
        info:{}} as AuthAcct;
      add("hcl-users",db.users,o);
      return ok(new AuthAcct(o).json());},
    verify:() => {
      const {handle,code} = body as AuthCreds;
      let {o,i} = findone(db.users,"handle",handle);
      if(!o) return e["userNotFound"]();
      if(o.verification !== code) return e["invalidCode"]();
      o.verification = null;
      o.verified = new Date();
      save('hcl-users',db.users,o,i);
      return ok(new AuthAcct(o).json());},
    authenticate:() => {
      const {email,handle,pin}  = body as AuthCreds;
      let {o,i} = findone(db.users,["handle","email"],email||handle);
      if(!o) return e["userNotFound();
      if(o.pin !== pin) return e["invalidAuth"]();
      o.loggedin = new Date();
      save("hcl-users",db.users,o,i);
      return ok(new AuthAcct(o).json(true));},
    reset:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      const updates = body as AuthCreds;
      let {o,i} = findone(db.users,"id",idFromUrl(url));
      o.pin = updates.pin;
      o.reset = null;
      o.updated = new Date();
      save('hcl-users',db.users,o,i);
      return ok(new AuthAcct(o).json(true));},
    logout:() => {
      const {username} = body as {username:string};
      let {o,i} = findone(db.users,"username",username);
      o.loggedin = new Date();
      o.info = {...o.info,loggedout:new Date()};
      save("hcl-users",db.users,o,i);
      return ok();},
    };
  switch(true){
    case url.match('/register') && method === 'POST':return ACCTS.register();
    case url.match('/verify') && method === 'POST':return ACCTS.verify();
    case url.match('/login') && method === 'POST':return ACCTS.authenticate();
    case url.match('/login') && method === 'PUT':return ACCTS.reset();
    case url.match('/login') && method === 'DELETE':return ACCTS.logout();
    default:return e["fourohfour"]();
  }
};