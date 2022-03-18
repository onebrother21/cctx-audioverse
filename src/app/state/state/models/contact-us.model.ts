import { AppEntity } from '@state';
export type QS_ContactUsMsg = AppEntity & Record<"name"|"email"|"subject"|"message",string>;