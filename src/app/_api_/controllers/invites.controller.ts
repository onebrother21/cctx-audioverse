import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockBackendDB,
  MockBackendHandlers,
  MockBackendLogger,
  MockBackendNotifier
} from '../providers';
import { Invite } from '../models';


@Injectable({providedIn:"root"})
export class InvitesController  extends MockBackendDB<Invite> {
  constructor(
    private handlers:MockBackendHandlers,
    private notifier:MockBackendNotifier,
    private logger:MockBackendLogger,
  ){super();this.name = "invites";this.ctr = Invite;}
  private getAllInvites = () => this._load();
  private getInvite = (req:HttpRequest<any>,prop:keyof Invite) => this._find(prop,this.handlers.idFromUrl(req.url));
  create = (req:HttpRequest<any>) => this.handlers.ok(this.add({...req?.body,settings:{lang:"en",app:{}}}));
  fetchAll = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllInvites());
  fetchRecent = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllInvites());
  fetch = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getInvite(req,"id").o);
  fetchBySender = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getInvite(req,"sender").o);
  update = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._update(req.body,"id",this.handlers.idFromUrl(req.url)));
  remove = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._remove("id",this.handlers.idFromUrl(req.url)));
  query = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = this.handlers.queryFromUrl(url);
    this.logger.log({field,val})
    const {o} = this._find(field as keyof Invite,val);
    return this.handlers.ok(o?new Invite(o).json():null);
  };
}