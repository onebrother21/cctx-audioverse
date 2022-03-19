import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType,ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import { tap,mergeMap,map,catchError,filter,distinctUntilChanged,debounceTime } from 'rxjs/operators';

import { AppError } from "../types";
import { SearchActions as Search } from '../actions';
import { SearchService,AppService } from "../services";
import { SearchState } from '../states';
import { AppError } from '@onebro/ob-common';

@Injectable()
export class SearchEffects {
  constructor(
    private search:SearchService,
    private action$:Actions,
    private app:AppService){}
  SearchQuery$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(Search.query),
    debounceTime(300),
    //filter(({query:{text}}) => !!text),
    distinctUntilChanged(),
    mergeMap(({query}) => {
      if(!query.text) return of(Search.load([]));
      else return this.search.go(query).pipe(
        map(results => Search.load(results)),
        catchError(error => of(Search.error(new AppError(error)))));
      })));
}