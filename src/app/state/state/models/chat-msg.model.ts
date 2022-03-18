import { AppEntity } from '@state';
export type QS_ChatMsg = AppEntity & Record<"name"|"email"|"subject"|"message",string>;