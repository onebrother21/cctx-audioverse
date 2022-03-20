import { HttpRequest,HttpHandler} from '@angular/common/http';
import { ok,save,errors as e } from '../utils';
import { db } from '../db';

export const contentController = (request:HttpRequest<any>,next:HttpHandler) => {
  const {url,method,headers,body} = request;
  const CONTENT = {
    fetch:() => {
      save("qs-content",db.content);
      return ok(db.content);}};
  switch(true){
    case method === 'GET':return CONTENT.fetch();
    default:return e["fourohfour"]();
  }
};