import {createFeatureSelector,createSelector} from "@ngrx/store";
import {AppState} from "../states";

export const router$ = (s:AppState) => s.router;
export const route$ = createSelector(router$,s => s?s.state:{url:"/"});