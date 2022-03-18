import { AppEntity } from "@state";
import { User } from "./app-user.model";


export type RoomComment = {user:string;body:string;time:Date;};
export type Room = AppEntity & {
  name:string;
  duration:number|string;
  users:string[];
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