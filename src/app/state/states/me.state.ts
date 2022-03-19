import { CommonState,initializeCommonState } from "./common.state";
import { UserJson } from "../models";

export interface MeState extends CommonState,Partial<UserJson>{}
export const initializeMe = ():MeState => ({
  ...initializeCommonState(),
});