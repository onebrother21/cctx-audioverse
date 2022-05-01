import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockBackendDB,
  MockBackendHandlers,
  MockBackendLogger,
  MockBackendNotifier
} from '../providers';
import { ChatMsg } from '../models';


@Injectable({providedIn:"root"})
export class ChatMessagesController  extends MockBackendDB<ChatMsg> {
  constructor(
    private handlers:MockBackendHandlers,
    private notifier:MockBackendNotifier,
    private logger:MockBackendLogger,
  ){super();this.name = "msgs";this.ctr = ChatMsg;}
  private getAllChatMsgs = () => this._load();
  private getChatMsg = (req:HttpRequest<any>,prop:keyof ChatMsg) => this._find(prop,this.handlers.idFromUrl(req.url));
  create = (req:HttpRequest<any>) => this.handlers.ok(this.add({...req?.body,settings:{lang:"en",app:{}}}));
  fetchAll = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllChatMsgs());
  fetchRecent = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllChatMsgs());
  fetch = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getChatMsg(req,"id").o);
  fetchBySlug = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getChatMsg(req,"title").o);
  update = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._update(req.body,"id",this.handlers.idFromUrl(req.url)));
  remove = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._remove("id",this.handlers.idFromUrl(req.url)));
  query = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = this.handlers.queryFromUrl(url);
    this.logger.log({field,val})
    const {o} = this._find(field as keyof ChatMsg,val);
    return this.handlers.ok(o?new ChatMsg(o).json():null);
  };
}