import { createAction } from "@ngrx/store";
import { AppError,User } from "../models";

export const UsersActions = {
  fetch:createAction("@qs/users/fetch"),
  load:createAction("@qs/users/load",(o:User[]) => ({payload:o})),
  loadMore:createAction("@qs/users/load-more",(o:User[]) => ({payload:o})),
  select:createAction("@qs/users/select",(o:User) => ({payload:o})),
  deselect:createAction("@qs/users/deselect"),
  create:createAction("@qs/users/create",(o:User) => ({payload:o})),
  error:createAction("@qs/users/error",(o:AppError) => ({payload:o})),
};