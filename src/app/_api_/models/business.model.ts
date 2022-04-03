import { CommonUtils as Utils,AppEntity,Strings,MiscInfo,Status,Digit } from '../common';

export type BusinessPin = `${Digit}${Digit}${Digit}${Digit}`;
export type BusinessAppSettings = Partial<{
  canActivate:boolean;
  canShare:boolean;
  acceptInvites:boolean;
  maxSessions:number;
  willCollab:boolean;
}>;
export type BusinessAcct = {
  email:string;
  phn:`${number}`;
  username:string;
  name:string;
  yob:number;
  dob:Date;
  hometown:string;
  loc:string;
  settings:{lang:string;app:BusinessAppSettings;data?:MiscInfo;};
  role:"QS-GUEST"|"QS-USER"|"QS-PLAYER"|"QS-ADMIN"|"QS-SUPER";
  acct:"SLV1"|"GLD1"|"GLD2"|"PLT1";
  scopes:string[];
  status:Status<"new"|"locked"|"enabled"|"disabled"|"verified"|"offline"|"deleted">;
  activity?:{val:string;time:Date;};
};
export type BusinessAuthToken = {
  id:string;
  user:string;
  role:string;
  issuedAt:Date;
};
export type BusinessAuth = {
  next:"verify"|"register"|"register-ext"|"update-pin"|"reset";
  pin:BusinessPin;
  code:string;
  reset?:string|null;
  verification?:string|null;
  token?:string|null;
  tokenData?:BusinessAuthToken|null;
  reqtoken?:string|null;
  verified?:string|Date;
  lastlogin?:string|Date;
};
export type BusinessProfile = Partial<{
  img:string;
  motto:string;
  bio:string;
  mantles:string[];
  tastes:string[];
  uses:string[];
  socials:Strings;
}>;
export type BusinessObj = AppEntity & BusinessAcct & BusinessAuth & BusinessProfile;
export type BusinessPublic = Extract<keyof BusinessObj,
"qid"|"name"|"email"|"phn"|"username"|"hometown"|"loc"|"settings"|"role"|"acct"|"scopes"|"status"|"activity"|
"info"|"desc"|"meta"|"img"|"motto"|"bio"|"mantles"|"tastes"|"uses"|"socials"|
"next"|"reqtoken"|"token"|"verified"|"lastlogin"
>;
export type BusinessJson = Pick<BusinessObj,BusinessPublic> & {
  memberSince:string|Date;
  age:number|null;
};
export type BusinessId = BusinessJson["qid"];
export interface Business extends BusinessObj {}
export class Business extends AppEntity {
  toAge(){
    const dob = Utils.dateParser(this.dob||this.yob?.toString()||null);
    if(dob){
      const ageInMS = Date.now() - new Date(dob).getTime();
      const ageInYrs = ageInMS/(1000 * 60 * 60 * 24 * 365.25);
      const age = Number(ageInYrs.toFixed(0));
      console.log(dob,age);
      return age;
    }
    else return null;
  }
  generateAuthTkn(user:Business){
    this.tokenData = {
      id:Utils.longId(),
      issuedAt:new Date(),
      user:user.id,
      role:user.role,
    };
  };
  json(me?:boolean,auth?:boolean):BusinessJson {
    const json = {
      qid:this.qid,
      username:this.username,
      name:this.name,
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
    };
    const authinfo = {
      info:this.info,
      meta:this.meta,
      next:this.next,
      verified:this.verified,
      lastlogin:this.lastlogin,
      token:auth?this.tokenData?.id:null,
      //activity:this.activity,
      //reqtoken:this.reqtoken,
    };
    return {...json,...(me?mine:{}),...(auth?authinfo:{})} as BusinessJson; 
  }
}