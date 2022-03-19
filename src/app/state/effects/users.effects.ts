import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { AppError } from "../types";
import { User } from "../models";
import { UsersActions as USERS } from "../actions";
import { AppService,UsersService } from "../services";

@Injectable()
export class UsersEffects implements OnInitEffects {
  constructor(
    private actions$:Actions,
    private users:UsersService,
    private app:AppService){}
  ngrxOnInitEffects():Action {return USERS.fetch();}
  fetchUsers$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(USERS.fetch),
    mergeMap(() => this.users.fetch().pipe(
      map((users:User[]) => USERS.load(users)),
      catchError(error => of(USERS.error(new AppError(error))))))));
  createUser$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(USERS.create),
    map(o => o.payload),
    mergeMap(o => this.users.send(o).pipe(
      map((user:User) => USERS.loadMore([user])),
      catchError(error => of(USERS.error(new AppError(error))))))));
}