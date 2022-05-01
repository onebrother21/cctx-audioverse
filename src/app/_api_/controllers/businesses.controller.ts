import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockBackendDB,
  MockBackendHandlers,
  MockBackendLogger,
  MockBackendNotifier
} from '../providers';
import { Business } from '../models';


@Injectable({providedIn:"root"})
export class BusinessesController extends MockBackendDB<Business> {
  constructor(
    private handlers:MockBackendHandlers,
    private notifier:MockBackendNotifier,
    private logger:MockBackendLogger,
  ){super();this.ctr = Business;}
  private getAllBusinesses = () => this._load();
  private getBusiness = (req:HttpRequest<any>,prop:keyof Business) => this._find(prop,this.handlers.idFromUrl(req.url));
  create = (req:HttpRequest<any>) => this.handlers.ok(this.add({...req?.body,settings:{lang:"en",app:{}}}));
  fetchAll = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllBusinesses());
  fetchRecent = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllBusinesses());
  fetch = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getBusiness(req,"id").o);
  fetchByName = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getBusiness(req,"name").o);
  update = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._update(req.body,"id",this.handlers.idFromUrl(req.url)));
  remove = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._remove("id",this.handlers.idFromUrl(req.url)));
  query = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = this.handlers.queryFromUrl(url);
    this.logger.log({field,val})
    const {o} = this._find(field as keyof Business,val);
    return this.handlers.ok(o?new Business(o).json():null);
  };
}