import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { SessionsController } from '../controllers';
import { MockBackendHandlers } from '../providers';

@Injectable({providedIn:"root"})
export class SessionsRouter {
  constructor(private handlers:MockBackendHandlers,private sessions:SessionsController){}
  route = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case url.endsWith('/sessions') && method === 'POST':return this.sessions.create(req);
        case url.endsWith('/sessions') && method === 'GET':return this.sessions.fetchRecent(req);
        case url.match(/\/sessions\/\w+$/) && method === 'GET':return this.sessions.fetch(req);
        case url.match(/\/sessions\/\w+$/) && method === 'PUT':return this.sessions.update(req);
        case url.match(/\/sessions\/\w+$/) && method === 'DELETE':return this.sessions.remove(req);
        default:return this.handlers.e["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}