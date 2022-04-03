import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockApiDBHelpers as DB,
  MockApiHandlers as Handlers,
  MockApiLogger as Logger,
  MockBackendNotifier
} from '../utils';
import { db } from '../db';
import { ContactUsMsg } from '../models';

export class ContactUsController {
  static notifier:MockBackendNotifier;
  static create = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const o = new ContactUsMsg({...body,settings:{lang:"en",app:{}},mates:[]});
    DB.add("qs-contact-us",db.contactUs,o);
    return Handlers.ok(o.json());
  };
  static fetch = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.contactUs.map(p => new ContactUsMsg(p).json()));
  };
  static fetchRecent = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.contactUs.map(p => p.json()));
  };
  static fetchById = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.contactUs.find(x => x.id == Handlers.idFromUrl(url))?.json());
  };
  static update = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    if(!Handlers.isLoggedIn(headers)) return Handlers.e["unauthorized"]();
    const {o,i} = DB.findone(db.contactUs,"id",Handlers.idFromUrl(url));
    for(const k in body) (o as any)[k] = body[k];
    DB.save("qs-contact-us",db.contactUs,o,i);
    return Handlers.ok(new ContactUsMsg(o).json());
  };
  static remove = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    (() => {
      db.contactUs = db.contactUs.filter(x => x.id !== Handlers.idFromUrl(url));
      DB.save("qs-contact-us",db.contactUs);
      return Handlers.ok();
    })();
  };
}