import {createFeatureSelector, createSelector} from "@ngrx/store";
import { MeState } from "../states";

export const meState$ = createFeatureSelector<MeState>("me");
export const meLoading$ = createSelector(meState$,s => s.loading);
export const meErr$ = createSelector(meState$,s => s.error);