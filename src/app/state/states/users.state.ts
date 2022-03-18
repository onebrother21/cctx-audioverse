import { CommonState,initializeCommonState,Entity } from "@state";
import { User } from "../models";

export interface UsersState extends CommonState<User & Entity> {latest:User[];}
export const initializeUsers = ():UsersState => ({
  ...initializeCommonState(false,true),
  latest:[],
});