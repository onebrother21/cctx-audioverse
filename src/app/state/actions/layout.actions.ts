import { createAction } from "@ngrx/store";
import { AppError } from "../common";
import { LayoutContent } from "../models";

export const LayoutActions = {
  refresh:createAction("@qs/layout/refresh"),
  fetch:createAction("@qs/layout/fetch"),
  scrollTop:createAction("@qs/layout/scroll-to-top"),
  load:createAction("@qs/layout/load",(o:LayoutContent) => ({payload:o})),
  toggleNav:createAction("@qs/layout/toggle-nav",(o?:boolean) => ({payload:o})),
  error:createAction("@qs/layout/error",(o:Error|AppError) => ({payload:o})),
};