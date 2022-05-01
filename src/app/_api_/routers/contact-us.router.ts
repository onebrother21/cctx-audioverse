import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { ContactUsController } from '../controllers';
import { MockBackendHandlers } from '../providers';

@Injectable({providedIn:"root"})
export class ContactUsRouter {
  constructor(private handlers:MockBackendHandlers,private contactUs:ContactUsController){}
  route = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case url.endsWith('/contact-us') && method === 'POST':return this.contactUs.create(req);
        case url.endsWith('/contact-us') && method === 'GET':return this.contactUs.fetchRecent(req);
        case url.match(/\/contact-us\/\w+$/) && method === 'GET':return this.contactUs.fetch(req);
        case url.match(/\/contact-us\/\w+$/) && method === 'PUT':return this.contactUs.update(req);
        case url.match(/\/contact-us\/\w+$/) && method === 'DELETE':return this.contactUs.remove(req);
        default:return this.handlers.e["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}