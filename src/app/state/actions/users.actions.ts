import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { User,UserJson } from "../models";

export const UsersActions = {
  fetch:createAction("@qs/users/fetch"),
  fetchRecent:createAction('@qs/users/fetch/recent'),
  load:createAction("@qs/users/load",(o:UserJson[]) => ({payload:o})),
  loadOne:createAction("@qs/users/load-one",(o:UserJson) => ({payload:o})),
  unloadOne:createAction('@qs/users/unload',(o:string) => ({payload:o})),
  select:createAction('@qs/users/select',(o:string) => ({payload:o})),
  deselect:createAction("@qs/users/deselect"),
  create:createAction("@qs/users/create",(o:User) => ({payload:o})),
  update:createAction('@qs/users/update',(o:Partial<User>) => ({payload:o})),
  remove:createAction('@qs/users/remove',(o:string) => ({payload:o})),
  error:createAction("@qs/users/error",(o:AppError) => ({payload:o})),
};