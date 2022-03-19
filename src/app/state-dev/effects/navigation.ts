import { Injectable } from '@angular/core';
import { Actions, ofType,Effect, createEffect, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Store, select,Action } from '@ngrx/store';
import { 
  ROUTER_REQUEST,
  ROUTER_NAVIGATION,
  RouterNavigationAction,
  RouterRequestAction } from '@ngrx/router-store';
import { Observable,of } from 'rxjs';
import { map,tap,mergeMap} from 'rxjs/operators';

import { NavigationActions as Navigation } from '../actions';
import { route$ } from '../selectors';
import { AppService } from '../services';
import { Router } from '@angular/router';
import { AppError } from '@onebro/ob-common';

@Injectable()
export class NavigationEffects {
  constructor(
    private action$:Actions,
    private app:AppService,
    private router:Router){}
  @Effect() UpdateRequestedRoute$:Observable<Action> = this.action$.pipe(
    ofType(ROUTER_REQUEST),
    map((action:RouterRequestAction) => action.payload.routerState),
    //filter(({url}) => url.indexOf('/page/not/found') < 0),
    map(({url,root}) => ({...root,url})),
    map(({url,params,queryParams:query,data}) => Navigation.setRequested({url,params,query,data})));
  @Effect() UpdateNavigationHistory$:Observable<Action> = this.action$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action:RouterNavigationAction) => action.payload.routerState),
    mergeMap(() => this.app.load(route$)),
    map(route => Navigation.updateHistory(route)));
  PageNotFound$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(Navigation.pageNotFound),
    tap(({url}) => this.router.navigate(["/error/404",{queryParams:{url}}]))),
    {dispatch:false});
}