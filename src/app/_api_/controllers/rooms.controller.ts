import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonUtils as Utils } from '../common';
import {
  MockBackendDB,
  MockBackendHandlers,
  MockBackendLogger,
  MockBackendNotifier
} from '../providers';
import { Room } from '../models';

@Injectable({providedIn:"root"})
export class RoomsController extends MockBackendDB<Room> {
  constructor(
    private handlers:MockBackendHandlers,
    private notifier:MockBackendNotifier,
    private logger:MockBackendLogger,
  ){
    super();
    this.name = "rooms";
    this.ctr = Room;}
  private getAllRooms = () => this._load();
  private getRoom = (req:HttpRequest<any>,prop:keyof Room) => this._find(prop,this.handlers.idFromUrl(req.url));
  create = (req:HttpRequest<any>) => this.handlers.ok(this.add({...req?.body,settings:{lang:"en",app:{}}}));
  fetchAll = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllRooms());
  fetchRecent = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getAllRooms());
  fetch = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getRoom(req,"id").o);
  fetchBySlug = (req:HttpRequest<any>) => this.handlers.authGuard(req,this.getRoom(req,"title").o);
  update = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._update(req.body,"id",this.handlers.idFromUrl(req.url)));
  remove = (req:HttpRequest<any>) => this.handlers.authGuard(req,this._remove("id",this.handlers.idFromUrl(req.url)));
  query = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    const {field,val} = this.handlers.queryFromUrl(url);
    this.logger.log({field,val})
    const {o} = this._find(field as keyof Room,val);
    return this.handlers.ok(o?new Room(o).json():null);
  };
}