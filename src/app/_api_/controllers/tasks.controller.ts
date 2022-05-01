import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockBackendDB,
  MockBackendHandlers,
  MockBackendLogger,
  MockBackendNotifier
} from '../providers';
import { Task } from '../models';

@Injectable({providedIn:"root"})
export class TasksController  extends MockBackendDB<Task> {
  constructor(
    private handlers:MockBackendHandlers,
    private notifier:MockBackendNotifier,
    private logger:MockBackendLogger,
  ){super();this.ctr = Task;}
  private getAllTasks = () => this._load();
  private getTask = (req:HttpRequest<any>,prop:keyof Task) => this._find(prop,this.handlers.idFromUrl(req.url));
  create = (req:HttpRequest<any>) => this.handlers.ok(this.add({...req?.body,settings:{lang:"en",app:{}}}));
  fetchAll = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllTasks());
  fetchRecent = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllTasks());
  fetch = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getTask(req,"id").o);
  fetchBySlug = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getTask(req,"title").o);
  update = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._update(req.body,"id",this.handlers.idFromUrl(req.url)));
  remove = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._remove("id",this.handlers.idFromUrl(req.url)));
  query = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = this.handlers.queryFromUrl(url);
    this.logger.log({field,val})
    const {o} = this._find(field as keyof Task,val);
    return this.handlers.ok(o?new Task(o).json():null);
  };
}