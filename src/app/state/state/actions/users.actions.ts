import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { QS_User } from "../models";

export const QS_UsersActions = {
  fetch:createAction("@qs/users/fetch"),
  load:createAction("@qs/users/load",(o:QS_User[]) => ({payload:o})),
  loadMore:createAction("@qs/users/load-more",(o:QS_User[]) => ({payload:o})),
  select:createAction("@qs/users/select",(o:QS_User) => ({payload:o})),
  deselect:createAction("@qs/users/deselect"),
  create:createAction("@qs/users/create",(o:QS_User) => ({payload:o})),
  error:createAction("@qs/users/error",(o:AppError) => ({payload:o})),
};