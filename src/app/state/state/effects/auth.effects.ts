import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of,withLatestFrom } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { AppError,AppService } from "@state";
import { QS_User } from "../models";
import {
  QS_AuthenticationActions as AUTH,
  QS_NavigationActions as NAV,
  QS_MeActions as ME, } from "../actions";
import { QS_AuthenticationService } from "../services";
import { me$ } from "../selectors";

@Injectable()
export class QS_AuthenticationEffects {
  constructor(
    private actions$:Actions,
    private auth:QS_AuthenticationService,
    private app:AppService){}
  //ngrxOnInitEffects():Action {return AUTH.populate();}
  Signin$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.signin),
    map(o => o.payload),
    mergeMap(o => this.auth.signin(o).pipe(
      map(auth => AUTH.update(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Signup$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.signup),
    map(o => o.payload),
    mergeMap(o => this.auth.signup(o).pipe(
      map(auth => AUTH.update(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Verify$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.verify),
    map(o => o.payload),
    withLatestFrom(this.app.select(me$)),
    map(([o,_o]) => ({...o,username:_o?_o.username||"":""})),
    mergeMap(o => this.auth.verify(o).pipe(
      map(auth => AUTH.update(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Register$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.register),
    map(o => o.payload),
    mergeMap(o => this.auth.register(o).pipe(
      map(auth => AUTH.update(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  RegisterExt$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.registerExt),
    map(o => o.payload),
    withLatestFrom(this.app.select(me$)),
    map(([o,_o]) => ({...o,username:_o?_o.username||"":""})),
    mergeMap(o => this.auth.registerExt(o).pipe(
      map(auth => AUTH.update(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  UpdatePin$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.updatePin),
    map(o => o.payload),
    withLatestFrom(this.app.select(me$)),
    map(([o,_o]) => ({...o,username:_o?_o.username||"":""})),
    mergeMap(o => this.auth.updatePin(o).pipe(
      map(auth => AUTH.update(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Login$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.login),
    map(o => o.payload),
    withLatestFrom(this.app.select(me$)),
    map(([o,_o]) => ({...o,username:_o?_o.username||"":""})),
    mergeMap(o => this.auth.login(o).pipe(
      map(auth => AUTH.update(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Forgot$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.forgot),
    map(o => o.payload),
    mergeMap(o => this.auth.forgot(o).pipe(
      map(auth => AUTH.update(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  NavigateToNextAuthPage$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.update),
    map(o => o.payload),
    mergeMap(o => this.auth.navigateAuthentication(o?o.action||"":"").pipe(
      map(url => NAV.go({url})),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  ReloadQS_User$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.update),
    map(o => o.payload),
    mergeMap(o => [ME.load(o as QS_User)])));
  UpdateAuthStatus$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.update),
    map(o => o.payload),
    mergeMap(o => [AUTH.load(this.auth.getAuthStatus(o))])));
}