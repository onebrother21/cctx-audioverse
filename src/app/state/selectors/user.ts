import {createFeatureSelector,createSelector} from '@ngrx/store';
import {UserState} from '../__state/states';

export const user$ = createFeatureSelector<UserState>("user");
export const me$ = createSelector(user$,s => s?s.me:null);
export const username$ = createSelector(me$,s => s?s.username:null);
export const name$ = createSelector(me$,s => s?s.fullname:null);