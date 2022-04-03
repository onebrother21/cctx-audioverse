import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockApiDBHelpers as DB,
  MockApiHandlers as Handlers,
  MockApiLogger as Logger,
  MockBackendNotifier
} from '../utils';
import { db } from '../db';
import { Upload } from '../models';

export class UploadsController {
  static notifier:MockBackendNotifier;
  static create = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const o = new Upload({...body,settings:{lang:"en",app:{}},mates:[]});
    DB.add("qs-uploads",db.uploads,o);
    return Handlers.ok(o.json());
  };
  static fetch = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.uploads.map(p => new Upload(p).json()));
  };
  static fetchRecent = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.uploads.map(p => p.json()));
  };
  static fetchById = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    Handlers.ok(db.uploads.find(x => x.id == Handlers.idFromUrl(url))?.json());
  };
  static update = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    if(!Handlers.isLoggedIn(headers)) return Handlers.e["unauthorized"]();
    const {o,i} = DB.findone(db.uploads,"id",Handlers.idFromUrl(url));
    for(const k in body) (o as any)[k] = body[k];
    DB.save("qs-uploads",db.uploads,o,i);
    return Handlers.ok(new Upload(o).json());
  };
  static remove = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    return !Handlers.isLoggedIn(headers)?
    Handlers.e["unauthorized"]():
    (() => {
      db.uploads = db.uploads.filter(x => x.id !== Handlers.idFromUrl(url));
      DB.save("qs-uploads",db.uploads);
      return Handlers.ok();
    })();
  };
}