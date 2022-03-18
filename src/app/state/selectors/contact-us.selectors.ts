import {createSelector} from "@ngrx/store";
import {qs$} from "./app.selectors";

export const contactUs$ = createSelector(qs$,s => s.contactUs);
export const contactUsMsg$ = createSelector(contactUs$,s => s.latest);
export const contactUsLoading$ = createSelector(contactUs$,s => s.loading);
export const contactUsErr$ = createSelector(contactUs$,s => s.error);