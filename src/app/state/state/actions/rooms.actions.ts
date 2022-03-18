import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { QS_Room } from "../models";

export const QS_RoomsActions = {
  fetch:createAction("@qs/rooms/fetch"),
  load:createAction("@qs/rooms/load",(o:QS_Room[]) => ({payload:o})),
  loadMore:createAction("@qs/rooms/load-more",(o:QS_Room[]) => ({payload:o})),
  select:createAction("@qs/rooms/select",(o:QS_Room) => ({payload:o})),
  deselect:createAction("@qs/rooms/deselect"),
  create:createAction("@qs/rooms/create",(o:QS_Room) => ({payload:o})),
  error:createAction("@qs/rooms/error",(o:AppError) => ({payload:o})),
};