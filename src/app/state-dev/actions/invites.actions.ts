import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { Invite } from '../models';

export const InvitesActions = {
  fetch:createAction('@qs/invites/fetch/recent'),
  create:createAction('@qs/invites/create',(o:Invite) => ({payload:o})),
  update:createAction('@qs/invites/update',(o:Invite) => ({payload:o})),
  remove:createAction('@qs/invites/remove',(o:string) => ({payload:o})),
  select:createAction('@qs/invites/select',(o:string) => ({payload:o})),
  load:createAction('@qs/invites/load',(o:Invite[]) => ({payload:o})),
  loadOne:createAction('@qs/invites/load/one',(o:Invite) => ({payload:o})),
  unloadOne:createAction('@qs/invites/unload/one',(o:string) => ({payload:o})),
  error:createAction('@qs/invites/error',(o:AppError) => ({payload:o})),
};