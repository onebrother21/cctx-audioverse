import { AppEntity } from "@state";
import { User } from "./app-user.model";

export type Session = AppEntity & {
  id:string;
  title:string;
  members:User[];
  duration:string|number;
};