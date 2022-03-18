import { CommonState,initializeCommonState,Entity } from "@state";
import { QS_ChatMsg } from "../models";

export interface QS_ChatMessagesState extends CommonState<QS_ChatMsg & Entity> {latest:QS_ChatMsg[];}
export const initializeChatMessages = ():QS_ChatMessagesState => ({
  ...initializeCommonState(false,true),
  latest:[],
});