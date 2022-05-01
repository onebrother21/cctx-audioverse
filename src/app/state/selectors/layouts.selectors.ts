import {createFeatureSelector, createSelector} from "@ngrx/store";
import { LayoutsState } from "../states";

export const layout$ = createFeatureSelector<LayoutsState>("layouts");
export const layoutLoading$ = createSelector(layout$,s => s.loading);
export const layoutErr$ = createSelector(layout$,s => s.error);

export const header$ = createSelector(layout$,s => s.selected?.item.header);
export const headerNav$ = createSelector(layout$,s => s.selected?.item.nav);
export const footer$ = createSelector(layout$,s => s.selected?.item.footer);
export const pagination$ = createSelector(layout$,s => s.selected?.item.pagination);
export const content$ = createSelector(layout$,s => s.selected?.item.content);
