import { Injectable } from '@angular/core';
import { Actions,createEffect,ofType,ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import { map,mergeMap,tap,filter } from 'rxjs/operators';

import { 
  LayoutActions as LAYOUT,
  AuthenticationActions as AUTH,
  MeActions as ME,
} from '../actions';
import { AppService } from '../services';

@Injectable()
export class AppEffects {
  constructor(private actions$:Actions,private app:AppService){}
  OnInit$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    mergeMap(() => ([
      LAYOUT.fetch(),
      ME.populate(),
      //CONTENT.fetch(),
    ]))));
  OnError$:Observable<Action> = createEffect(() => this.actions$.pipe(
    filter((action:any) => action.error && action.error instanceof Error),
    tap(({error}) => console.error(error))),
    {dispatch:false});
  redirect401s$:Observable<Action> = createEffect(() => this.actions$.pipe(
    filter((action:any) => action.error && action.error instanceof Error),
    filter(({error}) => error.status === 401),
    tap(() => location.reload()),
    map(() => AUTH.signout())));
}