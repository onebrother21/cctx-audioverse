import {createFeatureSelector,createSelector} from '@ngrx/store';
import {SearchState} from '../states';

export const search$ = createFeatureSelector<SearchState>("search");
export const query$ = createSelector(search$,s => s.query);
export const q$ = createSelector(query$,s => s.text);
export const results$ = createSelector(search$,s => s.results);