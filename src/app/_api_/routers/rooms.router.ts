import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { RoomsController } from '../controllers';
import { MockBackendHandlers } from '../providers';

@Injectable({providedIn:"root"})
export class RoomsRouter {
  constructor(private handlers:MockBackendHandlers,private rooms:RoomsController){}
  route = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case url.endsWith('/rooms') && method === 'POST':return this.rooms.create(req);
        case url.endsWith('/rooms') && method === 'GET':return this.rooms.fetchRecent(req);
        case url.match(/\/rooms\/\w+$/) && method === 'GET':return this.rooms.fetch(req);
        case url.match(/\/rooms\/\w+$/) && method === 'PUT':return this.rooms.update(req);
        case url.match(/\/rooms\/\w+$/) && method === 'DELETE':return this.rooms.remove(req);
        default:return this.handlers.e["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}