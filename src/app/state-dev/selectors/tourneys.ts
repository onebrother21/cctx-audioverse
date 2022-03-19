import {createFeatureSelector,createSelector} from '@ngrx/store';
import {HCLTourneysState} from '../states';

export const tourneysState$ = createFeatureSelector<HCLTourneysState>("tourneys");
export const tourneys$ = createSelector(tourneysState$,s => s.items);
export const selectedTourney$ = createSelector(tourneys$,(s,{i}) => s[i as number]);
export const recentTourneys$ = createSelector(tourneys$,s => s.filter(o => o.published));
export const featuredTourneys$ = createSelector(tourneys$,s => s.filter(o => o.featured == true));
export const errorInTourneys$ = createSelector(tourneysState$,s => s.error);