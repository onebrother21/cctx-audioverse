import { CommonState,initializeCommonState } from "./common.state";
import { Entity } from "../models";
import { Session } from "../models";

export interface SessionsState extends CommonState<Session & Entity> {latest:Session[];}
export const initializeSessions = ():SessionsState => ({
  ...initializeCommonState(false,true),
  latest:[],
});