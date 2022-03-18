import { AppEntity } from "@state";
import { QS_User } from "./app-user.model";


export type QS_RoomComment = {user:QS_User;body:string;time:Date;};
export type QS_Room = AppEntity & {
  name:string;
  img?:string;
  vid?:string;
  rank?:number;
  views?:number;
  comments?:QS_RoomComment[];
  users?:QS_User[];
  viewCt?:number;
  commentCt?:number;
  userCt?:number;
};
export type QS_Ad = {type:"ad",header:string;content:string;};