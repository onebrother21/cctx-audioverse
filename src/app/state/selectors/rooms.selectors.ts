import {createSelector} from "@ngrx/store";
import {qs$} from "./app.selectors";

export const roomsState$ = createSelector(qs$,s => s.rooms);
export const rooms$ = createSelector(roomsState$,s => s.items);
export const selectedRoom$ = createSelector(roomsState$,s => s.selected);
export const roomsLoading$ = createSelector(roomsState$,s => s.loading);
export const roomsErr$ = createSelector(roomsState$,s => s.error);