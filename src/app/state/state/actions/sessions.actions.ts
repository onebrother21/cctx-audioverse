import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { QS_Session } from "../models";

export const QS_SessionsActions = {
  fetch:createAction("@qs/sessions/fetch"),
  load:createAction("@qs/sessions/load",(o:QS_Session[]) => ({payload:o})),
  loadMore:createAction("@qs/sessions/load-more",(o:QS_Session[]) => ({payload:o})),
  select:createAction("@qs/sessions/select",(o:QS_Session) => ({payload:o})),
  deselect:createAction("@qs/sessions/deselect"),
  create:createAction("@qs/sessions/create",(o:QS_Session) => ({payload:o})),
  error:createAction("@qs/sessions/error",(o:AppError) => ({payload:o})),
};