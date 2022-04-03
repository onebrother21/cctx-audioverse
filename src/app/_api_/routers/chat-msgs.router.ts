import { HttpRequest } from '@angular/common/http';
import { ChatMessagesController as ChatMsgs } from '../controllers';
import { MockApiHandlers as Handlers,MockBackendNotifier } from '../utils';

export const ChatMessagesRouter = (req:HttpRequest<any>,notifier:MockBackendNotifier) => {
  ChatMsgs.notifier = notifier;
  const {url,method,headers,body} = req;
  try{
    switch(true){
      case url.endsWith('/chat-msgs') && method === 'POST':return ChatMsgs.create(req);
      case url.endsWith('/chat-msgs') && method === 'GET':return ChatMsgs.fetchRecent(req);
      case url.match(/\/chat-msgs\/\w+$/) && method === 'GET':return ChatMsgs.fetchById(req);
      case url.match(/\/chat-msgs\/\w+$/) && method === 'PUT':return ChatMsgs.update(req);
      case url.match(/\/chat-msgs\/\w+$/) && method === 'DELETE':return ChatMsgs.remove(req);
      default:return Handlers.e["fourohfour"]();
    }
  }
  catch(e_){return Handlers.e["someerror"](e_);}
};