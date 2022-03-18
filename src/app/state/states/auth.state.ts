import { CommonState,initializeCommonState } from "./common.state";
import { Entity } from "../models";

export interface AuthenticationState extends CommonState {status:any;}
export const initializeAuth = ():AuthenticationState => ({
  ...initializeCommonState(false,false),
  status:null,
});