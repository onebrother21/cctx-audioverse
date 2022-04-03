import { HttpRequest } from '@angular/common/http';
import { UsersController as Users } from '../controllers';
import { MockApiHandlers as Handlers,MockBackendNotifier } from '../utils';

export const UsersRouter = (req:HttpRequest<any>,notifier:MockBackendNotifier) => {
  Users.notifier = notifier;
  const {url,method,headers,body} = req;
  try{
    switch(true){
      case url.endsWith('/users') && method === 'POST':return Users.create(req);
      case url.endsWith('/users') && method === 'GET':return Users.fetch(req);
      case url.endsWith('/users/recent') && method === 'GET':return Users.fetchRecent(req);
      case url.match(/\/users\/\w+$/) && method === 'GET':return Users.fetchByUsername(req);
      case url.match(/\/users\/\w+$/) && method === 'PUT':return Users.update(req);
      case url.match(/\/users\/\w+$/) && method === 'DELETE':return Users.remove(req);
      default:return Handlers.e["fourohfour"]();
    }
  }
  catch(e_){return Handlers.e["someerror"](e_);}
};