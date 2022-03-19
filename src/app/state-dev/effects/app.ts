import { Injectable } from '@angular/core';
import { Actions,createEffect,ofType,ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import { map,mergeMap,tap,filter } from 'rxjs/operators';

import { 
  LayoutActions as Layout,
  AuthActions as Auth,
  UserActions as User,
  HCLContentActions as HCLContent,
 } from '../actions';
import { AppService } from '../services';

@Injectable()
export class CoreAppEffects {
  constructor(private action$:Actions,private app:AppService){}
  OnInit$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    mergeMap(() => ([
      Layout.fetch(),
      User.populate(),
      HCLContent.fetch(),
    ]))));
  OnError$:Observable<Action> = createEffect(() => this.action$.pipe(
    filter((action:any) => action.error && action.error instanceof Error),
    tap(({error}) => console.error(error))),
    {dispatch:false});
  redirect401s$:Observable<Action> = createEffect(() => this.action$.pipe(
    filter((action:any) => action.error && action.error instanceof Error),
    filter(({error}) => error.status === 401),
    tap(() => location.reload(true)),
    map(() => Auth.logout())));
}