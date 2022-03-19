import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { Content } from '../models';

export const ContentActions = {
  fetch:createAction('@qs/content/fetch'),
  load:createAction('@qs/content/load',(o:Content) => ({payload:o})),
  error:createAction('@qs/content/error',(o:AppError) => ({payload:o})),
};