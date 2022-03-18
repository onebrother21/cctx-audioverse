import { CommonState,initializeCommonState,Entity } from "@state";
import { QS_Session } from "../models";

export interface QS_SessionsState extends CommonState<QS_Session & Entity> {latest:QS_Session[];}
export const initializeQS_Sessions = ():QS_SessionsState => ({
  ...initializeCommonState(false,true),
  latest:[],
});
//export * from "./sessions-db";