import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { AuthController } from '../controllers';
import { MockBackendHandlers } from '../providers';

@Injectable({providedIn:"root"})
export class AuthRouter {
  constructor(private handlers:MockBackendHandlers,private auth:AuthController){}
  route = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case url.match(/lookup\?/) && method === 'GET':return this.auth.lookup(req);
        case url.match('/signup') && method === 'POST':return this.auth.signup(req);
        case url.match('/signin') && method === 'POST':return this.auth.signin(req);
        case url.match('/verify') && method === 'POST':return this.auth.verify(req);
        case url.match('/register') && method === 'POST':return this.auth.register(req);
        case url.match('/register') && method === 'PUT':return this.auth.registerExt(req);
        case url.match('/login') && method === 'PUT':return this.auth.updatePin(req);
        case url.match('/login') && method === 'POST':return this.auth.login(req);
        case url.match('/logout') && method === 'POST':return this.auth.logout(req);
        /*
        case url.match('/forgot/name') && method === 'POST':return this.auth.forgotName();
        case url.match('/forgot/pin') && method === 'POST':return this.auth.forgotPin();
        */
        default:return this.handlers.e["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}