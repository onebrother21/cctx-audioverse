import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { ChatMsg } from "../models";

export const ChatMessagesActions = {
  fetch:createAction("@qs/chat-msgs/fetch"),
  fetchRecent:createAction('@qs/chat-msgs/fetch/recent'),
  load:createAction("@qs/chat-msgs/load",(o:ChatMsg[]) => ({payload:o})),
  loadOne:createAction("@qs/chat-msgs/load-one",(o:ChatMsg) => ({payload:o})),
  unloadOne:createAction('@qs/chat-msgs/unload',(o:string) => ({payload:o})),
  select:createAction('@qs/chat-msgs/select',(o:string) => ({payload:o})),
  deselect:createAction("@qs/chat-msgs/deselect"),
  send:createAction("@qs/chat-msgs/send",(o:ChatMsg) => ({payload:o})),
  error:createAction("@qs/chat-msgs/error",(o:AppError) => ({payload:o})),
};