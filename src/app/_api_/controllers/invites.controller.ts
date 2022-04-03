import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockApiDBHelpers as DB,
  MockApiHandlers as Handlers,
  MockApiLogger as Logger,
  MockBackendNotifier
} from '../utils';
import { db } from '../db';
import { Invite } from '../models';

export class InvitesController {
  static notifier:MockBackendNotifier;
  static create = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const o = new Invite({...body,settings:{lang:"en",app:{}},mates:[]});
    DB.add("qs-invites",db.invites,o);
    return Handlers.ok(o.json());
  };
  static fetch = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.invites.map(p => new Invite(p).json()));
  };
  static fetchRecent = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.invites.map(p => p.json()));
  };
  static fetchById = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.invites.find(x => x.id == Handlers.idFromUrl(url))?.json());
  };
  static update = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    if(!Handlers.isLoggedIn(headers)) return Handlers.e["unauthorized"]();
    const {o,i} = DB.findone(db.invites,"id",Handlers.idFromUrl(url));
    for(const k in body) (o as any)[k] = body[k];
    DB.save("qs-invites",db.invites,o,i);
    return Handlers.ok(new Invite(o).json());
  };
  static remove = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    (() => {
      db.invites = db.invites.filter(x => x.id !== Handlers.idFromUrl(url));
      DB.save("qs-invites",db.invites);
      return Handlers.ok();
    })();
  };
}