import { createAction } from "@ngrx/store";
import { AppError } from "../common";
import { Layout } from "../models";

export const LayoutsActions = {
  refresh:createAction("@qs/layout/refresh"),
  fetch:createAction("@qs/layout/fetch"),
  fetchLatest:createAction("@qs/layout/fetch/latest"),
  scrollTop:createAction("@qs/layout/scroll-to-top"),
  load:createAction("@qs/layout/load",(o:Layout[]) => ({payload:o})),
  loadOne:createAction("@qs/layout/load-one",(o:Layout) => ({payload:o})),
  select:createAction('@qs/layout/select',(o:string) => ({payload:o})),
  toggleNav:createAction("@qs/layout/toggle-nav",(o?:boolean) => ({payload:o})),
  error:createAction("@qs/layout/error",(o:Error|AppError) => ({payload:o})),
};