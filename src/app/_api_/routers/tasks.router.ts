import { HttpRequest } from '@angular/common/http';
import { TasksController as Tasks } from '../controllers';
import { MockApiHandlers as Handlers,MockBackendNotifier } from '../utils';

export const TasksRouter = (req:HttpRequest<any>,notifier:MockBackendNotifier) => {
  Tasks.notifier = notifier;
  const {url,method,headers,body} = req;
  try{
    switch(true){
      case url.endsWith('/tasks') && method === 'POST':return Tasks.create(req);
      case url.endsWith('/tasks') && method === 'GET':return Tasks.fetchRecent(req);
      case url.match(/\/tasks\/\w+$/) && method === 'GET':return Tasks.fetchById(req);
      case url.match(/\/tasks\/\w+$/) && method === 'PUT':return Tasks.update(req);
      case url.match(/\/tasks\/\w+$/) && method === 'DELETE':return Tasks.remove(req);
      default:return Handlers.e["fourohfour"]();
    }
  }
  catch(e_){return Handlers.e["someerror"](e_);}
};