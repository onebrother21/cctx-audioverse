import { HttpRequest,HttpHandler} from '@angular/common/http';
import { Game } from '@state';
import { longId,AppError, slugify } from '@onebro/ob-common';
import { ok,isLoggedIn,idFromUrl,findone,save,add,errors as e } from '../utils';
import { db } from '../db';

export const gamesController = (request:HttpRequest<any>,next:HttpHandler) => {
  const {url,method,headers,body} = request;
  const GAMES = {
    create:() => {
      const newgame = body as Game;
      add("hcl-games",db.games,newgame);
      return ok();},
    fetchRecent:() => /*!isLoggedIn(headers)?unauthorized():*/ok(db.games),
    fetchById:() => {
      return isLoggedIn(headers)?e["unauthorized"]():
      ok(db.games.find(x => x.id == idFromUrl(url)));},
    update:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      let {o,i} = findone(db.games,"id",idFromUrl(url));
      save("hcl-games",db.games,{...o,...body},i);
      return ok();},
    remove:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      db.games = db.games.filter(x => x.id !== idFromUrl(url));
      save("hcl-games",db.games);
      return ok();}};
  switch(true){
    case url.endsWith('/games') && method === 'POST':return GAMES.create();
    case url.endsWith('/games') && method === 'GET':return GAMES.fetchRecent();
    case url.match(/\/games\/\w+$/) && method === 'GET':return GAMES.fetchById();
    case url.match(/\/games\/\w+$/) && method === 'PUT':return GAMES.update();
    case url.match(/\/games\/\w+$/) && method === 'DELETE':return GAMES.remove();
    default:return e["fourohfour"]();
  }
};