import { AppEntity } from '../types';
import { UserId } from './user.model';

export type ContactUsMsg = AppEntity & Record<"name"|"email"|"subject"|"message",string> & {user?:UserId;};
