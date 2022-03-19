import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { Tourney } from '../models';

export const TourneysActions = {
  fetch:createAction('@qs/tourneys/fetch/recent'),
  create:createAction('@qs/tourneys/create',(o:Tourney) => ({payload:o})),
  update:createAction('@qs/tourneys/update',(o:Tourney) => ({payload:o})),
  remove:createAction('@qs/tourneys/remove',(o:string) => ({payload:o})),
  select:createAction('@qs/tourneys/select',(o:string) => ({payload:o})),
  load:createAction('@qs/tourneys/load/recent',(o:Tourney[]) => ({payload:o})),
  loadOne:createAction('@qs/tourneys/load',(o:Tourney) => ({payload:o})),
  unloadOne:createAction('@qs/tourneys/unload',(o:string) => ({payload:o})),
  error:createAction('@qs/tourneys/error',(o:AppError) => ({payload:o})),
};