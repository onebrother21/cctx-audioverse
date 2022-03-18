import { createAction } from "@ngrx/store";
import { AppError } from  "@state";
import { QS_Layout } from "../models";

export const QS_LayoutActions = {
  scrollTop:createAction("@qs/layout/scroll-to-top"),
  fetch:createAction("@qs/layout/fetch"),
  load:createAction("@qs/layout/load",(o:QS_Layout) => ({payload:o})),
  toggleMobileNav:createAction("@qs/layout/mobile-nav/toggle",(o?:boolean) => ({payload:o})),
  error:createAction("@qs/layout/error",(o:AppError) => ({payload:o})),
};