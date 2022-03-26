import { CommonState,initializeCommonState } from "./common.state";

export interface AuthenticationState extends CommonState {}
export const initializeAuth = ():AuthenticationState => initializeCommonState();