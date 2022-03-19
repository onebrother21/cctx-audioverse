import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { Game } from '../models';

export const GamesActions = {
  fetch:createAction('@qs/games/fetch/recent'),
  create:createAction('@qs/games/create',(o:Game) => ({payload:o})),
  update:createAction('@qs/games/update',(o:Game) => ({payload:o})),
  remove:createAction('@qs/games/remove',(o:string) => ({payload:o})),
  select:createAction('@qs/games/select',(o:string) => ({payload:o})),
  load:createAction('@qs/games/load',(o:Game[]) => ({payload:o})),
  loadOne:createAction('@qs/games/load/one',(o:Game) => ({payload:o})),
  unloadOne:createAction('@qs/games/unload/one',(o:string) => ({payload:o})),
  error:createAction('@qs/games/error',(o:AppError) => ({payload:o})),
};