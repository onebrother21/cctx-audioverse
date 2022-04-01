import {createFeatureSelector, createSelector} from "@ngrx/store";
import { BusinessesState } from "../states";

export const businessesState$ = createFeatureSelector<BusinessesState>("businesses");
export const businesses$ = createSelector(businessesState$,s => s.items);
export const selectedBusiness$ = createSelector(businessesState$,s => s.selected);
export const businessesLoading$ = createSelector(businessesState$,s => s.loading);
export const businessesErr$ = createSelector(businessesState$,s => s.error);