import {createSelector} from "@ngrx/store";
import {qs$} from "./app.selectors";

export const navigation$ = createSelector(qs$,s => s.navigation);
export const navigationLoading$ = createSelector(navigation$,s => s.loading);
export const navigationErr$ = createSelector(navigation$,s => s.error);
export const home$ = createSelector(navigation$,s => s.baseref);
export const pageTitle$ = createSelector(navigation$,s => s.page);
export const history$ = createSelector(navigation$,s => s.history);
export const requestedUrl$ = createSelector(navigation$,s => s.requested);