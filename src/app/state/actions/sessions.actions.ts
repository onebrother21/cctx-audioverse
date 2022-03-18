import { createAction } from "@ngrx/store";
import { AppError,Session } from "../models";

export const SessionsActions = {
  fetch:createAction("@qs/sessions/fetch"),
  load:createAction("@qs/sessions/load",(o:Session[]) => ({payload:o})),
  loadMore:createAction("@qs/sessions/load-more",(o:Session[]) => ({payload:o})),
  select:createAction("@qs/sessions/select",(o:Session) => ({payload:o})),
  deselect:createAction("@qs/sessions/deselect"),
  create:createAction("@qs/sessions/create",(o:Session) => ({payload:o})),
  error:createAction("@qs/sessions/error",(o:AppError) => ({payload:o})),
};