import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { delay,mergeMap,materialize,dematerialize } from 'rxjs/operators';
import { 
  layoutController,
  usersController,
  authController,
  contactUsController,
  msgsController,
  sessionsController,
  roomsController,
  tasksController,
  invitesController,
} from "./controllers";
import { errors as e} from './utils';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    const {url} = req;
    const main = ():Observable<HttpEvent<any>> => {
      switch(true){
        case /layout/.test(url):return layoutController(req);
        case /auth/.test(url):return authController(req);
        case /users/.test(url):return usersController(req);
        case /contact-us/.test(url):return contactUsController(req);
        case /msgs/.test(url):return msgsController(req);
        case /sessions/.test(url):return sessionsController(req);
        case /rooms/.test(url):return roomsController(req);
        case /tasks/.test(url):return tasksController(req);
        case /invites/.test(url):return invitesController(req);
        //case /content/.test(url):return contentController(req,next);
        //case /players/.test(url):return playersController(req,next);
        //case /games/.test(url):return gamesController(req,next);
        //case /posts/.test(url):return postsController(req,next);
        default:return e["fourohfour"]();
      }
    };
    return of(url)
    .pipe(mergeMap(main))
    .pipe(materialize(),delay(300),dematerialize());
  }
}
export const fakeBackendProvider = {
  provide:HTTP_INTERCEPTORS,
  useClass:FakeBackendInterceptor,
  multi:true,
};