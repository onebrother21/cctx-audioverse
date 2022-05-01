import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { UploadsController } from '../controllers';
import { MockBackendHandlers } from '../providers';

@Injectable({providedIn:"root"})
export class UploadsRouter {
  constructor(private handlers:MockBackendHandlers,private uploads:UploadsController){}
  route = (req:HttpRequest<any>) => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case url.endsWith('/uploads') && method === 'POST':return this.uploads.create(req);
        case url.endsWith('/uploads') && method === 'GET':return this.uploads.fetch(req);
        case url.endsWith('/uploads/recent') && method === 'GET':return this.uploads.fetchRecent(req);
        //case url.match(/\/uploads\/\w+$/) && method === 'GET':return this.uploads.fetchByName(req);
        case url.match(/\/uploads\/\w+$/) && method === 'PUT':return this.uploads.update(req);
        case url.match(/\/uploads\/\w+$/) && method === 'DELETE':return this.uploads.remove(req);
        default:return this.handlers.e["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}