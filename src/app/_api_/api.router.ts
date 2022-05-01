import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest } from '@angular/common/http';
import { MockBackendHandlers,MockBackendNotifier } from './providers';
import {
  LayoutsRouter,
  UsersRouter,
  AuthRouter,
  ContactUsRouter,
  ChatMessagesRouter,
  SessionsRouter,
  RoomsRouter,
  TasksRouter,
  InvitesRouter,
  BusinessesRouter,
  UploadsRouter,
  PaymentsRouter,
} from "./routers";
import { Observable } from 'rxjs';

@Injectable({providedIn:"root"})
export class MockBackendRouter {
  constructor(
    private handlers:MockBackendHandlers,
    private layouts:LayoutsRouter,
    private auth:AuthRouter,
    private users:UsersRouter,
    private contactUs:ContactUsRouter,
    private msgs:ChatMessagesRouter,
    private sessions:SessionsRouter,
    private rooms:RoomsRouter,
    private tasks:TasksRouter,
    private invites:InvitesRouter,
    private businesses:BusinessesRouter,
    private uploads:UploadsRouter,
    private payments:PaymentsRouter,
  ){}
  route = (req:HttpRequest<any>):Observable<HttpEvent<any>> => {
    const {url,method,headers,body} = req;
    try{
      switch(true){
        case /layouts/.test(url):return this.layouts.route(req);
        case /auth/.test(url):return this.auth.route(req);
        case /users/.test(url):return this.users.route(req);
        case /contact-us/.test(url):return this.contactUs.route(req);
        case /chat-msgs/.test(url):return this.msgs.route(req);
        case /sessions/.test(url):return this.sessions.route(req);
        case /rooms/.test(url):return this.rooms.route(req);
        case /tasks/.test(url):return this.tasks.route(req);
        case /invites/.test(url):return this.invites.route(req);
        case /businesses/.test(url):return this.businesses.route(req);
        case /uploads/.test(url):return this.uploads.route(req);
        case /payments/.test(url):return this.payments.route(req);
        //case /content/.test(url):return ContentRouter(req,this.notifier);
        //case /players/.test(url):return PlayersRouter(req,this.notifier);
        //case /games/.test(url):return GamesRouter(req,this.notifier);
        //case /posts/.test(url):return PostsRouter(req,this.notifier);
        default:return this.handlers.errors["fourohfour"]();
      }
    }
    catch(e_){return this.handlers.e["someerror"](e_);}
  };
}