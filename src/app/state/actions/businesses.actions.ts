import { createAction } from "@ngrx/store";
import { AppError } from "../common";
import { Business,BusinessJson } from "../models";

export const BusinessesActions = {
  fetch:createAction("@qs/businesses/fetch"),
  fetchRecent:createAction('@qs/businesses/fetch/recent'),
  load:createAction("@qs/businesses/load",(o:BusinessJson[]) => ({payload:o})),
  loadOne:createAction("@qs/businesses/load-one",(o:BusinessJson) => ({payload:o})),
  unloadOne:createAction('@qs/businesses/unload',(o:string) => ({payload:o})),
  select:createAction('@qs/businesses/select',(o:string) => ({payload:o})),
  deselect:createAction("@qs/businesses/deselect"),
  create:createAction("@qs/businesses/create",(o:{businessName:string}) => ({payload:o})),
  update:createAction('@qs/businesses/update',(o:Partial<Business>) => ({payload:o})),
  remove:createAction('@qs/businesses/remove',(o:string) => ({payload:o})),
  error:createAction("@qs/businesses/error",(o:Error|AppError) => ({payload:o})),
};