import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable,catchError,throwError, of } from 'rxjs';
import { delay,mergeMap,materialize,dematerialize } from 'rxjs/operators';
import { 
  layoutController,
  usersController,
  authController,
  contactUsController,
  msgsController,
  //sessionsController,
  roomsController,
  tasksController,
  invitesController,
} from "./controllers";
import { errors as e} from './utils';
import { MockBackendNotifier } from './api-notifier';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  constructor(private notifier:MockBackendNotifier){}
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    const {url} = req;
    const main = ():Observable<HttpEvent<any>> => {
      switch(true){
        case /layout/.test(url):return layoutController(req);
        case /auth/.test(url):return authController(req,this.notifier);
        case /users/.test(url):return usersController(req);
        //case /contact-us/.test(url):return contactUsController(req);
        //case /msgs/.test(url):return msgsController(req);
        //case /sessions/.test(url):return sessionsController(req);
        //case /rooms/.test(url):return roomsController(req);
        //case /tasks/.test(url):return tasksController(req);
        //case /invites/.test(url):return invitesController(req);
        //case /content/.test(url):return contentController(req,next);
        //case /players/.test(url):return playersController(req,next);
        //case /games/.test(url):return gamesController(req,next);
        //case /posts/.test(url):return postsController(req,next);
        default:return e["fourohfour"]();
      }
    };
    return of(url)
    .pipe(mergeMap(main))
    .pipe(materialize(),delay(300),dematerialize())
    .pipe(catchError(error => {
      console.warn('the interceptor has caught an error, process it here',error);
      return throwError(() => error);
    }));
  }
}
export const MockBackendProvider = {
  provide:HTTP_INTERCEPTORS,
  useClass:MockBackendInterceptor,
  multi:true,
};