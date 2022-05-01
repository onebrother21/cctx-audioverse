import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { TasksController } from '../controllers';
import { MockBackendHandlers } from '../providers';

@Injectable({providedIn:"root"})
export class TasksRouter {
  constructor(private handlers:MockBackendHandlers,private tasks:TasksController){}
  route = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case url.endsWith('/tasks') && method === 'POST':return this.tasks.create(req);
        case url.endsWith('/tasks') && method === 'GET':return this.tasks.fetchRecent(req);
        case url.match(/\/tasks\/\w+$/) && method === 'GET':return this.tasks.fetch(req);
        case url.match(/\/tasks\/\w+$/) && method === 'PUT':return this.tasks.update(req);
        case url.match(/\/tasks\/\w+$/) && method === 'DELETE':return this.tasks.remove(req);
        default:return this.handlers.e["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}