import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { InvitesController } from '../controllers';
import { MockBackendHandlers } from '../providers';

@Injectable({providedIn:"root"})
export class InvitesRouter {
  constructor(private handlers:MockBackendHandlers,private invites:InvitesController){}
  route = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case url.endsWith('/invites') && method === 'POST':return this.invites.create(req);
        case url.endsWith('/invites') && method === 'GET':return this.invites.fetchRecent(req);
        case url.match(/\/invites\/\w+$/) && method === 'GET':return this.invites.fetch(req);
        case url.match(/\/invites\/\w+$/) && method === 'PUT':return this.invites.update(req);
        case url.match(/\/invites\/\w+$/) && method === 'DELETE':return this.invites.remove(req);
        default:return this.handlers.e["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}