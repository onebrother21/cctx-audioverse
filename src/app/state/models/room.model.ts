import { AppEntity } from "@state";
import { User } from "./app-user.model";


export type RoomComment = {user:User;body:string;time:Date;};
export type Room = AppEntity & {
  name:string;
  img?:string;
  vid?:string;
  rank?:number;
  views?:number;
  comments?:RoomComment[];
  users?:User[];
  viewCt?:number;
  commentCt?:number;
  userCt?:number;
};
export type Ad = {type:"ad",header:string;content:string;};