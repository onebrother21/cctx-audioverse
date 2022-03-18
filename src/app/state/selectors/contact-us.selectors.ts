import {createFeatureSelector, createSelector} from "@ngrx/store";
import { ContactUsState } from "../states";

export const contactUs$ = createFeatureSelector<ContactUsState>("contactUs");
export const contactUsMsg$ = createSelector(contactUs$,s => s.latest);
export const contactUsLoading$ = createSelector(contactUs$,s => s.loading);
export const contactUsErr$ = createSelector(contactUs$,s => s.error);