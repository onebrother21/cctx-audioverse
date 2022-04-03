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

export class UsersController {
  static notifier:MockBackendNotifier;
  static create = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const o = new User({...body,settings:{lang:"en",app:{}},mates:[]});
    DB.add("qs-users",db.users,o);
    return Handlers.ok(o.json(true));
  };
  static fetch = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.users.map(p => new User(p).json()));
  };
  static fetchRecent = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.users.map(p => p.json()));
  };
  static fetchById = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.users.find(x => x.id == Handlers.idFromUrl(url))?.json());
  };
  static fetchByUsername = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    (() => {
      const mine = /mine=1/.test(url);
      const o = db.users.find(o => o.username == Handlers.idFromUrl(url));
      return Handlers.ok(new User(o).json(mine));
    })();
  };
  static update = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    if(!Handlers.isLoggedIn(headers)) return Handlers.e["unauthorized"]();
    const {o,i} = DB.findone(db.users,"id",Handlers.idFromUrl(url));
    for(const k in body) (o as any)[k] = body[k];
    DB.save("qs-users",db.users,o,i);
    return Handlers.ok(new User(o).json(true));
  };
  static remove = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    (() => {
      db.users = db.users.filter(x => x.id !== Handlers.idFromUrl(url));
      DB.save("qs-users",db.users);
      return Handlers.ok();
    })();
  };
  static query = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = Handlers.queryFromUrl(url);
    Logger.log({field,val})
    const o = db.users.find(o => (o as any)[field] == val);
    return Handlers.ok(o?new User(o).json():null);
  };
}