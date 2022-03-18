import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { QS_ContactUsMsg } from "../models";

export const QS_ContactUsActions = {
  fetch:createAction("@qs/contact-us/fetch"),
  load:createAction("@qs/contact-us/load",(o:QS_ContactUsMsg[]) => ({payload:o})),
  send:createAction("@qs/contact-us/send",(o:QS_ContactUsMsg) => ({payload:o})),
  loadOne:createAction("@qs/contact-us/load-one",(o:QS_ContactUsMsg) => ({payload:o})),
  error:createAction("@qs/contact-us/error",(o:AppError) => ({payload:o})),
};