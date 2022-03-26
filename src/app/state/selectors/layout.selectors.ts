import {createFeatureSelector, createSelector} from "@ngrx/store";
import { LayoutState } from "../states";

export const layout$ = createFeatureSelector<LayoutState>("layout");
export const layoutLoading$ = createSelector(layout$,s => s.loading);
export const layoutErr$ = createSelector(layout$,s => s.error);

export const header$ = createSelector(layout$,s => s.header);
export const headerNav$ = createSelector(layout$,s => s.nav);
export const footer$ = createSelector(layout$,s => s.footer);
export const pagination$ = createSelector(layout$,s => s.pagination);
export const copyright$ = createSelector(footer$,s => s.copy);
