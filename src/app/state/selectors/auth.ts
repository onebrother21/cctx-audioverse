import {createFeatureSelector,createSelector} from '@ngrx/store';
import {AuthState} from '../states';

export const auth$ = createFeatureSelector<AuthState>("auth");
export const status$ = createSelector(auth$,s => s?s.status:null);
export const authid$ = createSelector(status$,s => s?s.handle:"");
export const token$ = createSelector(status$,s => s?s.token:"");
export const authed$ = createSelector(status$,s => s?s.status||s.token:false);
export const role$ = createSelector(status$,s => s?s.role:"HCL-GUEST");
export const verified$ = createSelector(status$,s => s?s.verified:null);