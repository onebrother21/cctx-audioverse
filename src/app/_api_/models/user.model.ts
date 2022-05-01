import { CommonUtils as Utils,AppEntity,Strings,MiscInfo,Status,Digit } from '../common';

export type UserPin = `${Digit}${Digit}${Digit}${Digit}`;
export type UserAppSettings = Partial<{
  canActivate:boolean;
  canShare:boolean;
  acceptInvites:boolean;
  sendInvites:boolean;
  createSnippets:boolean;
  maxSessions:number;
}>;
export type UserMeta = Partial<{
  registered:string|Date;
  verified:string|Date;
  loggedout:string|Date;
  loggedin:string|Date;
  reset:string|Date;
}>;
export type UserAcct = {
  email:string;
  phn:`${number}-${number}-${number}`;
  username:string;
  name:{first:string;last:string;};
  yob:number;
  dob:Date;
  hometown:string;
  loc:string;
  settings:{
    lang:string;
    app:UserAppSettings;
    data?:MiscInfo;
  };
  role:"QS-GUEST"|"QS-USER"|"QS-PLAYER"|"QS-ADMIN"|"QS-SUPER";
  acct:"SLV1"|"GLD1"|"GLD2"|"PLT1";
  scopes:string[];
  status:Status<"new"|"locked"|"enabled"|"disabled"|"verified"|"offline"|"deleted">;
  activity?:Status<string>[];
};
export type UserAuthToken = {
  id:string;
  type:"req"|"api";
  user:string;
  role:string;
  issued:Date;
  expires:Date;
};
export type UserAuth = {
  next:"verify"|"register"|"register-ext"|"update-pin"|"reset";
  pin:UserPin;
  code:string;
  reset?:string|null;
  verification?:string|null;
  token?:UserAuthToken|null;
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
export type UserObj = AppEntity & UserAcct & UserAuth & UserProfile;
export type UserPublic = Extract<keyof UserObj,
"qid"|"email"|"phn"|"username"|"hometown"|"loc"|"settings"|"role"|"acct"|"scopes"|"status"|"activity"|
"info"|"desc"|"meta"|"img"|"motto"|"bio"|"mantles"|"tastes"|"uses"|"socials"|"yob"|
"next"|"verified"|"loggedin"|"reset"
>;
export type UserJson = Pick<UserObj,UserPublic> & UserMeta &{
  memberSince:string|Date;
  fullname:string;
  age:number|null;
  token?:{str:string|null;status:boolean};
};
export type UserId = UserJson["qid"];
export interface User extends UserObj {}
export class User extends AppEntity {
  toAge(){
    const dobFromYr = "1-1-"+this.yob?.toString();
    const dob = Utils.dateParser(this.dob||dobFromYr||null);
    if(dob){
      const yrInMS = 1000 * 60 * 60 * 24 * 365.25;
      const ageInMS = Date.now() - new Date(dob).getTime();
      const ageInYrs = ageInMS/yrInMS;
      const age = Number(ageInYrs.toFixed(0));
      return age;
    }
    else return null;
  }
  generateAuthTkn(auth?:boolean){
    const expiresIn = 1000 * 60 * 30;
    this.token = {
      type:auth?"api":"req",
      id:Utils.longId(),
      issued:new Date(),
      expires:new Date(Date.now() + expiresIn),
      user:this.id,
      role:this.role,
    };
  };
  clearAuthTkn(){this.token = null;}
  json(me?:boolean,auth?:boolean):UserJson {
    const json = {
      qid:this.qid,
      username:this.username,
      fullname:this.name.first?this.name.first+" "+this.name.last:"",
      age:this.toAge(),
      img:this.img,
      motto:this.motto,
      bio:this.bio,
      mantles:this.mantles,
      tastes:this.tastes,
      uses:this.uses,
      socials:this.socials,
      memberSince:this.created,
    };
    const mine = {
      id:this.id,
      email:this.email,
      phn:this.phn,
      hometown:this.hometown,
      settings:this.settings,
      role:this.role,
      acct:this.acct,
      scopes:this.scopes,
      status:this.status,
      loc:this.loc,
      yob:this.yob,
    };
    const authinfo = {
      info:this.info,
      meta:this.meta,
      next:this.next,
      token:{str:this.token?.id||null,status:!!auth},
    };
    return {...json,...(me?mine:{}),...(auth?authinfo:{})} as UserJson; 
  }
}