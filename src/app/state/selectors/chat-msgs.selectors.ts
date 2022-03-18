import {createFeatureSelector, createSelector} from "@ngrx/store";
import { ChatMessagesState } from "../states";

export const chat$ = createFeatureSelector<ChatMessagesState>("msgs");
export const chatMsgs$ = createSelector(chat$,s => s.latest);
export const chatLoading$ = createSelector(chat$,s => s.loading);
export const chatErr$ = createSelector(chat$,s => s.error);