import { HttpRequest,HttpHandler} from '@angular/common/http';
import { Task,longId,AppError, slugify } from '@state';
import { ok,isLoggedIn,idFromUrl,findone,save,add,errors as e } from '../utils';
import { db } from '../db';

export const tasksController = (request:HttpRequest<any>,next:HttpHandler) => {
  const {url,method,headers,body} = request;
  const TASKS = {
    create:() => {
      const newtask = body as Task;
      add("qs-tasks",db.tasks,newtask);
      return ok();},
    fetchRecent:() => /*!isLoggedIn(headers)?unauthorized():*/ok(db.tasks),
    fetchById:() => {
      return isLoggedIn(headers)?e["unauthorized"]():
      ok(db.tasks.find(x => x.id == idFromUrl(url)));},
    update:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      let {o,i} = findone(db.tasks,"id",idFromUrl(url));
      save("qs-tasks",db.tasks,{...o,...body},i);
      return ok();},
    remove:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      db.tasks = db.tasks.filter(x => x.id !== idFromUrl(url));
      save("qs-tasks",db.tasks);
      return ok();
    }
  };
  switch(true){
    case url.endsWith('/tasks') && method === 'POST':return TASKS.create();
    case url.endsWith('/tasks') && method === 'GET':return TASKS.fetchRecent();
    case url.match(/\/tasks\/\w+$/) && method === 'GET':return TASKS.fetchById();
    case url.match(/\/tasks\/\w+$/) && method === 'PUT':return TASKS.update();
    case url.match(/\/tasks\/\w+$/) && method === 'DELETE':return TASKS.remove();
    default:return e["fourohfour"]();
  }
};