import { CommonUtils as Utils,DocEntity } from '../common';
import { UserId } from './user.model';

export type ContactUsMsgObj = DocEntity & Record<"name"|"email"|"subject"|"message",string> & {user?:UserId;};
export interface ContactUsMsg extends ContactUsMsgObj {}
export class ContactUsMsg extends DocEntity {json(){return {...this};}}