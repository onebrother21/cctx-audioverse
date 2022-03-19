import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { ContactUsMsg } from "../models";

export const ContactUsActions = {
  fetch:createAction("@qs/contact-us/fetch"),
  load:createAction("@qs/contact-us/load",(o:ContactUsMsg[]) => ({payload:o})),
  send:createAction("@qs/contact-us/send",(o:ContactUsMsg) => ({payload:o})),
  loadOne:createAction("@qs/contact-us/load-one",(o:ContactUsMsg) => ({payload:o})),
  error:createAction("@qs/contact-us/error",(o:AppError) => ({payload:o})),
};