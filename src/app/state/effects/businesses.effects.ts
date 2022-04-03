import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { BusinessesActions as BUSINESSES } from "../actions";
import { AppService,BusinessesService } from "../services";

@Injectable()
export class BusinessesEffects {
  constructor(
    private actions$:Actions,
    private businesses:BusinessesService,
    private app:AppService){}
  fetchBusinesses$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(BUSINESSES.fetch),
    mergeMap(() => this.businesses.fetch().pipe(
      map(businesses => BUSINESSES.load(businesses)),
      catchError(error => of(BUSINESSES.error(error)))))));
  createBusiness$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(BUSINESSES.create),
    map(o => o.payload),
    mergeMap(o => this.businesses.create(o).pipe(
      map(business => BUSINESSES.loadOne(business)),
      catchError(error => of(BUSINESSES.error(error)))))));
}