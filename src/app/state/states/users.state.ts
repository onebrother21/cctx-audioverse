import { CommonState,initializeCommonState } from "./common.state";
import { Entity } from "../models";
import { User } from "../models";

export interface UsersState extends CommonState<User & Entity> {latest:User[];}
export const initializeUsers = ():UsersState => ({
  ...initializeCommonState(false,true),
  latest:[],
});