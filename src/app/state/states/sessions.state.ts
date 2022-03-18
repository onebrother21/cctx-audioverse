import { CommonState,initializeCommonState,Entity } from "@state";
import { Session } from "../models";

export interface SessionsState extends CommonState<Session & Entity> {latest:Session[];}
export const initializeSessions = ():SessionsState => ({
  ...initializeCommonState(false,true),
  latest:[],
});