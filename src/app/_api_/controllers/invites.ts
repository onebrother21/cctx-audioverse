import { HttpRequest,HttpHandler} from '@angular/common/http';
import { AppEntity, Invite } from '@state';
import { ok,isLoggedIn,idFromUrl,findone,save,add,errors as e } from '../utils';
import { db } from '../db';

export const invitesController = (req:HttpRequest<any>) => {
  try{
    const {url,method,headers,body} = req;
    const INVITES = {
      create:() => {
        const newinvite = body as Invite;
        add("qs-invites",db.invites,new AppEntity(newinvite));
        return ok();},
      fetchRecent:() => !isLoggedIn(headers)?e["unauthorized"]():ok(db.invites),
      fetchById:() => {
        return isLoggedIn(headers)?e["unauthorized"]():
        ok(db.invites.find(x => x.id == idFromUrl(url)));},
      update:() => {
        if (!isLoggedIn(headers)) return e["unauthorized"]();
        let {o,i} = findone(db.invites,"id",idFromUrl(url));
        save("qs-invites",db.invites,{...o,...body},i);
        return ok();},
      remove:() => {
        if (!isLoggedIn(headers)) return e["unauthorized"]();
        db.invites = db.invites.filter(x => x.id !== idFromUrl(url));
        save("qs-invites",db.invites);
        return ok();
      }
    };
    switch(true){
      case url.endsWith('/invites') && method === 'POST':return INVITES.create();
      case url.endsWith('/invites') && method === 'GET':return INVITES.fetchRecent();
      case url.match(/\/invites\/\w+$/) && method === 'GET':return INVITES.fetchById();
      case url.match(/\/invites\/\w+$/) && method === 'PUT':return INVITES.update();
      case url.match(/\/invites\/\w+$/) && method === 'DELETE':return INVITES.remove();
      default:return e["fourohfour"]();
    }
  }
  catch(e_){return e["someerror"](e_);}
};