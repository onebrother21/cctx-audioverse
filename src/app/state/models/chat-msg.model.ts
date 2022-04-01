import { DocEntity } from '../types';
import { UserId } from './user.model';

export type ChatMsgObj = DocEntity & Record<"message",string> & {user:UserId;};
export interface ChatMsg extends ChatMsgObj {}
export class ChatMsg extends DocEntity {}