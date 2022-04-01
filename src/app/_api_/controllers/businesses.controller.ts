import { HttpRequest } from '@angular/common/http';
import { Business } from '@state';
import { ok,isLoggedIn,idFromUrl,errors as e,save,findone,add } from '../utils';
import { db } from '../db';

export const businessesController = (req:HttpRequest<any>) => {
  try{
    const {url,method,headers,body} = req;
    const BUSINESSES = {
      create:() => {
        const o = new Business({...body,settings:{lang:"en",app:{}},mates:[]});
        add("qs-businesses",db.businesses,o);
        return ok(o.json(true));
      },
      fetch:() => !isLoggedIn(headers)?e["unauthorized"]():ok(db.businesses.map(p => new Business(p).json())),
      fetchRecent:() => !isLoggedIn(headers)?e["unauthorized"]():ok(db.businesses.map(p => new Business(p).json())),
      fetchByBusinessName:() => !isLoggedIn(headers)?
        e["unauthorized"]():
        (() => {
          const mine = /mine=1/.test(url);
          const o = db.businesses.find(o => o.businessName == idFromUrl(url));
          return ok(new Business(o).json(mine));
        })(),
      update:() => {
        if(!isLoggedIn(headers)) return e["unauthorized"]();
        const {o,i} = findone(db.businesses,"id",idFromUrl(url));
        for(const k in body) (o as any)[k] = body[k];
        save("qs-businesses",db.businesses,o,i);
        return ok(new Business(o).json(true));
      },
      remove:() => !isLoggedIn(headers)?
        e["unauthorized"]():
        (() => {
          db.businesses = db.businesses.filter(x => x.id !== idFromUrl(url));
          save("qs-businesses",db.businesses);
          return ok();
        })(),
    };
    switch(true){
      case url.endsWith('/businesses') && method === 'POST':return BUSINESSES.create();
      case url.endsWith('/businesses') && method === 'GET':return BUSINESSES.fetch();
      case url.endsWith('/businesses/recent') && method === 'GET':return BUSINESSES.fetchRecent();
      case url.match(/\/businesses\/\w+$/) && method === 'GET':return BUSINESSES.fetchByBusinessName();
      case url.match(/\/businesses\/\w+$/) && method === 'PUT':return BUSINESSES.update();
      case url.match(/\/businesses\/\w+$/) && method === 'DELETE':return BUSINESSES.remove();
      default:return e["fourohfour"]();
    }
  }
  catch(e_){return e["someerror"](e_);}
};