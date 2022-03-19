import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import { mergeMap,map,catchError } from 'rxjs/operators';

import { AppError } from "../types";
import { HCLContent } from '../models';
import { HCLContentActions as Content } from '../actions';
import { HCLContentService, AppService } from "../services";
import { AppError } from '@onebro/ob-common';

@Injectable()
export class HCLContentEffects {
  constructor(
    private action$:Actions,
    private app:AppService,
    private content:HCLContentService){}
  FetchContent$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(Content.fetch),
    mergeMap(() =>
      this.content.fetch().pipe(
        map((content:HCLContent) => Content.load(content)),
        catchError(error => of(Content.error(new AppError(error))))))));
}