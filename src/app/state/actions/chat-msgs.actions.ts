import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { ChatMsg } from "../models";

export const ChatMessagesActions = {
  fetch:createAction("@qs/chat-msgs/fetch"),
  load:createAction("@qs/chat-msgs/load",(o:ChatMsg[]) => ({payload:o})),
  send:createAction("@qs/chat-msgs/send",(o:ChatMsg) => ({payload:o})),
  loadOne:createAction("@qs/chat-msgs/load-one",(o:ChatMsg) => ({payload:o})),
  error:createAction("@qs/chat-msgs/error",(o:AppError) => ({payload:o})),
};