import { Injectable } from '@angular/core';
import { Actions, ofType,Effect,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Observable } from 'rxjs';
import { map,withLatestFrom,filter,tap,mergeMap } from 'rxjs/operators';

import { AppError } from "../types";
import { AlertsActions as Alerts } from '../actions';
import { AlertsService,AppService } from "../services";
import { keepAlertAfterNav$ } from '../selectors';

@Injectable()
export class AlertsEffects {
  constructor(
    private action$:Actions,
    private app:AppService,
    private alerts:AlertsService,){}
  @Effect() clearAlertAfterNavigation$ = this.action$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action:RouterNavigationAction) => action.payload.routerState),
    withLatestFrom(this.app.load(keepAlertAfterNav$)),
    filter(([,keepAfter]) => !keepAfter),
    map(() => Alerts.clear()));
  mapAlert$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(Alerts.send),
    map(action => action.alert),
    map(alert => Alerts.load(alert))));
}