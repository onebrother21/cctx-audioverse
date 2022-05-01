import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { BusinessesController } from '../controllers';
import { MockBackendHandlers } from '../providers';

@Injectable({providedIn:"root"})
export class BusinessesRouter {
  constructor(private handlers:MockBackendHandlers,private businesses:BusinessesController){}
  route = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case url.endsWith('/businesses') && method === 'POST':return this.businesses.create(req);
        case url.endsWith('/businesses') && method === 'GET':return this.businesses.fetch(req);
        case url.endsWith('/businesses/recent') && method === 'GET':return this.businesses.fetchRecent(req);
        case url.match(/\/businesses\/\w+$/) && method === 'GET':return this.businesses.fetchByName(req);
        case url.match(/\/businesses\/\w+$/) && method === 'PUT':return this.businesses.update(req);
        case url.match(/\/businesses\/\w+$/) && method === 'DELETE':return this.businesses.remove(req);
        default:return this.handlers.e["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}