import { createAction } from "@ngrx/store";
import { AppError,Layout } from "../models";

export const LayoutActions = {
  scrollTop:createAction("@qs/layout/scroll-to-top"),
  fetch:createAction("@qs/layout/fetch"),
  load:createAction("@qs/layout/load",(o:Layout) => ({payload:o})),
  toggleMobileNav:createAction("@qs/layout/mobile-nav/toggle",(o?:boolean) => ({payload:o})),
  error:createAction("@qs/layout/error",(o:AppError) => ({payload:o})),
};