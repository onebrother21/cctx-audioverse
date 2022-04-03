import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockApiDBHelpers as DB,
  MockApiHandlers as Handlers,
  MockApiLogger as Logger,
  MockBackendNotifier
} from '../utils';
import { db } from '../db';
import { Business } from '../models';

export class BusinessesController {
  static notifier:MockBackendNotifier;
  static create = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const o = new Business({...body,settings:{lang:"en",app:{}},mates:[]});
    DB.add("qs-businesses",db.businesses,o);
    return Handlers.ok(o.json(true));
  };
  static fetch = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.businesses.map(p => new Business(p).json()));
  };
  static fetchRecent = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.businesses.map(p => p.json()));
  };
  static fetchById = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.businesses.find(x => x.id == Handlers.idFromUrl(url))?.json());
  };
  static fetchByBusinessName = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    (() => {
      const mine = /mine=1/.test(url);
      const o = db.businesses.find(o => o.name == Handlers.idFromUrl(url));
      return Handlers.ok(new Business(o).json(mine));
    })();
  };
  static update = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    if(!Handlers.isLoggedIn(headers)) return Handlers.e["unauthorized"]();
    const {o,i} = DB.findone(db.businesses,"id",Handlers.idFromUrl(url));
    for(const k in body) (o as any)[k] = body[k];
    DB.save("qs-businesses",db.businesses,o,i);
    return Handlers.ok(new Business(o).json(true));
  };
  static remove = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    (() => {
      db.businesses = db.businesses.filter(x => x.id !== Handlers.idFromUrl(url));
      DB.save("qs-businesses",db.businesses);
      return Handlers.ok();
    })();
  };
}