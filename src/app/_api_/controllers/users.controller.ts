import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockBackendDB,
  MockBackendHandlers,
  MockBackendLogger,
  MockBackendNotifier
} from '../providers';
import { User } from '../models';

@Injectable({providedIn:"root"})
export class UsersController  extends MockBackendDB<User> {
  constructor(
    private handlers:MockBackendHandlers,
    private notifier:MockBackendNotifier,
    private logger:MockBackendLogger,
  ){super();this.name = "users";this.ctr = User;}
  private getAllUsers = () => this._load();
  private getUser = (req:HttpRequest<any>,prop:keyof User) => this._find(prop,this.handlers.idFromUrl(req.url));
  create = (req:HttpRequest<any>) => this.handlers.ok(this.add({...req?.body,settings:{lang:"en",app:{}}}));
  fetchAll = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllUsers());
  fetchRecent = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllUsers());
  fetch = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getUser(req,"id").o);
  fetchByUsername = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getUser(req,"username").o);
  update = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._update(req.body,"id",this.handlers.idFromUrl(req.url)));
  remove = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._remove("id",this.handlers.idFromUrl(req.url)));
  query = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = this.handlers.queryFromUrl(url);
    this.logger.log({field,val})
    const {o} = this._find(field as keyof User,val);
    return this.handlers.ok(o?new User(o).json():null);
  };
}