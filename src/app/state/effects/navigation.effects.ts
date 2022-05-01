import { Injectable } from '@angular/core';
import { Actions,ofType,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { NavigationActions as NAV } from '../actions';
import { AppService } from '../services';

@Injectable()
export class NavigationEffects {
  constructor(private actions$:Actions,private app:AppService){}
  PageNotFound$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(NAV.notFound),
    tap(o => this.app.go("/error",{queryParams:o.payload}))),{dispatch:false});
}