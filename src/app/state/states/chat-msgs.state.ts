import { CommonStateWithEntities,initializeCommonStateWithEntities } from "./common.state";
import { ChatMsg } from "../models";

export interface ChatMessagesState extends CommonStateWithEntities<ChatMsg> {latest:ChatMsg[];}
export const initializeChatMessages = ():ChatMessagesState => ({
  ...initializeCommonStateWithEntities(),
  latest:[],
});