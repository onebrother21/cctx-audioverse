import { AppEntity,Strings,MiscInfo } from '../types';

export type UserAppSettings = Partial<{
  canActivate:boolean;
  canShare:boolean;
  accpetInvites:boolean;
  maxSessions:number;
}>;
export type UserSettings = {settings:{lang:string;app:UserAppSettings;data?:MiscInfo;}};
export type UserConfig = Record<"username"|"email",string>;
export type UserOptConfig = Partial<Record<"phn"|"img"|"hometown"|"loc"|"motto"|"bio",string>>;
export type UserId = `qs-${string}`;
export type UserObj = AppEntity & UserConfig & UserOptConfig &  UserSettings & {
  name:{first:string;last:string;};
  dob:string|number;
  roles:string[];
  tastes:string[];
  uses:string[];
  social?:Strings;
};
export type UserMeta = {acct:"SLV1"|"GLD1"|"GLD2"|"PLT1";mates:string[];};
export type UserType = UserObj & UserMeta;
export type UserPublic = "username"|"email"|"hometown"|"settings"|"roles"|"tastes"|"uses"|"bio"|"motto"|"social"|"img"|"mates"|"acct";
export type UserJson = Pick<UserType,UserPublic> & {
  memberSince:string|Date;
  fullname?:string;
  age?:number;
};
export interface User extends UserType {}
export class User extends AppEntity {
  toAge(){return Number(this.dob||0);}
  json(me?:boolean):UserJson {
    const {
      username,email,name,hometown,settings,roles,tastes,uses,
      bio,motto,social,img,mates,created,acct
    } = this;
    return {
      username,email,
      fullname:name?name.first+" "+name.last:"",
      age:this.toAge(),
      memberSince:created,acct,
      img,hometown,bio,motto,settings,
      mates,social,roles,tastes,uses
    };
  }
}