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
  LayoutRouter,
  UsersRouter,
  AuthRouter,
  ContactUsRouter,
  ChatMessagesRouter,
  SessionsRouter,
  RoomsRouter,
  TasksRouter,
  InvitesRouter,
} from "./routers";
import { MockApiHandlers as Handlers,MockBackendNotifier } from './utils';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  constructor(private notifier:MockBackendNotifier){}
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    const {url} = req;
    const main = ():Observable<HttpEvent<any>> => {
      switch(true){
        case /layout/.test(url):return LayoutRouter(req,this.notifier);
        case /auth/.test(url):return AuthRouter(req,this.notifier);
        case /users/.test(url):return UsersRouter(req,this.notifier);
        case /contact-us/.test(url):return ContactUsRouter(req,this.notifier);
        case /chat-msgs/.test(url):return ChatMessagesRouter(req,this.notifier);
        case /sessions/.test(url):return SessionsRouter(req,this.notifier);
        case /rooms/.test(url):return RoomsRouter(req,this.notifier);
        case /tasks/.test(url):return TasksRouter(req,this.notifier);
        case /invites/.test(url):return InvitesRouter(req,this.notifier);
        //case /content/.test(url):return ContentRouter(req,this.notifier);
        //case /players/.test(url):return PlayersRouter(req,this.notifier);
        //case /games/.test(url):return GamesRouter(req,this.notifier);
        //case /posts/.test(url):return PostsRouter(req,this.notifier);
        default:return Handlers.errors["fourohfour"]();
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