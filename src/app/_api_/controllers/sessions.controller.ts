import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockBackendDB,
  MockBackendHandlers,
  MockBackendLogger,
  MockBackendNotifier
} from '../providers';
import { Session } from '../models';

@Injectable({providedIn:"root"})
export class SessionsController  extends MockBackendDB<Session> {
  constructor(
    private handlers:MockBackendHandlers,
    private notifier:MockBackendNotifier,
    private logger:MockBackendLogger,
  ){super();this.name = "sessions";this.ctr = Session;}
  private getAllSessions = () => this._load();
  private getSession = (req:HttpRequest<any>,prop:keyof Session) => this._find(prop,this.handlers.idFromUrl(req.url));
  create = (req:HttpRequest<any>) => this.handlers.ok(this.add({...req?.body,settings:{lang:"en",app:{}}}));
  fetchAll = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllSessions());
  fetchRecent = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllSessions());
  fetch = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getSession(req,"id").o);
  fetchBySlug = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getSession(req,"title").o);
  update = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._update(req.body,"id",this.handlers.idFromUrl(req.url)));
  remove = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._remove("id",this.handlers.idFromUrl(req.url)));
  query = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = this.handlers.queryFromUrl(url);
    this.logger.log({field,val})
    const {o} = this._find(field as keyof Session,val);
    return this.handlers.ok(o?new Session(o).json():null);
  };
}