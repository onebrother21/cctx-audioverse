import { HttpRequest,HttpHandler} from '@angular/common/http';
import { Player,Entity,AppUserConfig,AppUserProfile,AppUser } from '@state';
import { longId,AppError } from '@onebro/ob-common';
import { ok,isLoggedIn,idFromUrl,findone,save,add,errors as e, queryFromUrl } from '../utils';
import { db } from '../db';

export const playersController = (request:HttpRequest<any>,next:HttpHandler) => {
  const {url,method,headers,body,params} = request;
  const PLAYERS = {
    create:() => {
      const newprofile = {
        ...body as AppUserConfig,
        ...new Entity({}),
        settings:{lang:"en"},
        mates:[]} as AppUserProfile;
      add("qs-profiles",db.profiles,newprofile);
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
        save("qs-profiles",db.profiles,o,i);
        return ok(new AppUser(o).json(true));})(),
    remove:() => !isLoggedIn(headers)?
      e["unauthorized"]():
      (() => {
        db.profiles = db.profiles.filter(x => x.id !== idFromUrl(url));
        save("qs-profiles",db.profiles);
        return ok();})(),
    search:() => !isLoggedIn(headers)?
      e["unauthorized"]():
      (() => {
        const q = queryFromUrl(url);
        const queryDb:{[k:string]:{q:string;i:number;}[];} = {
          usernames:db.players.map((o,i) => ({q:o.username,i})),
          firstnames:db.players.map((o,i) => o.name?{q:o.name.first,i}:null),
          lastnames:db.players.map((o,i) => o.name?{q:o.name.last,i}:null),
        };
        const results = [];
        for(const k in queryDb){
          for (let i = 0,l = queryDb[k].length;i<l;i++){
            const o = queryDb[k][i];
            if(results.length === 10) break;
            if(o.q == q.name) results.push({match:o.q,index:i});}}
        return ok(results);})(),
  };
  switch(true){
    case url.endsWith('/players') && method === 'POST':return PLAYERS.create();
    case url.endsWith('/players') && method === 'GET':return PLAYERS.fetchRecent();
    case url.match(/\/players\/q\?/) && method === 'GET':return PLAYERS.search();
    case url.match(/\/players\/\w+$/) && method === 'GET':return PLAYERS.fetchByUsername();
    case url.match(/\/players\/\w+$/) && method === 'PUT':return PLAYERS.update();
    case url.match(/\/players\/\w+$/) && method === 'DELETE':return PLAYERS.remove();
    default:return e["fourohfour"]();
  }
};