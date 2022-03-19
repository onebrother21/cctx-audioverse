import { Injectable } from '@angular/core';
import { Actions,createEffect,ofType,ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action, Store,select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError,map,mergeMap,tap,withLatestFrom,filter,switchMap } from 'rxjs/operators';

import { AppError } from "../types";
import { HCLLessonsActions as HCLLessons,NavigationActions as Navigation } from '../actions';
import { HCLLessonsService,AppService } from "../services";
import { HCLLesson } from '../models';
import { HCLLessonsState } from "../states";
import { lessons$ } from "../selectors";
import { AppError } from '@onebro/ob-common';

@Injectable()
export class HCLLessonsEffects {
  constructor(
    private lessons:HCLLessonsService,
    private action$:Actions,
    private app:AppService){}
  FetchLessons$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLLessons.fetch),
    mergeMap(() =>
      this.lessons.fetchRecent().pipe(
        map((lessons:HCLLesson[]) => HCLLessons.load(lessons)),
        catchError(error => of(HCLLessons.error(new AppError(error))))))));
  CreateLesson$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLLessons.create),
    map(action => action.lesson),
    mergeMap(lesson =>
      this.lessons.create(lesson).pipe(
        map((lesson:HCLLesson) => HCLLessons.loadOne(lesson)),
        catchError((error:AppError) => of(HCLLessons.error(error)))))));
  UpdateLesson$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLLessons.update),
    map(action => action.lesson),
    mergeMap(lesson =>
      this.lessons.update(lesson.id,lesson).pipe(
        map((lesson:HCLLesson) => HCLLessons.loadOne(lesson)),
        catchError((error:AppError) => of(HCLLessons.error(error)))))));
  RemoveLesson$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLLessons.remove),
    map(action => action.id),
    mergeMap(id =>
      this.lessons.remove(id).pipe(
        map(deleted => HCLLessons.unloadOne(deleted.id)),
        catchError((error:AppError) => of(HCLLessons.error(error)))))));
  SelectLessonOnNavigation$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(Navigation.updateHistory),
    map(action => action.route),
    filter(({url}) => url.indexOf('/lessons') > -1),
    withLatestFrom(this.app.load(lessons$)),
    filter(([{params}]) => params && params.id),
    filter(([{params},lessons]) => lessons.findIndex(o => o.id == params.id) < 0),
    map(([{url}]) => Navigation.pageNotFound(url))));
}