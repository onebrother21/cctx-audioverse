import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { Player,PlayerJson } from '../models';

export const PlayersActions = {
  fetch:createAction('@qs/players/fetch'),
  update:createAction('@qs/players/update',(o:Partial<Player>) => ({payload:o})),
  load:createAction('@qs/players/load',(o:PlayerJson[]) => ({payload:o})),
  error:createAction('@qs/players/error',(o:AppError) => ({payload:o})),
};