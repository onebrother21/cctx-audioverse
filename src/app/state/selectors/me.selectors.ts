import {createFeatureSelector, createSelector} from "@ngrx/store";
import { MeState } from "../states";

export const me$ = createFeatureSelector<MeState>("me");
export const userLoading$ = createSelector(me$,s => s.loading);
export const userErr$ = createSelector(me$,s => s.error);
export const username$ = createSelector(me$,s => s?s.username:null);
export const name$ = createSelector(me$,s => s?s.fullname:null);