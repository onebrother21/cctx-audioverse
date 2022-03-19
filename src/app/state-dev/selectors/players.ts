import {createFeatureSelector,createSelector} from '@ngrx/store';
import {HCLPlayersState} from '../states';

export const playersState$ = createFeatureSelector<HCLPlayersState>("players");
export const players$ = createSelector(playersState$,s => s.items);
export const selectedPlayer$ = createSelector(players$,(s,i:number) => s.items[i]);
export const recentPlayers$ = createSelector(players$,s => s.filter(o => o.memberSince));
export const errorInPlayers$ = createSelector(playersState$,s => s.error);