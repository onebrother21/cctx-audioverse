import {createFeatureSelector, createSelector} from "@ngrx/store";
import { NavigationState } from "../states";

export const navigation$ = createFeatureSelector<NavigationState>("navigation");
export const navigationLoading$ = createSelector(navigation$,s => s.loading);
export const navigationErr$ = createSelector(navigation$,s => s.error);
export const pageTitle$ = createSelector(navigation$,s => s.page);
export const history$ = createSelector(navigation$,s => s.history);
export const requestedUrl$ = createSelector(navigation$,s => s.requested);