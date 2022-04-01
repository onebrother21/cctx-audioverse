import { HttpRequest,HttpHandler} from '@angular/common/http';
import { ok,save,errors as e } from '../utils';
import { db } from '../db';

export const layoutController = (req:HttpRequest<any>) => {
  try{
    const {url,method,headers,body} = req;
    const LAYOUT = {
      fetch:() => {
        //save('qs-layout',db.layout);
        return ok(db.layout);}};
    switch(true){
      case method === 'GET':return LAYOUT.fetch();
      default:return e["fourohfour"]();
    }
  }
  catch(e_){return e["someerror"](e_);}
};