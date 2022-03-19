import { CommonState,initializeCommonState } from "./common.state";
import { ChatMsg } from "../models";

export interface ChatMessagesState extends CommonState<ChatMsg> {latest:ChatMsg[];}
export const initializeChatMessages = ():ChatMessagesState => ({
  ...initializeCommonState(false,true),
  latest:[],
});