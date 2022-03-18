import {createSelector} from "@ngrx/store";
import {qs$} from "./app.selectors";

export const me$ = createSelector(qs$,s => s.me);
export const userLoading$ = createSelector(me$,s => s.loading);
export const userErr$ = createSelector(me$,s => s.error);