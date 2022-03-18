import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { AppError,AppService } from "@state";
import { Room } from "../models";
import { RoomsActions as ROOMS } from "../actions";
import { RoomsService } from "../services";

@Injectable()
export class RoomsEffects implements OnInitEffects {
  constructor(
    private actions$:Actions,
    private rooms:RoomsService,
    private app:AppService){}
  ngrxOnInitEffects():Action {return ROOMS.fetch();}
  fetchRooms$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROOMS.fetch),
    mergeMap(() => this.rooms.fetch().pipe(
      map((rooms:Room[]) => ROOMS.load(rooms)),
      catchError(error => of(ROOMS.error(new AppError(error))))))));
  createRoom$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROOMS.create),
    map(o => o.payload),
    mergeMap(o => this.rooms.send(o).pipe(
      map((room:Room) => ROOMS.loadMore([room])),
      catchError(error => of(ROOMS.error(new AppError(error))))))));
}