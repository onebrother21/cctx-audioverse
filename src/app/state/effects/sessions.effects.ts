import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { Session } from "../models";
import { SessionsActions as SESSIONS } from "../actions";
import { AppService,SessionsService } from "../services";

@Injectable()
export class SessionsEffects {
  constructor(
    private actions$:Actions,
    private sessions:SessionsService,
    private app:AppService){}
  FetchSessions$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(SESSIONS.fetch),
    mergeMap(() => this.sessions.fetch().pipe(
      map((sessions:Session[]) => SESSIONS.load(sessions)),
      catchError(error => of(SESSIONS.error(error)))))));
  CreateSession$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(SESSIONS.create),
    map(o => o.payload),
    mergeMap(o => this.sessions.create(o).pipe(
      map((session:Session) => SESSIONS.loadOne(session)),
      catchError(error => of(SESSIONS.error(error)))))));
}