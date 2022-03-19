import { CommonState,initializeCommonState } from "./common.state";
import { UserJson } from "../models";

export interface UsersState extends CommonState<UserJson> {latest:UserJson[];}
export const initializeUsers = ():UsersState => ({
  ...initializeCommonState(false,true),
  latest:[],
});