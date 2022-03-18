import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { QS_Task } from "../models";

export const QS_TasksActions = {
  fetch:createAction("@qs/tasks/fetch"),
  load:createAction("@qs/tasks/load",(o:QS_Task[]) => ({payload:o})),
  loadMore:createAction("@qs/tasks/load-more",(o:QS_Task[]) => ({payload:o})),
  select:createAction("@qs/tasks/select",(o:QS_Task) => ({payload:o})),
  deselect:createAction("@qs/tasks/deselect"),
  create:createAction("@qs/tasks/create",(o:QS_Task) => ({payload:o})),
  error:createAction("@qs/tasks/error",(o:AppError) => ({payload:o})),
};