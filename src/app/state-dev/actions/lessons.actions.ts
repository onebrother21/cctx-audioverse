import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { Lesson } from '../models';

export const LessonsActions = {
  fetch:createAction('@qs/lessons/fetch/recent'),
  create:createAction('@qs/lessons/create',(o:Lesson) => ({payload:o})),
  update:createAction('@qs/lessons/update',(o:Lesson) => ({payload:o})),
  remove:createAction('@qs/lessons/remove',(o:string) => ({payload:o})),
  select:createAction('@qs/lessons/select',(o:string) => ({payload:o})),
  load:createAction('@qs/lessons/load',(o:Lesson[]) => ({payload:o})),
  loadOne:createAction('@qs/lessons/load/one',(o:Lesson) => ({payload:o})),
  unloadOne:createAction('@qs/lessons/unload/one',(o:string) => ({payload:o})),
  error:createAction('@qs/lessons/error',(o:AppError) => ({payload:o})),
};