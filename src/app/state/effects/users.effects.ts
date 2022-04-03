import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,filter } from "rxjs/operators";

import { UsersActions as USERS } from "../actions";
import { AppService,UsersService } from "../services";

@Injectable()
export class UsersEffects {
  constructor(
    private actions$:Actions,
    private users:UsersService,
    private app:AppService){}
  fetchUsers$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(USERS.fetch),
    mergeMap(() => this.users.fetch().pipe(
      map(users => USERS.load(users)),
      catchError(error => of(USERS.error(error)))))));
  createUser$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(USERS.create),
    map(o => o.payload),
    mergeMap(o => this.users.create(o).pipe(
      map(user => USERS.loadOne(user)),
      catchError(error => of(USERS.error(error)))))));
  queryUsers$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(USERS.query),
    map(o => o.payload),
    mergeMap(q => this.users.query(q).pipe(
      map(users => USERS.load(users)),
      catchError(error => of(USERS.error(error)))))));
}