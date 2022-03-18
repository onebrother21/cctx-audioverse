import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { AppError,AppService } from "@state";
import { QS_User } from "../models";
import { QS_UsersActions as USERS } from "../actions";
import { QS_UsersService } from "../services";

@Injectable()
export class QS_UsersEffects implements OnInitEffects {
  constructor(
    private actions$:Actions,
    private users:QS_UsersService,
    private app:AppService){}
  ngrxOnInitEffects():Action {return USERS.fetch();}
  fetchQS_Users$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(USERS.fetch),
    mergeMap(() => this.users.fetch().pipe(
      map((users:QS_User[]) => USERS.load(users)),
      catchError(error => of(USERS.error(new AppError(error))))))));
  createQS_User$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(USERS.create),
    map(o => o.payload),
    mergeMap(o => this.users.send(o).pipe(
      map((user:QS_User) => USERS.loadMore([user])),
      catchError(error => of(USERS.error(new AppError(error))))))));
}