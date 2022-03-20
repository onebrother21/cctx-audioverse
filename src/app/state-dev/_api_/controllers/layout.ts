import { HttpRequest,HttpHandler} from '@angular/common/http';
import { ok,save,errors as e } from '../utils';
import { db } from '../db';

export const layoutController = (request:HttpRequest<any>,next:HttpHandler) => {
  const {url,method,headers,body} = request;
  const LAYOUT = {
    fetch:() => {
      save('qs-layout',db.layout);
      return ok(db.layout);}};
  switch(true){
    case method === 'GET':return LAYOUT.fetch();
    default:return e["fourohfour"]();
  }
};