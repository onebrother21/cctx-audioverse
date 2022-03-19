import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { User } from "../models";

export const UsersActions = {
  fetch:createAction("@qs/users/fetch"),
  fetchOne:createAction('@qs/user/fetch',(o:string) => ({payload:o})),
  create:createAction("@qs/users/create",(o:User) => ({payload:o})),
  update:createAction('@qs/user/update',(o:Partial<User>) => ({payload:o})),
  remove:createAction('@qs/user/remove',(o:string) => ({payload:o})),
  load:createAction("@qs/users/load",(o:User[]) => ({payload:o})),
  loadMore:createAction("@qs/users/load-more",(o:User[]) => ({payload:o})),
  select:createAction("@qs/users/select",(o:User) => ({payload:o})),
  deselect:createAction("@qs/users/deselect"),
  error:createAction("@qs/users/error",(o:AppError) => ({payload:o})),
};