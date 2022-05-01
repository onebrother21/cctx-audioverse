import { CommonState,initializeCommonState } from "./common.state";
import { UserJson } from "../models";
import { Nullable } from "../common";

export interface MeState extends CommonState {user:Nullable<Partial<UserJson>>;};
export const initializeMe = ():MeState => ({
  ...initializeCommonState(),
  user:null,
});