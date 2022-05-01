import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of,withLatestFrom } from "rxjs";
import { mergeMap,map,tap,catchError,filter } from "rxjs/operators";

import {
  AuthenticationActions as AUTH,
  MeActions as ME,
  NavigationActions as NAV,
} from "../actions";
import { authid$ } from "../selectors";
import { AppService,AuthenticationService } from "../services";

@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$:Actions,
    private auth:AuthenticationService,
    private app:AppService,
  ){}
  Lookup$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.lookup),
    map(o => o.payload),
    mergeMap(q => this.auth.lookup(q).pipe(
      map(({results}) => AUTH.exists(results)),
      catchError(error => of(AUTH.error(error)))))));
  Signup$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.signup),
    map(o => o.payload),
    mergeMap(o => this.auth.signup(o).pipe(
      mergeMap(user => ([
        AUTH.load(user),
        ME.load(user),
      ])),
      tap(() => this.app.go("/secur01/verify")),
      catchError(error => of(AUTH.error(error)))))));
  Signin$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.signin),
    map(o => o.payload),
    mergeMap(o => this.auth.signin(o).pipe(
      mergeMap(user => ([
        AUTH.load(user),
        ME.load(user),
      ])),
      tap(() => this.app.go("/secur01/login")),
      catchError(error => of(AUTH.error(error)))))));
  Signout$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.signout),
    map(() => AUTH.logout()),
    catchError(error => of(AUTH.error(error)))));
  Verify$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.verify),
    map(o => o.payload),
    withLatestFrom(this.app.load(authid$)),
    map(([{code},username]) => ({code,email:username||""})),
    mergeMap(o => this.auth.verify(o).pipe(
      mergeMap(user => ([
        AUTH.load(user),
        ME.load(user),
      ])),
      tap(() => this.app.go("/secur01/register")),
      catchError(e => of(AUTH.error(e)))))));
  Register$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.register),
    map(o => o.payload),
    withLatestFrom(this.app.load(authid$)),
    map(([user,username]) => ({...user,email:username||""})),
    mergeMap(o => this.auth.register(o).pipe(
      mergeMap(user => ([
        AUTH.load(user),
        ME.load(user),
      ])),
      tap(() => this.app.go("/secur01/register-ext")),
      catchError(error => of(AUTH.error(error)))))));
  RegisterExt$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.registerExt),
    map(o => o.payload),
    withLatestFrom(this.app.load(authid$)),
    map(([user,username]) => ({...user,username:username||""})),
    mergeMap(o => this.auth.registerExt(o).pipe(
      mergeMap(user => ([
        AUTH.load(user),
        ME.load(user),
      ])),
      tap(() => this.app.go("/secur01/update-pin")),
      catchError(error => of(AUTH.error(error)))))));
  UpdatePin$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.updatePin),
    map(o => o.payload),
    withLatestFrom(this.app.load(authid$)),
    map(([{pin},username]) => ({pin,username:username||""})),
    mergeMap(o => this.auth.updatePin(o).pipe(
      mergeMap(user => ([
        AUTH.load(user),
        ME.load(user),
      ])),
      tap(() => this.app.go("/me")),
      catchError(error => of(AUTH.error(error)))))));
  Login$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.login),
    map(o => o.payload),
    withLatestFrom(this.app.load(authid$)),
    map(([{pin},username]) => ({pin,username:username||""})),
    mergeMap(o => this.auth.login(o).pipe(
      mergeMap(user => ([
        AUTH.load(user),
        ME.load(user),
      ])),
      tap(() => this.app.go("/me")),
      catchError(error => of(AUTH.error(error)))))));
  Logout$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.logout),
    withLatestFrom(this.app.load(authid$)),
    map(([,username]) => ({username:username||""})),
    mergeMap(o => this.auth.logout(o).pipe(
      mergeMap(() => ([
        AUTH.load(),
        ME.load({}),
      ])),
      tap(() => this.app.go("/")),
      catchError(error => of(AUTH.error(error)))))));
}
/*
  ForgotName$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.forgotName),
    map(o => o.payload),
    mergeMap(o => this.auth.forgotName(o).pipe(
      mergeMap(auth => ([
        AUTH.load(auth),
        ME.load(auth),
        NAV.go({url:"/me"}),
      ])),
      catchError(error => of(AUTH.error(error)))))));
  ForgotPin$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.forgotPin),
    map(o => o.payload),
    mergeMap(o => this.auth.forgotPin(o).pipe(
      mergeMap(auth => ([
        AUTH.load(auth),
        ME.load(auth),
        NAV.go({url:"/secur01/reset"}),
      ])),
      catchError(error => of(AUTH.error(error)))))));
  UpdateAuthStatus$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.load),
    map(o => o.payload),
    mergeMap(o => [AUTH.load(this.auth.getAuthStatus(o))])));
*/