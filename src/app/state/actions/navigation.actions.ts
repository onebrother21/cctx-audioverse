import { createAction } from "@ngrx/store";
import { AppError } from "../common";

export const NavigationActions = {
  notFound:createAction("@qs/navigation/404",(o:string) => ({payload:o})),
  error:createAction("@qs/navigation/error",(o:Error|AppError) => ({payload:o})),
};
