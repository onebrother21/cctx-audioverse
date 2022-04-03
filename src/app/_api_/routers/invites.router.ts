import { HttpRequest } from '@angular/common/http';
import { InvitesController as Invites } from '../controllers';
import { MockApiHandlers as Handlers,MockBackendNotifier } from '../utils';

export const InvitesRouter = (req:HttpRequest<any>,notifier:MockBackendNotifier) => {
  Invites.notifier = notifier;
  const {url,method,headers,body} = req;
  try{
    switch(true){
      case url.endsWith('/invites') && method === 'POST':return Invites.create(req);
      case url.endsWith('/invites') && method === 'GET':return Invites.fetchRecent(req);
      case url.match(/\/invites\/\w+$/) && method === 'GET':return Invites.fetchById(req);
      case url.match(/\/invites\/\w+$/) && method === 'PUT':return Invites.update(req);
      case url.match(/\/invites\/\w+$/) && method === 'DELETE':return Invites.remove(req);
      default:return Handlers.e["fourohfour"]();
    }
  }
  catch(e_){return Handlers.e["someerror"](e_);}
};