import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { Room } from "../models";

export const RoomsActions = {
  fetch:createAction("@qs/rooms/fetch"),
  fetchRecent:createAction('@qs/rooms/fetch/recent'),
  load:createAction("@qs/rooms/load",(o:Room[]) => ({payload:o})),
  loadOne:createAction("@qs/rooms/load-one",(o:Room) => ({payload:o})),
  unloadOne:createAction('@qs/rooms/unload',(o:string) => ({payload:o})),
  select:createAction('@qs/rooms/select',(o:string) => ({payload:o})),
  deselect:createAction("@qs/rooms/deselect"),
  create:createAction("@qs/rooms/create",(o:Room) => ({payload:o})),
  update:createAction('@qs/rooms/update',(o:Partial<Room>) => ({payload:o})),
  remove:createAction('@qs/rooms/remove',(o:string) => ({payload:o})),
  error:createAction("@qs/rooms/error",(o:Error|AppError) => ({payload:o})),
};