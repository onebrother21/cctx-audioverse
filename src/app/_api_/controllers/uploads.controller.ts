import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockBackendDB,
  MockBackendHandlers,
  MockBackendLogger,
  MockBackendNotifier
} from '../providers';
import { Upload } from '../models';

@Injectable({providedIn:"root"})
export class UploadsController  extends MockBackendDB<Upload> {
  constructor(
    private handlers:MockBackendHandlers,
    private notifier:MockBackendNotifier,
    private logger:MockBackendLogger,
  ){super();this.ctr = Upload;}
  private getAllUploads = () => this._load();
  private getUpload = (req:HttpRequest<any>,prop:keyof Upload) => this._find(prop,this.handlers.idFromUrl(req.url));
  create = (req:HttpRequest<any>) => this.handlers.ok(this.add({...req?.body,settings:{lang:"en",app:{}}}));
  fetchAll = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllUploads());
  fetchRecent = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllUploads());
  fetch = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getUpload(req,"id").o);
  fetchBySlug = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getUpload(req,"title").o);
  update = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._update(req.body,"id",this.handlers.idFromUrl(req.url)));
  remove = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._remove("id",this.handlers.idFromUrl(req.url)));
  query = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = this.handlers.queryFromUrl(url);
    this.logger.log({field,val})
    const {o} = this._find(field as keyof Upload,val);
    return this.handlers.ok(o?new Upload(o).json():null);
  };
}