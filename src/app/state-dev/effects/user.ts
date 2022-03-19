import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap,tap } from 'rxjs/operators';

import { AppError } from "../types";
import { UserActions as User } from '../__state/actions';
import { UserService,AppService } from "../__state/services";
import { AppError } from '@onebro/ob-common';

@Injectable()
export class UserEffects {
  constructor(
    private user:UserService,
    private action$:Actions,
    private app:AppService){}
  PopulateUser$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(User.populate),
    mergeMap(() => this.user.populate().pipe(
      map(user => User.load(user)),
      catchError(error => of(User.error(new AppError(error))))))));
  FetchUser$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(User.fetch),
    map(action => action.username),
    mergeMap(username => this.user.fetch(username).pipe(
      map(user => User.load(user)),
      catchError(error => of(User.error(new AppError(error))))))));
  CreateUser$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(User.create),
    map(action => action.username),
    mergeMap(username => this.user.create(username).pipe(
      map(user => User.load(user)),
      catchError(error => of(User.error(new AppError(error))))))));
  UpdateUser$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(User.update),
    map(action => action.updates),
    mergeMap(updates => this.user.update(updates.id,updates).pipe(
      map(user => User.load(user)),
      catchError(error => of(User.error(new AppError(error))))))));
  RemoveUser$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(User.remove),
    map(action => action.id),
    mergeMap(id => this.user.remove(id).pipe(
      map(deleted => User.load(null)),
      catchError(error => of(User.error(new AppError(error))))))));
  SaveUserLocally$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(User.load),
    tap(({user}) => this.user.set(user))),
    {dispatch:false});
}