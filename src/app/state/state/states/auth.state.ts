import { CommonState,initializeCommonState,Entity } from "@state";

export interface QS_AuthenticationState extends CommonState {status:any;}
export const initializeAuth = ():QS_AuthenticationState => ({
  ...initializeCommonState(false,false),
  status:null,
});