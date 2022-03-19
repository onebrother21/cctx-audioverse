import { HttpRequest,HttpHandler} from '@angular/common/http';
import { Invite } from '@state';
import { longId,AppError } from '@onebro/ob-common';
import { ok,isLoggedIn,idFromUrl,findone,save,add,errors as e } from '../utils';
import { db } from '../db';

export const invitesController = (request:HttpRequest<any>,next:HttpHandler) => {
  const {url,method,headers,body} = request;
  const INVITES = {
    create:() => {
      const newinvite = new Invite(body);
      add("hcl-invites",db.invites,newinvite);
      return ok(newinvite);},
    fetchRecent:() => /*!isLoggedIn(headers)?unauthorized():*/ok(db.invites),
    fetchById:() => {
      return isLoggedIn(headers)?e["unauthorized"]():
      ok(db.invites.find(x => x.id == idFromUrl(url)));},
    update:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      let {o,i} = findone(db.invites,"id",idFromUrl(url));
      save("hcl-invites",db.invites,{...o,...body},i);
      return ok();},
    remove:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      db.invites = db.invites.filter(x => x.id !== idFromUrl(url));
      save("hcl-invites",db.invites);
      return ok();}};
  switch(true){
    case url.endsWith('/invites') && method === 'POST':return INVITES.create();
    case url.endsWith('/invites') && method === 'GET':return INVITES.fetchRecent();
    case url.match(/\/invites\/\w+$/) && method === 'GET':return INVITES.fetchById();
    case url.match(/\/invites\/\w+$/) && method === 'PUT':return INVITES.update();
    case url.match(/\/invites\/\w+$/) && method === 'DELETE':return INVITES.remove();
    default:return e["fourohfour"]();
  }
};