import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockApiDBHelpers as DB,
  MockApiHandlers as Handlers,
  MockApiLogger as Logger,
  MockBackendNotifier
} from '../utils';
import { db } from '../db';
import { ChatMsg } from '../models';

export class ChatMessagesController {
  static notifier:MockBackendNotifier;
  static create = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const o = new ChatMsg({...body,settings:{lang:"en",app:{}},mates:[]});
    DB.add("qs-msgs",db.msgs,o);
    return Handlers.ok(o.json());
  };
  static fetch = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.msgs.map(p => new ChatMsg(p).json()));
  };
  static fetchRecent = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.msgs.map(p => p.json()));
  };
  static fetchById = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.msgs.find(x => x.id == Handlers.idFromUrl(url))?.json());
  };
  static update = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    if(!Handlers.isLoggedIn(headers)) return Handlers.e["unauthorized"]();
    const {o,i} = DB.findone(db.msgs,"id",Handlers.idFromUrl(url));
    for(const k in body) (o as any)[k] = body[k];
    DB.save("qs-msgs",db.msgs,o,i);
    return Handlers.ok(new ChatMsg(o).json());
  };
  static remove = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    (() => {
      db.msgs = db.msgs.filter(x => x.id !== Handlers.idFromUrl(url));
      DB.save("qs-msgs",db.msgs);
      return Handlers.ok();
    })();
  };
}