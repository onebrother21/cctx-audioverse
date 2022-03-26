import { AppEntity,Strings,MiscInfo,Status } from '../types';
import * as AppUtils from '../utils';

export type Digit = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9";
export type Pin = `${Digit}${Digit}${Digit}${Digit}`;
export type UserAppSettings = Partial<{
  canActivate:boolean;
  canShare:boolean;
  acceptInvites:boolean;
  maxSessions:number;
  willCollab:boolean;
}>;
export type UserAcct = {
  qid:`qs-${string}`;
  email:string;
  phn:`${number}`;
  username:string;
  name:{first:string;last:string;};
  dob:Date;
  hometown:string;
  loc:string;
  settings:{lang:string;app:UserAppSettings;data?:MiscInfo;};
  role:"QS-GUEST"|"QS-USER"|"QS-PLAYER"|"QS-ADMIN"|"QS-SUPER";
  acct:"SLV1"|"GLD1"|"GLD2"|"PLT1";
  scopes:string[];
  status:Status<"new"|"locked"|"enabled"|"disabled"|"verified"|"offline"|"deleted">;
  activity?:{val:string;time:Date;};
};
export type UserAuth = {
  next:"verify"|"register"|"register-ext"|"update-pin"|"reset";
  pin:Pin;
  code:string;
  reset?:string|null;
  verification?:string|null;
  token?:string|null;
  reqtoken?:string|null;
  verified?:string|Date;
  lastlogin?:string|Date;
};
export type UserProfile = Partial<{
  img:string;
  motto:string;
  bio:string;
  mantles:string[];
  tastes:string[];
  uses:string[];
  socials:Strings;
}>;
export type UserType = AppEntity & UserAcct & UserAuth & UserProfile;
export type UserPublic = Extract<keyof UserType,
"qid"|"email"|"phn"|"username"|"hometown"|"loc"|"settings"|"role"|"acct"|"scopes"|"status"|"activity"|
"info"|"desc"|"meta"|"img"|"motto"|"bio"|"mantles"|"tastes"|"uses"|"socials"|
"next"|"reqtoken"|"token"|"verified"|"lastlogin"
>;
export type UserJson = Pick<UserType,UserPublic> & {
  memberSince:string|Date;
  fullname:string;
  age:number|null;
};
export type UserId = UserJson["qid"];
export interface User extends UserType {}
export class User extends AppEntity {
  toAge(){
    const dob = this.dob instanceof Date?this.dob:new Date(this.dob);
    const ageInMS = Date.now() - new Date(dob).getTime();
    const ageInYrs = ageInMS/(1000 * 60 * 60 * 24 * 365.25);
    const age = Number(ageInYrs.toFixed(0));
    console.log(age);
    return age;
  }
  json(me?:boolean,auth?:boolean):UserJson {
    console.log(this);
    return {
      qid:this.qid,
      email:this.email,
      phn:this.phn,
      username:this.username,
      fullname:this.name.first?this.name.first+" "+this.name.last:"",
      age:this.dob?this.toAge():null,
      hometown:this.hometown,
      settings:this.settings,
      role:this.role,
      acct:this.acct,
      scopes:this.scopes,
      status:this.status,
      loc:this.loc,
      next:this.next,
      verified:this.verified,
      memberSince:this.created,
      token:auth?AppUtils.longId():null,
      /*
      activity:this.activity,
      reqtoken:this.reqtoken,
      lastlogin:this.lastlogin,
      img:this.img,
      motto:this.motto,
      bio:this.bio,
      mantles:this.mantles,
      tastes:this.tastes,
      uses:this.uses,
      socials:this.socials,
      info:this.info,
      meta:this.meta,
      */
    };
  }
}