import {createSelector} from "@ngrx/store";
import {qs$} from "./app.selectors";

export const sessionsState$ = createSelector(qs$,s => s.sessions);
export const sessions$ = createSelector(sessionsState$,s => s.items);
export const selectedSession$ = createSelector(sessionsState$,s => s.selected);
export const sessionsLoading$ = createSelector(sessionsState$,s => s.loading);
export const sessionsErr$ = createSelector(sessionsState$,s => s.error);