import {createSelector} from "@ngrx/store";
import {qs$} from "./app.selectors";

export const chat$ = createSelector(qs$,s => s.msgs);
export const chatMsgs$ = createSelector(chat$,s => s.latest);
export const chatLoading$ = createSelector(chat$,s => s.loading);
export const chatErr$ = createSelector(chat$,s => s.error);