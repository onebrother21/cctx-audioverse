import {createFeatureSelector, createSelector} from "@ngrx/store";
import { PaymentsState } from "../states";

export const payments$ = createFeatureSelector<PaymentsState>("payments");
export const paymentsLoading$ = createSelector(payments$,s => s.loading);
export const paymentsErr$ = createSelector(payments$,s => s.error);
export const confirmation$ = createSelector(payments$,s => s.confirmation);