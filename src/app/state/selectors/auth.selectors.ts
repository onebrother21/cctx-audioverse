import {createFeatureSelector, createSelector} from "@ngrx/store";
import { AuthenticationState } from "../states";

export const auth$ = createFeatureSelector<AuthenticationState>("auth");
export const authLoading$ = createSelector(auth$,s => s.loading);
export const authErr$ = createSelector(auth$,s => s.error);

export const status$ = createSelector(auth$,s => s?s.status:null);
export const authid$ = createSelector(status$,s => s?s.username:"");
export const token$ = createSelector(status$,s => s?s.token:"");
export const authed$ = createSelector(status$,s => s?s.status||s.token:false);
export const role$ = createSelector(status$,s => s?s.role:"QS-GUEST");
export const verified$ = createSelector(status$,s => s?s.verified:null);