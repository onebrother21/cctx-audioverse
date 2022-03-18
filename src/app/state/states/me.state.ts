import { CommonState,initializeCommonState } from "@state";
import { User } from "../models";

export interface MeState extends CommonState,Partial<User>{}
export const initializeMe = ():MeState => ({
  ...initializeCommonState(false,false),
});