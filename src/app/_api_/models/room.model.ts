import { CommonUtils as Utils,DocEntity } from '../common';
import { UserId } from "./user.model";


export type RoomComment = {user:string;body:string;time:Date;};
export type RoomObj = DocEntity & {
  duration:number|string;
  users:UserId[];
  slug?:string;
  userCt?:number;
  img?:string;
  vid?:string;
  rank?:number;
  views?:number;
  comments?:RoomComment[];
  viewCt?:number;
  commentCt?:number;
};
export interface Room extends RoomObj {}
export class Room extends DocEntity {json(){return {...this};}}

export type Ad = {header:string;content:string;};