import { Injectable } from '@angular/core';
import { Actions,createEffect,ofType,ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action, Store,select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError,map,mergeMap,tap,withLatestFrom,filter,switchMap } from 'rxjs/operators';

import { AppError } from "../types";
import { HCLTourneysActions as HCLTourneys,NavigationActions as Navigation } from '../actions';
import { HCLTourneysService,AppService } from "../services";
import { HCLTourney,FeatureTag, } from '../models';
import { HCLTourneysState } from "../states";
import { tourneys$,tags$ } from "../selectors";
import { AppError } from '@onebro/ob-common';

@Injectable()
export class HCLTourneysEffects {
  constructor(
    private tourneys:HCLTourneysService,
    private action$:Actions,
    private app:AppService){}
  FetchTourneys$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLTourneys.fetch),
    withLatestFrom(this.app.select(tags$)),
    mergeMap(([,tags]) =>
      this.tourneys.fetchRecent().pipe(
        map(tourneys => tourneys.map(p => ({...p,promo:this.mapFeatureTags(p,tags)})) as HCLTourney[]),
        map(tourneys => HCLTourneys.load(tourneys)),
        catchError(error => of(HCLTourneys.error(new AppError(error))))))));
  CreateTourney$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLTourneys.create),
    map(action => action.tourney),
    mergeMap(tourney =>
      this.tourneys.create(tourney).pipe(
        map((tourney:HCLTourney) => HCLTourneys.loadOne(tourney)),
        catchError(error => of(HCLTourneys.error(new AppError(error))))))));
  UpdateTourney$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLTourneys.update),
    map(action => action.tourney),
    mergeMap(tourney =>
      this.tourneys.update(tourney.id,tourney).pipe(
        map((tourney:HCLTourney) => HCLTourneys.loadOne(tourney)),
        catchError(error => of(HCLTourneys.error(new AppError(error))))))));
  RemoveTourney$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLTourneys.remove),
    map(action => action.id),
    mergeMap(id =>
      this.tourneys.remove(id).pipe(
        map(deleted => HCLTourneys.unloadOne(deleted.id)),
        catchError((error:AppError) => of(HCLTourneys.error(error)))))));
  SelectTourneyOnNavigation$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(Navigation.updateHistory),
    map(action => action.route),
    filter(({url}) => url.indexOf('/tourneys') > -1),
    withLatestFrom(this.app.load(tourneys$)),
    filter(([{params}]) => params && params.slug),
    filter(([{params},tourneys]) => tourneys.findIndex(o => o.slug == params.slug) < 0),
    map(([{url}]) => Navigation.pageNotFound(url))));
  mapFeatureTags(tourney:HCLTourney,tags:FeatureTag[]){return tourney.promo.map(t => tags.find(_t => _t.title == t));}
}