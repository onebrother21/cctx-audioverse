import { CommonState,initializeCommonState } from "./common.state";
import { User } from "../models";

export interface MeState extends CommonState,Partial<User>{}
export const initializeMe = ():MeState => ({
  ...initializeCommonState(false,false),
});