import { AppEntity } from "@state";
import { QS_User } from "./app-user.model";

export type QS_Session = AppEntity & {
  id:string;
  title:string;
  members:QS_User[];
  duration:string|number;
};