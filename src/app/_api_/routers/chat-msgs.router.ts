import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { ChatMessagesController } from '../controllers';
import { MockBackendHandlers } from '../providers';

@Injectable({providedIn:"root"})
export class ChatMessagesRouter {
  constructor(private handlers:MockBackendHandlers,private msgs:ChatMessagesController){}
  route = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case url.endsWith('/chat-msgs') && method === 'POST':return this.msgs.create(req);
        case url.endsWith('/chat-msgs') && method === 'GET':return this.msgs.fetchRecent(req);
        case url.match(/\/chat-msgs\/\w+$/) && method === 'GET':return this.msgs.fetch(req);
        case url.match(/\/chat-msgs\/\w+$/) && method === 'PUT':return this.msgs.update(req);
        case url.match(/\/chat-msgs\/\w+$/) && method === 'DELETE':return this.msgs.remove(req);
        default:return this.handlers.e["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}