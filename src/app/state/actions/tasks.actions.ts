import { createAction } from "@ngrx/store";
import { AppError } from "../common";
import { Task } from "../models";

export const TasksActions = {
  fetch:createAction("@qs/tasks/fetch"),
  fetchRecent:createAction('@qs/tasks/fetch/recent'),
  load:createAction("@qs/tasks/load",(o:Task[]) => ({payload:o})),
  loadOne:createAction("@qs/tasks/load-one",(o:Task) => ({payload:o})),
  unloadOne:createAction('@qs/tasks/unload',(o:string) => ({payload:o})),
  select:createAction('@qs/tasks/select',(o:string) => ({payload:o})),
  deselect:createAction("@qs/tasks/deselect"),
  create:createAction("@qs/tasks/create",(o:Task) => ({payload:o})),
  update:createAction('@qs/tasks/update',(o:Partial<Task>) => ({payload:o})),
  remove:createAction('@qs/tasks/remove',(o:string) => ({payload:o})),
  error:createAction("@qs/tasks/error",(o:Error|AppError) => ({payload:o})),
};