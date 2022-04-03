import { HttpRequest } from '@angular/common/http';
import { SessionsController as Sessions } from '../controllers';
import { MockApiHandlers as Handlers,MockBackendNotifier } from '../utils';

export const SessionsRouter = (req:HttpRequest<any>,notifier:MockBackendNotifier) => {
  Sessions.notifier = notifier;
  const {url,method,headers,body} = req;
  try{
    switch(true){
      case url.endsWith('/sessions') && method === 'POST':return Sessions.create(req);
      case url.endsWith('/sessions') && method === 'GET':return Sessions.fetchRecent(req);
      case url.match(/\/sessions\/\w+$/) && method === 'GET':return Sessions.fetchById(req);
      case url.match(/\/sessions\/\w+$/) && method === 'PUT':return Sessions.update(req);
      case url.match(/\/sessions\/\w+$/) && method === 'DELETE':return Sessions.remove(req);
      default:return Handlers.e["fourohfour"]();
    }
  }
  catch(e_){return Handlers.e["someerror"](e_);}
};