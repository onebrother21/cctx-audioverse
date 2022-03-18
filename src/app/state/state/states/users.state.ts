import { CommonState,initializeCommonState,Entity } from "@state";
import { QS_User } from "../models";

export interface QS_UsersState extends CommonState<QS_User & Entity> {latest:QS_User[];}
export const initializeUsers = ():QS_UsersState => ({
  ...initializeCommonState(false,true),
  latest:[],
});
//export * from "./users-db";