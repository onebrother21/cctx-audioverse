import { Injectable } from '@angular/core';
import { Actions,createEffect,ofType } from '@ngrx/effects';
import { Action, Store,select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError,map,mergeMap,tap,withLatestFrom,filter,switchMap, merge } from 'rxjs/operators';

import { AppError } from "../types";
import { HCLPlayersActions as HCLPlayers,NavigationActions as Navigation } from '../actions';
import { HCLPlayersService,AppService } from "../services";
import { HCLPlayer } from '../models';
import { HCLPlayersState } from "../states";
import { players$ } from "../selectors";
import { AppError } from '@onebro/ob-common';

@Injectable()
export class HCLPlayersEffects {
  constructor(
    private players:HCLPlayersService,
    private action$:Actions,
    private app:AppService){}
  FetchPlayers$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLPlayers.fetch),
    mergeMap(() => this.players.fetchRecent().pipe(
      map(players => HCLPlayers.load(players)),
      catchError(error => of(HCLPlayers.error(new AppError(error))))))));
  UpdatePlayer$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLPlayers.update),
    map(action => action.updates),
    mergeMap(updates => this.players.update(updates.username,updates).pipe(
      withLatestFrom(this.app.load(players$)),
      mergeMap(([player,players]) => players.findIndex(p => p.username == player.username)}),
      map(([[player,players],i]) => players.map((o,i) => i == index?player:o)),
      map(players => HCLPlayers.load(players)),
      catchError(error => of(HCLPlayers.error(new AppError(error))))))));
  SelectPlayerOnNavigation$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(Navigation.updateHistory),
    map(action => action.route),
    filter(({url}) => url.indexOf('/players') > -1),
    withLatestFrom(this.app.load(players$)),
    filter(([{params}]) => params && params.id),
    filter(([{params},players]) => players.findIndex(o => o.id == params.id) < 0),
    map(([{url}]) => Navigation.pageNotFound(url))));
}