import { CommonUtils as Utils,DocEntity,Status } from '../common';
import { UserId } from './user.model';

export enum InviteStatuses {
  S = "sent",
  A = "accepted",
  D = "declined",
  X = "cancelled",
  R = "revised",
  E = "expired",
}
export type InviteObj = DocEntity & {
  sender:UserId;
  recipient:UserId;
  //type:"player-member"|"game"|"tourney"|"lesson";
  details?:{time:string;date:Date;loc:string;};
  status:Status<InviteStatuses>[];
};
export interface Invite extends InviteObj {}
export class Invite extends DocEntity {json(){return {...this};}}