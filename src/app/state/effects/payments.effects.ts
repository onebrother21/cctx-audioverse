import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of,withLatestFrom } from "rxjs";
import { mergeMap,map,tap,catchError,filter } from "rxjs/operators";

import {
  PaymentsActions as PAY,
  MeActions as ME,
  NavigationActions as NAV,
} from "../actions";
import { AppService,PaymentsService } from "../services";

@Injectable()
export class PaymentsEffects {
  constructor(
    private actions$:Actions,
    private payments:PaymentsService,
    private app:AppService,
  ){}
  Charge$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(PAY.charge),
    map(o => o.payload),
    mergeMap(q => this.payments.charge(q).pipe(
      map(results => PAY.load(results)),
      tap(() => this.app.go("/me")),
      catchError(error => of(PAY.error(error)))))));
}