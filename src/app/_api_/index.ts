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
  contentController,
  usersController,
  profilesController,
  playersController,
  gamesController,
  invitesController,
  postsController,
} from "./controllers";
import { errors as e} from './utils';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    const {url} = request;
    const main = ():Observable<HttpEvent<any>> => {
      switch(true){
        case /layout/.test(url):return layoutController(request,next);
        case /content/.test(url):return contentController(request,next);
        case /auth/.test(url):return usersController(request,next);
        case /users/.test(url):return profilesController(request,next);
        case /players/.test(url):return playersController(request,next);
        case /games/.test(url):return gamesController(request,next);
        case /invites/.test(url):return invitesController(request,next);
        case /posts/.test(url):return postsController(request,next);
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