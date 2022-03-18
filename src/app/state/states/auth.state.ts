import { CommonState,initializeCommonState,Entity } from "@state";

export interface AuthenticationState extends CommonState {status:any;}
export const initializeAuth = ():AuthenticationState => ({
  ...initializeCommonState(false,false),
  status:null,
});