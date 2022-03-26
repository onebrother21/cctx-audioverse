import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { Session } from "../models";

export const SessionsActions = {
  fetch:createAction("@qs/sessions/fetch"),
  fetchRecent:createAction('@qs/sessions/fetch/recent'),
  load:createAction("@qs/sessions/load",(o:Session[]) => ({payload:o})),
  loadOne:createAction("@qs/sessions/load-one",(o:Session) => ({payload:o})),
  unloadOne:createAction('@qs/sessions/unload',(o:string) => ({payload:o})),
  select:createAction('@qs/sessions/select',(o:string) => ({payload:o})),
  deselect:createAction("@qs/sessions/deselect"),
  create:createAction("@qs/sessions/create",(o:Session) => ({payload:o})),
  update:createAction('@qs/sessions/update',(o:Partial<Session>) => ({payload:o})),
  remove:createAction('@qs/sessions/remove',(o:string) => ({payload:o})),
  error:createAction("@qs/sessions/error",(o:Error|AppError) => ({payload:o})),
};