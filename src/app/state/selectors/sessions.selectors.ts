import {createFeatureSelector, createSelector} from "@ngrx/store";
import { SessionsState } from "../states";

export const sessionsState$ = createFeatureSelector<SessionsState>("sessions");
export const sessions$ = createSelector(sessionsState$,s => s.items);
export const selectedSession$ = createSelector(sessionsState$,s => s.selected);
export const sessionsLoading$ = createSelector(sessionsState$,s => s.loading);
export const sessionsErr$ = createSelector(sessionsState$,s => s.error);