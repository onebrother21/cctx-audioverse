import { CommonState,initializeCommonState } from "@state";
import { QS_User } from "../models";

export interface QS_MeState extends CommonState,Partial<QS_User>{}
export const initializeMe = ():QS_MeState => ({
  ...initializeCommonState(false,false),
});