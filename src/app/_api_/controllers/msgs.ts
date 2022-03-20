import { HttpRequest,HttpHandler} from '@angular/common/http';
import { AppEntity, ChatMsg } from '@state';
import { ok,isLoggedIn,idFromUrl,findone,save,add,errors as e } from '../utils';
import { db } from '../db';

export const msgsController = (req:HttpRequest<any>) => {
  const {url,method,headers,body} = req;
  const MSGS = {
    create:() => {
      const newmsg = body as ChatMsg;
      add("qs-msgs",db.msgs,new AppEntity(newmsg));
      return ok();
    },
    fetchRecent:() => !isLoggedIn(headers)?e["unauthorized"]():ok(db.msgs),
    fetchById:() => {
      return isLoggedIn(headers)?e["unauthorized"]():
      ok(db.msgs.find(x => x.id == idFromUrl(url)));
    },
    update:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      let {o,i} = findone(db.msgs,"id",idFromUrl(url));
      save("qs-msgs",db.msgs,{...o,...body},i);
      return ok();
    },
    remove:() => {
      if (!isLoggedIn(headers)) return e["unauthorized"]();
      db.msgs = db.msgs.filter(x => x.id !== idFromUrl(url));
      save("qs-msgs",db.msgs);
      return ok();
    }
  };
  switch(true){
    case url.endsWith('/msgs') && method === 'POST':return MSGS.create();
    case url.endsWith('/msgs') && method === 'GET':return MSGS.fetchRecent();
    case url.match(/\/msgs\/\w+$/) && method === 'GET':return MSGS.fetchById();
    case url.match(/\/msgs\/\w+$/) && method === 'PUT':return MSGS.update();
    case url.match(/\/msgs\/\w+$/) && method === 'DELETE':return MSGS.remove();
    default:return e["fourohfour"]();
  }
};