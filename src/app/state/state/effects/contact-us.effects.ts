import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { AppError,AppService,AppRoute,route$ } from "@state";
import { QS_ContactUsMsg } from "../models";
import { QS_ContactUsState } from "../states";
import { QS_ContactUsActions as CONTACTUS } from "../actions";
import { QS_ContactUsService } from "../services";
import { ROUTER_NAVIGATION, RouterNavigationAction } from "@ngrx/router-store";

@Injectable()
export class QS_ContactUsEffects {
  constructor(
    private actions$:Actions,
    private contactUs:QS_ContactUsService,
    private app:AppService){}
  fetchQS_ContactUsMsgs$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CONTACTUS.fetch),
    mergeMap(() => this.contactUs.fetch().pipe(
      map((msgs:QS_ContactUsMsg[]) => CONTACTUS.load(msgs)),
      catchError(error => of(CONTACTUS.error(new AppError(error))))))));
  SendQS_ContactUs$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CONTACTUS.send),
    map(o => o.payload),
    mergeMap(o => this.contactUs.send(o).pipe(
      map((msg:QS_ContactUsMsg) => CONTACTUS.loadOne(msg)),
      catchError(error => of(CONTACTUS.error(new AppError(error))))))));
}