import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { AppError,AppService } from "@state";
import { Session } from "../models";
import { SessionsActions as SESSIONS } from "../actions";
import { SessionsService } from "../services";

@Injectable()
export class SessionsEffects implements OnInitEffects {
  constructor(
    private actions$:Actions,
    private sessions:SessionsService,
    private app:AppService){}
  ngrxOnInitEffects():Action {return SESSIONS.fetch();}
  FetchSessions$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(SESSIONS.fetch),
    mergeMap(() => this.sessions.fetch().pipe(
      map((sessions:Session[]) => SESSIONS.load(sessions)),
      catchError(error => of(SESSIONS.error(new AppError(error))))))));
  CreateSession$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(SESSIONS.create),
    map(o => o.payload),
    mergeMap(o => this.sessions.send(o).pipe(
      map((session:Session) => SESSIONS.loadMore([session])),
      catchError(error => of(SESSIONS.error(new AppError(error))))))));
}