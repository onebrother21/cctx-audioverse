import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockBackendDB,
  MockBackendHandlers,
  MockBackendLogger,
  MockBackendNotifier
} from '../providers';
import { ContactUsMsg } from '../models';


@Injectable({providedIn:"root"})
export class ContactUsController  extends MockBackendDB<ContactUsMsg> {
  constructor(
    private handlers:MockBackendHandlers,
    private notifier:MockBackendNotifier,
    private logger:MockBackendLogger,
  ){super();this.name = "contactUs";this.ctr = ContactUsMsg;}
  private getAllContactUsMsgs = () => this._load();
  private getContactUsMsg = (req:HttpRequest<any>,prop:keyof ContactUsMsg) => this._find(prop,this.handlers.idFromUrl(req.url));
  create = (req:HttpRequest<any>) => this.handlers.ok(this.add({...req?.body,settings:{lang:"en",app:{}}}));
  fetchAll = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllContactUsMsgs());
  fetchRecent = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllContactUsMsgs());
  fetch = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getContactUsMsg(req,"id").o);
  fetchBySubject = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getContactUsMsg(req,"subject").o);
  update = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._update(req.body,"id",this.handlers.idFromUrl(req.url)));
  remove = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._remove("id",this.handlers.idFromUrl(req.url)));
  query = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = this.handlers.queryFromUrl(url);
    this.logger.log({field,val})
    const {o} = this._find(field as keyof ContactUsMsg,val);
    return this.handlers.ok(o?new ContactUsMsg(o).json():null);
  };
}