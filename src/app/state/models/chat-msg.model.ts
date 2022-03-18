import { AppEntity } from '@state';
export type ChatMsg = AppEntity & Record<"name"|"email"|"subject"|"message",string>;