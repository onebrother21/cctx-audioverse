import {createFeatureSelector, createSelector} from "@ngrx/store";
import { MeState } from "../states";

export const meState$ = createFeatureSelector<MeState>("me");
export const userLoading$ = createSelector(meState$,s => s.loading);
export const userErr$ = createSelector(meState$,s => s.error);
export const me$ = createSelector(meState$,s => s.username||s.email);
/*
export const username$ = createSelector(me$,s => s?s.username:null);
export const name$ = createSelector(me$,s => s?s.fullname:null);
export const status$ = createSelector(me$,s => s.status);
export const token$ = createSelector(me$,s => s.token);
export const authed$ = createSelector(me$,s => s.status && s.token);
export const role$ = createSelector(me$,s => s.role);
export const verified$ = createSelector(me$,s => s.verified);
*/