import { HttpRequest,HttpHandler} from '@angular/common/http';
import { Entity,AppUserProfile,AppUserConfig,AppUser,longId,AppError } from '@state';
import { ok,isLoggedIn,idFromUrl,errors as e,save,findone,add } from '../utils';
import { db } from '../db';

export const profilesController = (request:HttpRequest<any>,next:HttpHandler) => {
  const {url,method,headers,body} = request;
  const PROFILES = {
    create:() => {
      const newprofile = {
        ...body as AppUserConfig,
        ...new Entity({}),
        settings:{lang:"en"},
        mates:[]} as AppUserProfile;
      add("hcl-profiles",db.profiles,newprofile);
      return ok(new AppUser(newprofile).json(true));},
    fetch:() => !isLoggedIn(headers)?
      e["unauthorized"]():
      ok(db.profiles.map(p => new AppUser(p).json())),
    fetchRecent:() => !isLoggedIn(headers)?
      e["unauthorized"]():
      ok(db.profiles.map(p => new AppUser(p).json())),
    fetchByUsername:() => !isLoggedIn(headers)?
      e["unauthorized"]():
      (() => {
        const mine = /mine=1/.test(url);
        const o = db.profiles.find(o => o.username == idFromUrl(url));
        return ok(new AppUser(o).json(mine));
      })(),
    update:() => !isLoggedIn(headers)?
      e["unauthorized"]():
      (() => {
        let {o,i} = findone(db.profiles,"id",idFromUrl(url));
        for(const k in body) o[k] = body[k];
        save("hcl-profiles",db.profiles,o,i);
        return ok(new AppUser(o).json(true));})(),
    remove:() => !isLoggedIn(headers)?
      e["unauthorized"]():
      (() => {
        db.profiles = db.profiles.filter(x => x.id !== idFromUrl(url));
        save("hcl-profiles",db.profiles);
        return ok();})(),
  };
  switch(true){
    case url.endsWith('/users') && method === 'POST':return PROFILES.create();
    case url.endsWith('/users') && method === 'GET':return PROFILES.fetch();
    case url.endsWith('/users/recent') && method === 'GET':return PROFILES.fetchRecent();
    case url.match(/\/users\/\w+$/) && method === 'GET':return PROFILES.fetchByUsername();
    case url.match(/\/users\/\w+$/) && method === 'PUT':return PROFILES.update();
    case url.match(/\/users\/\w+$/) && method === 'DELETE':return PROFILES.remove();
    default:return e["fourohfour"]();
  }
};