import { HttpRequest,HttpHandler} from '@angular/common/http';
import { UserConfig,User, AppEntity } from '@state';
import { ok,isLoggedIn,idFromUrl,errors as e,save,findone,add } from '../utils';
import { db } from '../db';

export const usersController = (request:HttpRequest<any>,next:HttpHandler) => {
  const {url,method,headers,body} = request;
  const USERS = {
    create:() => {
      const newuser = new User({
        ...body as UserConfig,
        settings:{lang:"en",app:{}},
        mates:[]
       });
      add("qs-users",db.users,newuser);
      return ok(new User(newuser).json(true));},
    fetch:() => !isLoggedIn(headers)?e["unauthorized"]():ok(db.users.map(p => new User(p).json())),
    fetchRecent:() => !isLoggedIn(headers)?e["unauthorized"]():ok(db.users.map(p => new User(p).json())),
    fetchByUsername:() => !isLoggedIn(headers)?
      e["unauthorized"]():
      (() => {
        const mine = /mine=1/.test(url);
        const o = db.users.find(o => o.username == idFromUrl(url));
        return ok(new User(o).json(mine));
      })(),
    update:() => !isLoggedIn(headers)?
      e["unauthorized"]():
      (() => {
        let {o,i} = findone(db.users,"id",idFromUrl(url));
        for(const k in body) o[k as keyof User] = body[k];
        save("qs-users",db.users,o,i);
        return ok(new User(o).json(true));
      })(),
    remove:() => !isLoggedIn(headers)?
      e["unauthorized"]():
      (() => {
        db.users = db.users.filter(x => x.id !== idFromUrl(url));
        save("qs-users",db.users);
        return ok();
      })(),
  };
  switch(true){
    case url.endsWith('/users') && method === 'POST':return USERS.create();
    case url.endsWith('/users') && method === 'GET':return USERS.fetch();
    case url.endsWith('/users/recent') && method === 'GET':return USERS.fetchRecent();
    case url.match(/\/users\/\w+$/) && method === 'GET':return USERS.fetchByUsername();
    case url.match(/\/users\/\w+$/) && method === 'PUT':return USERS.update();
    case url.match(/\/users\/\w+$/) && method === 'DELETE':return USERS.remove();
    default:return e["fourohfour"]();
  }
};