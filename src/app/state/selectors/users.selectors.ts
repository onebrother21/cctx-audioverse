import {createFeatureSelector, createSelector} from "@ngrx/store";
import { UsersState } from "../states";

export const usersState$ = createFeatureSelector<UsersState>("users");
export const usersLoading$ = createSelector(usersState$,s => s.loading);
export const usersErr$ = createSelector(usersState$,s => s.error);
export const users$ = createSelector(usersState$,s => s.items);
export const selectedUser$ = createSelector(usersState$,s => s.selected);
export const userExists$ = createSelector(usersState$,s => s.exists);