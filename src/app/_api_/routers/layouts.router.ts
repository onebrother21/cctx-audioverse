import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { LayoutsController } from '../controllers';
import { MockBackendHandlers } from '../providers';

@Injectable({providedIn:"root"})
export class LayoutsRouter {
  constructor(private handlers:MockBackendHandlers,private layouts:LayoutsController){}
  route = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case url.endsWith('/layouts') && method === 'GET':return this.layouts.fetchAll(req);
        case url.endsWith('/layouts/latest') && method === 'GET':return this.layouts.fetchLatest(req);
        case url.match(/\/layouts\/\w+$/) && method === 'GET':return this.layouts.fetch(req);
        default:return this.handlers.e["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}