import { CommonState,initializeCommonState } from "./common.state";

export interface AuthenticationState extends CommonState {token?:string|null;}
export const initializeAuth = ():AuthenticationState => initializeCommonState();