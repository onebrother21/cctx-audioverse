import { createAction } from "@ngrx/store";
import { AppError } from "../common";
import { Payment, StripeCardDetails } from '../models';

export const PaymentsActions = {
  load:createAction("@qs/payments/load",(o:Payment) => ({payload:o})),
  error:createAction("@qs/payments/error",(o:Error|AppError) => ({payload:o})),
  charge:createAction("@qs/payments/charge",(o:StripeCardDetails & {amount:number}) => ({payload:o})),
};