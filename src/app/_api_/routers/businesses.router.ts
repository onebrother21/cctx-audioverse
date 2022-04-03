import { HttpRequest } from '@angular/common/http';
import { BusinessesController as Businesses } from '../controllers';
import { MockApiHandlers as Handlers,MockBackendNotifier } from '../utils';

export const BusinessesRouter = (req:HttpRequest<any>,notifier:MockBackendNotifier) => {
  Businesses.notifier = notifier;
  const {url,method,headers,body} = req;
  try{
    switch(true){
      case url.endsWith('/businesses') && method === 'POST':return Businesses.create(req);
      case url.endsWith('/businesses') && method === 'GET':return Businesses.fetch(req);
      case url.endsWith('/businesses/recent') && method === 'GET':return Businesses.fetchRecent(req);
      case url.match(/\/businesses\/\w+$/) && method === 'GET':return Businesses.fetchByBusinessName(req);
      case url.match(/\/businesses\/\w+$/) && method === 'PUT':return Businesses.update(req);
      case url.match(/\/businesses\/\w+$/) && method === 'DELETE':return Businesses.remove(req);
      default:return Handlers.e["fourohfour"]();
    }
  }
  catch(e_){return Handlers.e["someerror"](e_);}
};