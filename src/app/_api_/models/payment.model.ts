import { CommonUtils as Utils,DocEntity,Status } from '../common';
import { UserId } from './user.model';

export type StripeCardDetails = {
  number:string;
  exp_month:string;
  exp_year:string;
  cvv:string;
  zip:string;
};
export type StripeTokenResp = {status:number,response:{id?:string;error?:Error}};

export enum PaymentStatuses {
  S = "sent",
  A = "accepted",
  D = "declined",
  X = "cancelled",
  R = "revised",
  E = "expired",
}
export type PaymentObj = DocEntity & {
  sender:UserId;
  recipient:UserId;
  //type:"player-member"|"game"|"tourney"|"lesson";
  details?:{time:string;date:Date;loc:string;};
  status:Status<PaymentStatuses>[];
  confirmation?:string;
};
export interface Payment extends PaymentObj {}
export class Payment extends DocEntity {json(){return {...this};}}