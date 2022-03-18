import { Injectable } from '@angular/core';
import { Actions,ofType,Effect,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { 
  ROUTER_REQUEST,
  ROUTER_NAVIGATION,
  RouterNavigationAction,
  RouterRequestAction} from '@ngrx/router-store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map,tap,mergeMap,withLatestFrom,filter } from 'rxjs/operators';
import { AppService,route$ } from "@state";
import { QS_NavigationActions as NAV } from '../actions';
import { QS_NavigationService } from '../services';
import { home$ } from '../selectors';

@Injectable()
export class QS_NavigationEffects {
  constructor(
    private actions$:Actions,
    private app:AppService,
    private router:Router,
    private nav:QS_NavigationService){}
  PreNavigation$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_REQUEST),
    map((action:RouterRequestAction) => action.payload),
    map(({event,routerState:state}) => this.nav.getRequestedRoute(event,state)), 
    mergeMap(route => [NAV.set(route)])));
  PostNavigation$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action:RouterNavigationAction) => action.payload.routerState),
    withLatestFrom(this.app.select(route$)),
    map(([,route]) => ({route,page:this.nav.getPageTitle(route.url)})),
    mergeMap(o => ([NAV.update(o)]))));
  PageNotFound$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(NAV.notFound),
    withLatestFrom(this.app.select(home$)),
    map(([o,home]) => ({
      badurl:o.payload,
      errUrl:home == "/"?"":home + "/error"
    })),
    mergeMap(({badurl,errUrl})=> ([NAV.navigate({url:errUrl,query:{badurl}})]))));
  Go$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(NAV.go),
    withLatestFrom(this.app.select(home$)),
    mergeMap(([o,home]) => ([NAV.navigate({url:home + o.payload.url})]))));
  Back$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(NAV.back),
    withLatestFrom(this.app.select(home$)),
    mergeMap(([o,home]) => ([NAV.navigate({url:home + o.payload.url})]))));
  Forward$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(NAV.forward),
    withLatestFrom(this.app.select(home$)),
    mergeMap(([o,home]) => ([NAV.navigate({url:home + o.payload.url})]))));
  DoNavigation$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(NAV.navigate),
    tap(o => this.router.navigate([o.payload.url,{queryParams:o.payload.query}]))),{dispatch:false});
}