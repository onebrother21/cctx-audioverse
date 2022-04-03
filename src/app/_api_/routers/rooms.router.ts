import { HttpRequest } from '@angular/common/http';
import { RoomsController as Rooms } from '../controllers';
import { MockApiHandlers as Handlers,MockBackendNotifier } from '../utils';

export const RoomsRouter = (req:HttpRequest<any>,notifier:MockBackendNotifier) => {
  Rooms.notifier = notifier;
  const {url,method,headers,body} = req;
  try{
    switch(true){
      case url.endsWith('/rooms') && method === 'POST':return Rooms.create(req);
      case url.endsWith('/rooms') && method === 'GET':return Rooms.fetchRecent(req);
      case url.match(/\/rooms\/\w+$/) && method === 'GET':return Rooms.fetchById(req);
      case url.match(/\/rooms\/\w+$/) && method === 'PUT':return Rooms.update(req);
      case url.match(/\/rooms\/\w+$/) && method === 'DELETE':return Rooms.remove(req);
      default:return Handlers.e["fourohfour"]();
    }
  }
  catch(e_){return Handlers.e["someerror"](e_);}
};