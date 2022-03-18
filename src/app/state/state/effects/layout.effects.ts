import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { AppError,AppService,AppRoute,route$ } from "@state";
import { QS_Layout } from "../models";
import { QS_LayoutState } from "../states";
import { QS_LayoutActions as LAYOUT } from "../actions";
import { QS_LayoutService } from "../services";
import { ROUTER_NAVIGATION, RouterNavigationAction } from "@ngrx/router-store";

@Injectable()
export class QS_LayoutEffects {
  constructor(
    private actions$:Actions,
    private layout:QS_LayoutService,
    private app:AppService){}
  PostNavigation$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action:RouterNavigationAction) => action.payload.routerState),
    mergeMap(() => ([
      LAYOUT.toggleMobileNav(false),
      LAYOUT.scrollTop(),
    ]))));
  ScrollToTop$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LAYOUT.scrollTop),
    tap(() => this.app.win.scrollUp())),{dispatch:false});
  FetchQS_Layout$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LAYOUT.fetch),
    mergeMap(() =>
      this.layout.fetch().pipe(
        map((layout:QS_Layout) => LAYOUT.load(layout)),
        catchError(error => of(LAYOUT.error(new AppError(error))))))));
}