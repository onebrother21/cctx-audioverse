import {createFeatureSelector,createSelector} from '@ngrx/store';
import {HCLGamesState} from '../states';

export const gamesState$ = createFeatureSelector<HCLGamesState>("games");
export const games$ = createSelector(gamesState$,s => s.items);
export const game$ = createSelector(games$,(s,i:number) => s.items[i]);
export const recentGames$ = createSelector(games$,s => s.filter(o => o.published));
export const featuredGames$ = createSelector(games$,s => s.filter(o => o.featured == true));
export const errorInGames$ = createSelector(gamesState$,s => s.error);
