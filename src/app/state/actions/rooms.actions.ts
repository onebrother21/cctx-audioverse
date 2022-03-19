import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { Room } from "../models";

export const RoomsActions = {
  fetch:createAction("@qs/rooms/fetch"),
  load:createAction("@qs/rooms/load",(o:Room[]) => ({payload:o})),
  loadMore:createAction("@qs/rooms/load-more",(o:Room[]) => ({payload:o})),
  select:createAction("@qs/rooms/select",(o:Room) => ({payload:o})),
  deselect:createAction("@qs/rooms/deselect"),
  create:createAction("@qs/rooms/create",(o:Room) => ({payload:o})),
  error:createAction("@qs/rooms/error",(o:AppError) => ({payload:o})),
};