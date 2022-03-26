import { HttpRequest } from '@angular/common/http';
import { User } from '@state';
import { ok,isLoggedIn,idFromUrl,errors as e,save,findone,add } from '../utils';
import { db } from '../db';

export const usersController = (req:HttpRequest<any>) => {
  const {url,method,headers,body} = req;
  const USERS = {
    create:() => {
      const o = new User({...body,settings:{lang:"en",app:{}},mates:[]});
      add("qs-users",db.users,o);
      return ok(o.json(true));
    },
    fetch:() => !isLoggedIn(headers)?e["unauthorized"]():ok(db.users.map(p => new User(p).json())),
    fetchRecent:() => !isLoggedIn(headers)?e["unauthorized"]():ok(db.users.map(p => new User(p).json())),
    fetchByUsername:() => !isLoggedIn(headers)?
      e["unauthorized"]():
      (() => {
        const mine = /mine=1/.test(url);
        const o = db.users.find(o => o.username == idFromUrl(url));
        return ok(new User(o).json(mine));
      })(),
    update:() => {
      if(!isLoggedIn(headers)) return e["unauthorized"]();
      const {o,i} = findone(db.users,"id",idFromUrl(url));
      for(const k in body) (o as any)[k] = body[k];
      save("qs-users",db.users,o,i);
      return ok(new User(o).json(true));
    },
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