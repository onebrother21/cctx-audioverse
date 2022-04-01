import { HttpRequest,HttpHandler} from '@angular/common/http';
import { AppEntity, ContactUsMsg } from '@state';
import { ok,isLoggedIn,idFromUrl,findone,save,add,errors as e } from '../utils';
import { db } from '../db';

export const contactUsController = (req:HttpRequest<any>) => {
  try {
    const {url,method,headers,body} = req;
    const CONTACTUS = {
      create:() => {
        const newcontactUs = body as ContactUsMsg;
        add("qs-contact-us",db.contactUs,new AppEntity(newcontactUs));
        return ok();
      },
      fetchRecent:() => !isLoggedIn(headers)?e["unauthorized"]():ok(db.contactUs),
      fetchById:() => {
        return isLoggedIn(headers)?e["unauthorized"]():
        ok(db.contactUs.find(x => x.id == idFromUrl(url)));
      },
      update:() => {
        if (!isLoggedIn(headers)) return e["unauthorized"]();
        let {o,i} = findone(db.contactUs,"id",idFromUrl(url));
        save("qs-contact-us",db.contactUs,{...o,...body},i);
        return ok();
      },
      remove:() => {
        if (!isLoggedIn(headers)) return e["unauthorized"]();
        db.contactUs = db.contactUs.filter(x => x.id !== idFromUrl(url));
        save("qs-contact-us",db.contactUs);
        return ok();
      }
    };
    switch(true){
      case url.endsWith('/contact-us') && method === 'POST':return CONTACTUS.create();
      case url.endsWith('/contact-us') && method === 'GET':return CONTACTUS.fetchRecent();
      case url.match(/\/contact-us\/\w+$/) && method === 'GET':return CONTACTUS.fetchById();
      case url.match(/\/contact-us\/\w+$/) && method === 'PUT':return CONTACTUS.update();
      case url.match(/\/contact-us\/\w+$/) && method === 'DELETE':return CONTACTUS.remove();
      default:return e["fourohfour"]();
    }
  }
  catch(e_){return e["someerror"](e_);}
};