import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { TasksActions as TASKS } from "../actions";
import { AppService,TasksService } from "../services";

@Injectable()
export class TasksEffects {
  constructor(
    private actions$:Actions,
    private tasks:TasksService,
    private app:AppService){}
  fetchTasks$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(TASKS.fetch),
    mergeMap(() => this.tasks.fetch().pipe(
      map(tasks => TASKS.load(tasks)),
      catchError(error => of(TASKS.error(error)))))));
  createTask$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(TASKS.create),
    map(o => o.payload),
    mergeMap(o => this.tasks.create(o).pipe(
      map(task => TASKS.loadOne(task)),
      catchError(error => of(TASKS.error(error)))))));
}