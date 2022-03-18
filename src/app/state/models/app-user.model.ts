import { AppEntity } from '@state';
export type User = AppEntity &
Record<"username"|"email",string> &
Partial<Record<"phn"|"img"|"pin"|"code"|"token"|"hometown"|"loc"|"token",string>> &
{
  name:{first:string;last:string};
  tastes?:string[];
  roles?:string[];
  uses?:string[];
  verified?:Date;
  lastLogin?:Date;
  lastActivity?:Date;
  action?:string;
};