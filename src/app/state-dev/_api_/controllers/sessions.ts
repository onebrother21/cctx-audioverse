import { HttpRequest,HttpHandler} from '@angular/common/http';
import { Session,longId,AppError, slugify } from '@state';
import { ok,isLoggedIn,idFromUrl,findone,save,add,errors as e } from '../utils';
import { db } from '../db';

export const sessionsController = (request:HttpRequest<any>,next:HttpHandler) => {
  const {url,method,headers,body} = request;
  const SESSIONS = {
    create:() => {
      const newsession = body as Session;
      add("qs-sessions",db.sessions,newsession);
      return ok();},
    fetchRecent:() => /*!isLoggedIn(headers)?unauthorized():*/ok(db.sessions),
    fetchById:() => {
      return isLoggedIn(headers)?e["unauthorized"]():
      ok(db.sessions.find(x => x.id == idFromUrl(url)));},
    update:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      let {o,i} = findone(db.sessions,"id",idFromUrl(url));
      save("qs-sessions",db.sessions,{...o,...body},i);
      return ok();},
    remove:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      db.sessions = db.sessions.filter(x => x.id !== idFromUrl(url));
      save("qs-sessions",db.sessions);
      return ok();
    }
  };
  switch(true){
    case url.endsWith('/sessions') && method === 'POST':return SESSIONS.create();
    case url.endsWith('/sessions') && method === 'GET':return SESSIONS.fetchRecent();
    case url.match(/\/sessions\/\w+$/) && method === 'GET':return SESSIONS.fetchById();
    case url.match(/\/sessions\/\w+$/) && method === 'PUT':return SESSIONS.update();
    case url.match(/\/sessions\/\w+$/) && method === 'DELETE':return SESSIONS.remove();
    default:return e["fourohfour"]();
  }
};