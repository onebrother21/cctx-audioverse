import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { AppError,AppService } from "@state";
import { QS_Session } from "../models";
import { QS_SessionsActions as SESSIONS } from "../actions";
import { QS_SessionsService } from "../services";

@Injectable()
export class QS_SessionsEffects implements OnInitEffects {
  constructor(
    private actions$:Actions,
    private sessions:QS_SessionsService,
    private app:AppService){}
  ngrxOnInitEffects():Action {return SESSIONS.fetch();}
  FetchSessions$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(SESSIONS.fetch),
    mergeMap(() => this.sessions.fetch().pipe(
      map((sessions:QS_Session[]) => SESSIONS.load(sessions)),
      catchError(error => of(SESSIONS.error(new AppError(error))))))));
  CreateSession$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(SESSIONS.create),
    map(o => o.payload),
    mergeMap(o => this.sessions.send(o).pipe(
      map((session:QS_Session) => SESSIONS.loadMore([session])),
      catchError(error => of(SESSIONS.error(new AppError(error))))))));
}