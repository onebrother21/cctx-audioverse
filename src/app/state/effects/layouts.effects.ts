import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { EMPTY, Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom,filter } from "rxjs/operators";

import { LayoutsActions as LAYOUT } from "../actions";
import { AppService,LayoutsService } from "../services";
import { ROUTER_NAVIGATION, RouterNavigationAction, ROUTER_NAVIGATED, RouterNavigatedAction } from "@ngrx/router-store";
import { headerNav$ } from "../selectors";

@Injectable()
export class LayoutsEffects {
  constructor(
    private actions$:Actions,
    private layouts:LayoutsService,
    private app:AppService){}
  RefreshVersion$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LAYOUT.refresh),
    tap(() => this.app.win.refreshVersion())),{dispatch:false});
  FetchAllLayouts$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LAYOUT.fetch),
    mergeMap(() => this.layouts.fetchAll().pipe(
      map(layouts => LAYOUT.load(layouts)),
      catchError(error => of(LAYOUT.error(error)))))));
  FetchLayout$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LAYOUT.fetchLatest),
    mergeMap(() => this.layouts.fetchLatest().pipe(
      map(layout => LAYOUT.loadOne(layout)),
      catchError(error => of(LAYOUT.error(error)))))));
  SelectLayout$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LAYOUT.loadOne),
    map(o => o.payload),
    map(layout => LAYOUT.select(layout.id)),
    catchError(error => of(LAYOUT.error(error)))));
  ScrollToTop$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LAYOUT.scrollTop),
    tap(() => this.app.win.scrollUp())),{dispatch:false});
  ScrollUpOnNavigation$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map((action:RouterNavigatedAction) => action.payload.routerState),
    withLatestFrom(this.app.load(headerNav$)),
    map(([,nav]) => ({
      open:nav?.open,
      scrollY:document.documentElement.scrollTop || document.body.scrollTop,
    })),
    mergeMap(({open,scrollY}) => {
      const actions:any[] = [];
      open?actions.push(LAYOUT.toggleNav(false)):null;
      scrollY?actions.push(LAYOUT.scrollTop()):null;
      return actions;
    })));
}