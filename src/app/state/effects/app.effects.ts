import { Injectable } from '@angular/core';
import { Actions,createEffect,ofType,ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import { map,mergeMap,tap,filter } from 'rxjs/operators';

import { 
  LayoutsActions as LAYOUT,
  AuthenticationActions as AUTH,
  MeActions as ME,
} from '../actions';
import { AppError } from '../common';
import { AppService } from '../services';

@Injectable()
export class AppEffects {
  constructor(private actions$:Actions,private app:AppService){}
  OnInit$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    mergeMap(() => ([
      LAYOUT.refresh(),
      LAYOUT.fetchLatest(),
      ME.populate(),
    ]))));
  OnError$:Observable<Action> = createEffect(() => this.actions$.pipe(
    map(action => (action as any).payload),
    tap(e => {
      if(e && e instanceof Error){
        const e_ = e instanceof AppError?e:new AppError(e);
        e_.status && e_.status > 399?console.error(e_):null;
    }})),
    {dispatch:false});
  redirect401s$:Observable<Action> = createEffect(() => this.actions$.pipe(
    map(action => (action as any).payload),
    filter(e => e && e instanceof Error),
    filter(e => e.status === 401),
    tap(() => location.reload()),
    map(() => AUTH.signout())));
}