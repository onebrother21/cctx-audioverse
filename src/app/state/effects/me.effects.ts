import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom,filter } from "rxjs/operators";

import { MeActions as ME,AuthenticationActions as AUTH } from "../actions";
import { AppService,MeService } from "../services";

@Injectable()
export class MeEffects {
  constructor(
    private actions$:Actions,
    private user:MeService,
    private app:AppService){}
  PopulateMe$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ME.populate),
    map(() => this.user.populate()),
    mergeMap(user => ([
      AUTH.load(user),
      ME.load(user||{}),
    ])),
    catchError(error => of(ME.error(error)))));
  SaveMe$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ME.load),
    tap(o => this.user.save(o.payload))),{dispatch:false});
}