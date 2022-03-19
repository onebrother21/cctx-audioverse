import { Injectable } from '@angular/core';
import { Actions,createEffect,ofType,ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action, Store,select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError,map,mergeMap,tap,withLatestFrom,filter,switchMap } from 'rxjs/operators';

import { AppError } from "../types";
import { HCLGamesActions as HCLGames,NavigationActions as Navigation } from '../actions';
import { HCLGamesService,AppService } from "../services";
import { HCLGame } from '../models';
import { HCLGamesState } from "../states";
import { games$ } from "../selectors";
import { AppError } from '@onebro/ob-common';

@Injectable()
export class HCLGamesEffects {
  constructor(
    private games:HCLGamesService,
    private action$:Actions,
    private app:AppService){}
  FetchGames$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLGames.fetch),
    mergeMap(() =>
      this.games.fetchRecent().pipe(
        map((games:HCLGame[]) => HCLGames.load(games)),
        catchError(error => of(HCLGames.error(new AppError(error))))))));
  CreateGame$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLGames.create),
    map(action => action.game),
    mergeMap(game =>
      this.games.create(game).pipe(
        map((game:HCLGame) => HCLGames.loadOne(game)),
        catchError(error => of(HCLGames.error(new AppError(error))))))));
  UpdateGame$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLGames.update),
    map(action => action.game),
    mergeMap(game =>
      this.games.update(game.id,game).pipe(
        map((game:HCLGame) => HCLGames.loadOne(game)),
        catchError(error => of(HCLGames.error(new AppError(error))))))));
  RemoveGame$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLGames.remove),
    map(action => action.id),
    mergeMap(id =>
      this.games.remove(id).pipe(
        map(deleted => HCLGames.unloadOne(deleted.id)),
        catchError(error => of(HCLGames.error(new AppError(error))))))));
  SelectGameOnNavigation$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(Navigation.updateHistory),
    map(action => action.route),
    filter(({url}) => url.indexOf('/games') > -1),
    withLatestFrom(this.app.load(games$)),
    filter(([{params}]) => params && params.id),
    filter(([{params},games]) => games.findIndex(o => o.id == params.id) < 0),
    map(([{url}]) => Navigation.pageNotFound(url))));
}