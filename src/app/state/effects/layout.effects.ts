import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { LayoutActions as LAYOUT } from "../actions";
import { AppService,LayoutService } from "../services";
import { ROUTER_NAVIGATION, RouterNavigationAction } from "@ngrx/router-store";

@Injectable()
export class LayoutEffects {
  constructor(
    private actions$:Actions,
    private layout:LayoutService,
    private app:AppService){}
  RefreshVersion$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LAYOUT.refresh),
    tap(() => this.app.win.refreshVersion())),{dispatch:false});
  FetchLayout$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LAYOUT.fetch),
    mergeMap(() =>
      this.layout.fetch().pipe(
        map(layoutContent => LAYOUT.load(layoutContent)),
        catchError(error => of(LAYOUT.error(error)))))));
  ScrollToTop$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LAYOUT.scrollTop),
    tap(() => this.app.win.scrollUp())),{dispatch:false});
  ScrollUpOnNavigation$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action:RouterNavigationAction) => action.payload.routerState),
    mergeMap(() => ([
      LAYOUT.toggleNav(false),
      LAYOUT.scrollTop(),
    ]))));
}