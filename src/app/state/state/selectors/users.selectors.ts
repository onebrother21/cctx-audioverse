import {createSelector} from "@ngrx/store";
import {qs$} from "./app.selectors";

export const usersState$ = createSelector(qs$,s => s.users);
export const users$ = createSelector(usersState$,s => s.items);
export const selectedUser$ = createSelector(usersState$,s => s.selected);
export const usersLoading$ = createSelector(usersState$,s => s.loading);
export const usersErr$ = createSelector(usersState$,s => s.error);