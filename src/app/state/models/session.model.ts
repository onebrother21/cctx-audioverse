import { AppEntity } from "@state";
import { UserId } from "./user.model";

export type Session = AppEntity & {
  id:string;
  title:string;
  members:UserId[];
  duration:string|number;
};