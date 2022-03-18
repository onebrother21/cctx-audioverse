import {createFeatureSelector, createSelector} from "@ngrx/store";
import { AuthenticationState } from "../states";

export const auth$ = createFeatureSelector<AuthenticationState>("auth");
export const authLoading$ = createSelector(auth$,s => s.loading);
export const authErr$ = createSelector(auth$,s => s.error);
export const isSignedIn$ = createSelector(auth$,s => s.status == "signedin");
export const isVerified$ = createSelector(auth$,s => s.status == "verified");
export const isAuthed$ = createSelector(auth$,s => s.status == "authok");