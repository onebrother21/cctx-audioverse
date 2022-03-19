import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { ContactUsMsg } from "../models";

export const ContactUsActions = {
  fetch:createAction("@qs/contact-us/fetch"),
  fetchRecent:createAction('@qs/contact-us/fetch/recent'),
  load:createAction("@qs/contact-us/load",(o:ContactUsMsg[]) => ({payload:o})),
  loadOne:createAction("@qs/contact-us/load-one",(o:ContactUsMsg) => ({payload:o})),
  unloadOne:createAction('@qs/contact-us/unload',(o:string) => ({payload:o})),
  select:createAction('@qs/contact-us/select',(o:string) => ({payload:o})),
  deselect:createAction("@qs/contact-us/deselect"),
  send:createAction("@qs/contact-us/send",(o:ContactUsMsg) => ({payload:o})),
  error:createAction("@qs/contact-us/error",(o:AppError) => ({payload:o})),
};