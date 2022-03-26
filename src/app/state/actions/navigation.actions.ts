import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { AppRoute } from  "../models";

export const NavigationActions = {
  go:createAction("@qs/navigation/go",(o:AppRoute) => ({payload:o})),
  back:createAction("@qs/navigation/back",(o:AppRoute) => ({payload:o})),
  forward:createAction("@qs/navigation/forward",(o:AppRoute) => ({payload:o})),
  set:createAction("@qs/navigation/set",(o:AppRoute) => ({payload:o})),
  update:createAction("@qs/navigation/update",(o:{route:AppRoute;page:string}) => ({payload:o})),
  notFound:createAction("@qs/navigation/404",(o:string) => ({payload:o})),
  error:createAction("@qs/navigation/error",(o:Error|AppError) => ({payload:o})),
};
