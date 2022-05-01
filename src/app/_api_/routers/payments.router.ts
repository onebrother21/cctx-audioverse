import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { PaymentsController } from '../controllers';
import { MockBackendHandlers } from '../providers';

@Injectable({providedIn:"root"})
export class PaymentsRouter {
  constructor(private handlers:MockBackendHandlers,private payments:PaymentsController){}
  route = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case url.match('/charge') && method === 'POST':return this.payments.charge(req);
        default:return this.handlers.e["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}