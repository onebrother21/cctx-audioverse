import { AppEntity } from '@state';
export type User = AppEntity &
Record<"username"|"email"|"phn",string> &
Partial<Record<"img"|"pin"|"code"|"token"|"hometown"|"loc"|"token",string>> &
{
  name:{first:string;last:string},
  verified?:Date;
  lastLogin?:Date;
  lastActivity?:Date;
  action?:string;
};