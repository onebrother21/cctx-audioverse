import { HttpRequest } from '@angular/common/http';
import { ContactUsController as ContactUs } from '../controllers';
import { MockApiHandlers as Handlers,MockBackendNotifier } from '../utils';

export const ContactUsRouter = (req:HttpRequest<any>,notifier:MockBackendNotifier) => {
  ContactUs.notifier = notifier;
  const {url,method,headers,body} = req;
  try{
    switch(true){
      case url.endsWith('/contact-us') && method === 'POST':return ContactUs.create(req);
      case url.endsWith('/contact-us') && method === 'GET':return ContactUs.fetchRecent(req);
      case url.match(/\/contact-us\/\w+$/) && method === 'GET':return ContactUs.fetchById(req);
      case url.match(/\/contact-us\/\w+$/) && method === 'PUT':return ContactUs.update(req);
      case url.match(/\/contact-us\/\w+$/) && method === 'DELETE':return ContactUs.remove(req);
      default:return Handlers.e["fourohfour"]();
    }
  }
  catch(e_){return Handlers.e["someerror"](e_);}
};