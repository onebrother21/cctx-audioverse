import {createFeatureSelector, createSelector} from "@ngrx/store";
import { AuthenticationState } from "../states";

export const auth$ = createFeatureSelector<AuthenticationState>("auth");
export const authLoading$ = createSelector(auth$,s => s.loading);
export const authErr$ = createSelector(auth$,s => s.error);
export const isAuthed$ = createSelector(auth$,s => !!(s.token && s.token.status));
export const userExists$ = createSelector(auth$,s => s.exists);