import { CommonState,initializeCommonState } from "./common.state";
import { AuthJson } from "../models";

export interface AuthenticationState extends CommonState {status:AuthJson|null;}
export const initializeAuth = ():AuthenticationState => ({
  ...initializeCommonState(),
  status:null,
});