import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { UsersController } from '../controllers';
import { MockBackendHandlers } from '../providers';

@Injectable({providedIn:"root"})
export class UsersRouter {
  constructor(private handlers:MockBackendHandlers,private users:UsersController){}
  route = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case url.endsWith('/users') && method === 'POST':return this.users.create(req);
        case url.endsWith('/users') && method === 'GET':return this.users.fetch(req);
        case url.endsWith('/users/recent') && method === 'GET':return this.users.fetchRecent(req);
        case url.match(/\/users\/\w+$/) && method === 'GET':return this.users.fetchByUsername(req);
        case url.match(/\/users\/\w+$/) && method === 'PUT':return this.users.update(req);
        //case url.match(/\/users\/\w+$/) && method === 'DELETE':return this.users.remove(req);
        default:return this.handlers.e["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}