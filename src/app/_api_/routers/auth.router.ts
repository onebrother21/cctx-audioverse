import { HttpRequest } from '@angular/common/http';
import { AuthController as Auth } from '../controllers';
import { MockApiHandlers as Handlers,MockBackendNotifier } from '../utils';

export const AuthRouter = (req:HttpRequest<any>,notifier:MockBackendNotifier) => {
  Auth.notifier = notifier;
  const {url,method,headers,body} = req;
  try{
    switch(true){
      case url.match(/lookup\?/) && method === 'GET':return Auth.lookup(req);
      case url.match('/signup') && method === 'POST':return Auth.signup(req);
      case url.match('/signin') && method === 'POST':return Auth.signin(req);
      case url.match('/verify') && method === 'POST':return Auth.verify(req);
      case url.match('/register') && method === 'POST':return Auth.register(req);
      case url.match('/register') && method === 'PUT':return Auth.registerExt(req);
      case url.match('/login') && method === 'PUT':return Auth.updatePin(req);
      case url.match('/login') && method === 'POST':return Auth.login(req);
      case url.match('/logout') && method === 'POST':return Auth.logout(req);
      /*
      case url.match('/forgot/name') && method === 'POST':return Auth.forgotName();
      case url.match('/forgot/pin') && method === 'POST':return Auth.forgotPin();
      */
      default:return Handlers.e["fourohfour"]();
    }
  }
  catch(e_){return Handlers.e["someerror"](e_);}
};