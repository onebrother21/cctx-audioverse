import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockBackendDB,
  MockBackendHandlers,
  MockBackendLogger,
  MockBackendNotifier
} from '../providers';
import { Layout } from '../models';


@Injectable({providedIn:"root"})
export class LayoutsController  extends MockBackendDB<Layout> {
  constructor(
    private handlers:MockBackendHandlers,
    private notifier:MockBackendNotifier,
    private logger:MockBackendLogger,
  ){super();this.name = "layouts";this.ctr = Layout;}
  private getAllLayouts = () => this._load();
  private getLayout = (prop:keyof Layout,url:string) => this._find(prop,this.handlers.idFromUrl(url));
  create = (req:HttpRequest<any>) => this.handlers.ok(this.add({...req?.body,settings:{lang:"en",app:{}}}));
  fetchAll = (req:HttpRequest<any>) => this.handlers.ok(this.getAllLayouts());
  fetchLatest = (req:HttpRequest<any>) => {
    const layouts = this.getAllLayouts();
    const layout = Utils.isArr(layouts)?layouts[layouts.length - 1]:layouts;
    //console.info({layout})
    return this.handlers.ok(layout);
  };
  fetch = (req:HttpRequest<any>) => this.handlers.ok(this.getLayout("id",req.url).o);
  update = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._update(req.body,"id",this.handlers.idFromUrl(req.url)));
  remove = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._remove("id",this.handlers.idFromUrl(req.url)));
  query = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = this.handlers.queryFromUrl(url);
    this.logger.log({field,val})
    const {o} = this._find(field as keyof Layout,val);
    return this.handlers.ok(o||null);
  };
}