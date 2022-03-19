import { DocEntity,Status } from '../types';
import { PlayerId } from './player.model';

export enum InviteStatuses {
  S = "sent",
  A = "accepted",
  D = "declined",
  X = "cancelled",
  R = "revised",
  E = "expired",}
export interface Invite extends DocEntity {
  sender:PlayerId;
  recipient:string;
  type:"player-member"|"game"|"tourney"|"lesson";
  details?:{
    time:string;
    date:string|Date;
    location:string;};
  status:Status<InviteStatuses>[];}
export class Invite extends DocEntity {}