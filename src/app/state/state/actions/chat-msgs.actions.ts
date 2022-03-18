import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { QS_ChatMsg } from "../models";

export const QS_ChatMessagesActions = {
  fetch:createAction("@qs/chat-msgs/fetch"),
  load:createAction("@qs/chat-msgs/load",(o:QS_ChatMsg[]) => ({payload:o})),
  send:createAction("@qs/chat-msgs/send",(o:QS_ChatMsg) => ({payload:o})),
  loadOne:createAction("@qs/chat-msgs/load-one",(o:QS_ChatMsg) => ({payload:o})),
  error:createAction("@qs/chat-msgs/error",(o:AppError) => ({payload:o})),
};