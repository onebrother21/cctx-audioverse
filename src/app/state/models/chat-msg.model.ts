import { AppEntity } from '../types';
import { UserId } from './user.model';

export type ChatMsg = AppEntity & Record<"message",string> & {user:UserId;};