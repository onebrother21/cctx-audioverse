import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { AppAlert } from '../models';

export const AlertsActions = {
  clear:createAction('@qs/alerts/clear'),
  send:createAction('@qs/alerts/send',(o:AppAlert) => ({payload:o})),
  confirm:createAction('@qs/alerts/confirm',(o:boolean) => ({payload:o})),
  load:createAction('@qs/alerts/load',(o:AppAlert) => ({payload:o})),
  error:createAction('@qs/alerts/error',(o:AppError) => ({payload:o})),
};