import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { ChatMsg } from "../models";

export const ChatMessagesActions = {
  fetch:createAction("@qs/msgs/fetch"),
  fetchRecent:createAction('@qs/msgs/fetch/recent'),
  load:createAction("@qs/msgs/load",(o:ChatMsg[]) => ({payload:o})),
  loadOne:createAction("@qs/msgs/load-one",(o:ChatMsg) => ({payload:o})),
  unloadOne:createAction('@qs/msgs/unload',(o:string) => ({payload:o})),
  select:createAction('@qs/msgs/select',(o:string) => ({payload:o})),
  deselect:createAction("@qs/msgs/deselect"),
  send:createAction("@qs/msgs/send",(o:ChatMsg) => ({payload:o})),
  error:createAction("@qs/msgs/error",(o:Error|AppError) => ({payload:o})),
};