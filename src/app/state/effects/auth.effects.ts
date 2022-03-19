import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of,withLatestFrom } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { AppEntity, AppError } from "../types";
import {
  AuthenticationActions as AUTH,
  NavigationActions as NAV,
  MeActions as ME, } from "../actions";
import { AppService,AuthenticationService } from "../services";
import { me$,authid$ } from "../selectors";

@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$:Actions,
    private auth:AuthenticationService,
    private app:AppService){}
  //ngrxOnInitEffects():Action {return AUTH.populate();}
  Signin$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.signin),
    map(o => o.payload),
    mergeMap(o => this.auth.signin(o).pipe(
      mergeMap(auth => ([
        AUTH.update(auth),
        NAV.go({url:"/secur01/login"}),
      ])),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Signup$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.signup),
    map(o => o.payload),
    mergeMap(o => this.auth.signup(o).pipe(
      mergeMap(auth => ([
        AUTH.update(auth),
        ME.create(new AppEntity(auth.email) as any),
        NAV.go({url:"/secur01/verify"}),
      ])),
      catchError(error => of(AUTH.error(new AppError(error))))))));
      
  Signout$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.signout),
    mergeMap(() => this.app.select(authid$)),
    mergeMap(id => this.auth.signout().pipe(
      mergeMap(auth => ([
        AUTH.update({}),
        ME.load({}),
        NAV.go({url:"/secur01/verify"}),
      ])),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Verify$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.verify),
    map(o => o.payload),
    withLatestFrom(this.app.select(me$)),
    map(([o,_o]) => ({...o,username:_o?_o.username||"":""})),
    mergeMap(o => this.auth.verify(o).pipe(
      mergeMap(auth => ([
        AUTH.update(auth),
        NAV.go({url:"/secur01/register"}),
      ])),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Register$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.register),
    map(o => o.payload),
    mergeMap(o => this.auth.register(o).pipe(
      mergeMap(auth => ([
        AUTH.update(auth),
        ME.update(auth),
        NAV.go({url:"/secur01/register-ext"}),
      ])),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  RegisterExt$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.registerExt),
    map(o => o.payload),
    withLatestFrom(this.app.select(me$)),
    map(([o,_o]) => ({...o,username:_o?_o.username||"":""})),
    mergeMap(o => this.auth.registerExt(o).pipe(
      mergeMap(auth => ([
        AUTH.update(auth),
        ME.update(auth),
        NAV.go({url:"/secur01/update-pin"}),
      ])),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  UpdatePin$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.updatePin),
    map(o => o.payload),
    withLatestFrom(this.app.select(me$)),
    map(([o,_o]) => ({...o,username:_o?_o.username||"":""})),
    mergeMap(o => this.auth.updatePin(o).pipe(
      mergeMap(auth => ([
        AUTH.update(auth),
        ME.update(auth),
        NAV.go({url:"/me"}),
      ])),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Login$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.login),
    map(o => o.payload),
    withLatestFrom(this.app.select(me$)),
    map(([o,_o]) => ({...o,username:_o?_o.username||"":""})),
    mergeMap(o => this.auth.login(o).pipe(
      mergeMap(auth => ([
        AUTH.update(auth),
        ME.update(auth),
        NAV.go({url:"/me"}),
      ])),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  ForgotName$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.forgotName),
    map(o => o.payload),
    mergeMap(o => this.auth.forgotName(o).pipe(
      mergeMap(auth => ([
        AUTH.update(auth),
        ME.update(auth),
        NAV.go({url:"/me"}),
      ])),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  ForgotPin$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.forgotPin),
    map(o => o.payload),
    mergeMap(o => this.auth.forgotPin(o).pipe(
      mergeMap(auth => ([
        AUTH.update(auth),
        ME.update(auth),
        NAV.go({url:"/secur01/reset"}),
      ])),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  /*
  UpdateAuthStatus$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.update),
    map(o => o.payload),
    mergeMap(o => [AUTH.load(this.auth.getAuthStatus(o))])));
*/
}