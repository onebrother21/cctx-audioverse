import { Injectable } from '@angular/core';
import { Actions,createEffect,ofType,ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action, Store,select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError,map,mergeMap,tap,withLatestFrom,filter,switchMap } from 'rxjs/operators';

import { AppError } from "../types";
import { HCLInvitesActions as HCLInvites,NavigationActions as Navigation } from '../actions';
import { HCLInvitesService,AppService } from "../services";
import { HCLInvite } from '../models';
import { HCLInvitesState } from "../states";
import { invites$ } from "../selectors";
import { AppError } from '@onebro/ob-common';

@Injectable()
export class HCLInvitesEffects {
  constructor(
    private invites:HCLInvitesService,
    private action$:Actions,
    private app:AppService){}
  FetchInvites$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLInvites.fetch),
    mergeMap(() =>
      this.invites.fetchRecent().pipe(
        map((invites:HCLInvite[]) => HCLInvites.load(invites)),
        catchError(error => of(HCLInvites.error(new AppError(error))))))));
  CreateInvite$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLInvites.create),
    map(action => action.invite),
    mergeMap(invite =>
      this.invites.create(invite).pipe(
        tap((invite:HCLInvite) => this.app.L.info(invite)),
        map((invite:HCLInvite) => HCLInvites.loadOne(invite)),
        catchError(error => of(HCLInvites.error(new AppError(error))))))));
  UpdateInvite$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLInvites.update),
    map(action => action.invite),
    mergeMap(invite =>
      this.invites.update(invite.id,invite).pipe(
        map((invite:HCLInvite) => HCLInvites.loadOne(invite)),
        catchError(error => of(HCLInvites.error(new AppError(error))))))));
  RemoveInvite$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(HCLInvites.remove),
    map(action => action.id),
    mergeMap(id =>
      this.invites.remove(id).pipe(
        map(deleted => HCLInvites.unloadOne(deleted.id)),
        catchError(error => of(HCLInvites.error(new AppError(error))))))));
  SelectInviteOnNavigation$:Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(Navigation.updateHistory),
    map(action => action.route),
    filter(({url}) => url.indexOf('/invites') > -1),
    withLatestFrom(this.app.load(invites$)),
    filter(([{params}]) => params && params.id),
    filter(([{params},invites]) => invites.findIndex(o => o.id == params.id) < 0),
    map(([{url}]) => Navigation.pageNotFound(url))));
}