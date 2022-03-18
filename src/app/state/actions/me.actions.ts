import { createAction } from "@ngrx/store";
import { AppError,User } from "../models";

export const MeActions = {
  active:createAction("@qs/me/active"),
  populate:createAction("@qs/me/populate"),
  load:createAction("@qs/me/load",(o:Partial<User>) => ({payload:o})),
  error:createAction("@qs/me/error",(o:AppError) => ({payload:o})),
};