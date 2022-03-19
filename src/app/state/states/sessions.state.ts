import { CommonState,initializeCommonState } from "./common.state";
import { Session } from "../models";

export interface SessionsState extends CommonState<Session> {latest:Session[];}
export const initializeSessions = ():SessionsState => ({
  ...initializeCommonState(false,true),
  latest:[],
});