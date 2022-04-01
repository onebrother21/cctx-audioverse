import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { Room } from "../models";
import { RoomsActions as ROOMS } from "../actions";
import { AppService,RoomsService } from "../services";

@Injectable()
export class RoomsEffects {
  constructor(
    private actions$:Actions,
    private rooms:RoomsService,
    private app:AppService){}
  fetchRooms$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROOMS.fetch),
    mergeMap(() => this.rooms.fetch().pipe(
      map(o => ROOMS.load(o)),
      catchError(error => of(ROOMS.error(error)))))));
  createRoom$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROOMS.create),
    map(o => o.payload),
    mergeMap(o => this.rooms.create(o).pipe(
      map((room:Room) => ROOMS.loadOne(room)),
      catchError(error => of(ROOMS.error(error)))))));
}