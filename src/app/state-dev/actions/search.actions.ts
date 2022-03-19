import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { SearchQuery } from '../models';

export const SearchActions = {
  query:createAction('@qs/search/update',(o:SearchQuery) => ({payload:o})),
  load:createAction('@qs/search/load',(o:any[]) => ({payload:o})),
  clear:createAction('@qs/search/clear'),
  error:createAction('@qs/search/error',(o:AppError) => ({payload:o})),
};