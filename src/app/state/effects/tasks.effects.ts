import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { AppError } from "../types";
import { Task } from "../models";
import { TasksActions as TASKS } from "../actions";
import { AppService,TasksService } from "../services";

@Injectable()
export class TasksEffects implements OnInitEffects {
  constructor(
    private actions$:Actions,
    private tasks:TasksService,
    private app:AppService){}
  ngrxOnInitEffects():Action {return TASKS.fetch();}
  fetchTasks$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(TASKS.fetch),
    mergeMap(() => this.tasks.fetch().pipe(
      map((tasks:Task[]) => TASKS.load(tasks)),
      catchError(error => of(TASKS.error(new AppError(error))))))));
  createTask$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(TASKS.create),
    map(o => o.payload),
    mergeMap(o => this.tasks.create(o).pipe(
      map((task:Task) => TASKS.loadOne(task)),
      catchError(error => of(TASKS.error(new AppError(error))))))));
}