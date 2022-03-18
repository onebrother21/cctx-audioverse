import { AppEntity } from '@state';
export type ContactUsMsg = AppEntity & Record<"name"|"email"|"subject"|"message",string>;