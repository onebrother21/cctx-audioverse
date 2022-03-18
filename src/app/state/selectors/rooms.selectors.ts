import {createFeatureSelector, createSelector} from "@ngrx/store";
import { RoomsState } from "../states";

export const roomsState$ = createFeatureSelector<RoomsState>("rooms");
export const rooms$ = createSelector(roomsState$,s => s.items);
export const selectedRoom$ = createSelector(roomsState$,s => s.selected);
export const roomsLoading$ = createSelector(roomsState$,s => s.loading);
export const roomsErr$ = createSelector(roomsState$,s => s.error);