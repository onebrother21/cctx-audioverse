import { AppEntity } from "../types";
import { UserId } from "./user.model";


export type RoomComment = {user:string;body:string;time:Date;};
export type Room = AppEntity & {
  name:string;
  duration:number|string;
  users:UserId[];
  userCt?:number;
  img?:string;
  vid?:string;
  rank?:number;
  views?:number;
  comments?:RoomComment[];
  viewCt?:number;
  commentCt?:number;
};
export type Ad = {header:string;content:string;};