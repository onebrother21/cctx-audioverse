import { HttpRequest } from '@angular/common/http';
import { LayoutController as Layout } from '../controllers';
import { MockApiHandlers as Handlers,MockBackendNotifier } from '../utils';

export const LayoutRouter = (req:HttpRequest<any>,notifier:MockBackendNotifier) => {
  Layout.notifier = notifier;
  const {url,method,headers,body} = req;
  try{
    switch(true){
      case method === 'GET':return Layout.fetch(req);
      default:return Handlers.e["fourohfour"]();
    }
  }
  catch(e_){return Handlers.e["someerror"](e_);}
};