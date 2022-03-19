import {createFeatureSelector, createSelector} from "@ngrx/store";
import { AuthenticationState } from "../states";

export const auth$ = createFeatureSelector<AuthenticationState>("auth");
export const authLoading$ = createSelector(auth$,s => s.loading);
export const authErr$ = createSelector(auth$,s => s.error);
export const isSignedIn$ = createSelector(auth$,s => s.status == "signedin");
export const isVerified$ = createSelector(auth$,s => s.status == "verified");
export const isAuthed$ = createSelector(auth$,s => s.status == "authok");

export const status$ = createSelector(auth$,s => s?s.status:null);
export const authid$ = createSelector(status$,s => s?s.handle:"");
export const token$ = createSelector(status$,s => s?s.token:"");
export const authed$ = createSelector(status$,s => s?s.status||s.token:false);
export const role$ = createSelector(status$,s => s?s.role:"HCL-GUEST");
export const verified$ = createSelector(status$,s => s?s.verified:null);