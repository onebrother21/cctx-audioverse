import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { QS_User } from "../models";

export const QS_MeActions = {
  active:createAction("@qs/me/active"),
  populate:createAction("@qs/me/populate"),
  load:createAction("@qs/me/load",(o:Partial<QS_User>) => ({payload:o})),
  error:createAction("@qs/me/error",(o:AppError) => ({payload:o})),
};