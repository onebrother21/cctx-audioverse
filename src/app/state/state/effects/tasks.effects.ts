import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { AppError,AppService } from "@state";
import { QS_Task } from "../models";
import { QS_TasksActions as TASKS } from "../actions";
import { QS_TasksService } from "../services";

@Injectable()
export class QS_TasksEffects implements OnInitEffects {
  constructor(
    private actions$:Actions,
    private tasks:QS_TasksService,
    private app:AppService){}
  ngrxOnInitEffects():Action {return TASKS.fetch();}
  fetchTasks$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(TASKS.fetch),
    mergeMap(() => this.tasks.fetch().pipe(
      map((tasks:QS_Task[]) => TASKS.load(tasks)),
      catchError(error => of(TASKS.error(new AppError(error))))))));
  createTask$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(TASKS.create),
    map(o => o.payload),
    mergeMap(o => this.tasks.send(o).pipe(
      map((task:QS_Task) => TASKS.loadMore([task])),
      catchError(error => of(TASKS.error(new AppError(error))))))));
}