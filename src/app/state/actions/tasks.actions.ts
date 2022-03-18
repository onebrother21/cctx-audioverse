import { createAction } from "@ngrx/store";
import { AppError,Task } from "../models";

export const TasksActions = {
  fetch:createAction("@qs/tasks/fetch"),
  load:createAction("@qs/tasks/load",(o:Task[]) => ({payload:o})),
  loadMore:createAction("@qs/tasks/load-more",(o:Task[]) => ({payload:o})),
  select:createAction("@qs/tasks/select",(o:Task) => ({payload:o})),
  deselect:createAction("@qs/tasks/deselect"),
  create:createAction("@qs/tasks/create",(o:Task) => ({payload:o})),
  error:createAction("@qs/tasks/error",(o:AppError) => ({payload:o})),
};