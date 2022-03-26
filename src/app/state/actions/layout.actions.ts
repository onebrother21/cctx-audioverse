import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { Layout } from "../models";

export const LayoutActions = {
  scrollTop:createAction("@qs/layout/scroll-to-top"),
  fetch:createAction("@qs/layout/fetch"),
  load:createAction("@qs/layout/load",(o:Layout) => ({payload:o})),
  toggleNav:createAction("@qs/layout/toggle-nav",(o?:boolean) => ({payload:o})),
  error:createAction("@qs/layout/error",(o:Error|AppError) => ({payload:o})),
};