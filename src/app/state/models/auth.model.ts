import { AppEntity,MiscInfo } from '../types';
import { longId } from '../utils';

export type AuthId = Record<"email"|"username"|"action",string>;
export type AuthCreds = Partial<AuthId> & Record<"pin"|"code",string>;
export type AuthRole = {role:"QS-GUEST"|"QS-USER"|"QS-PLAYER"|"QS-ADMIN"|"QS-SUPER";};
export type AuthConfig = AuthCreds & AuthId & AuthRole;
export type AuthObj = AppEntity & AuthCreds & AuthId & AuthRole & {
  scopes:string[];
  req?:string;
  reset?:string;
  verification?:string;
};
export type AuthMeta = {
  verified:string|Date;
  loggedin:string|Date;
  lastActivity:string|Date;
  info:MiscInfo;
};
export type AuthType = AuthObj & AuthMeta;
export type AuthJson = Pick<AuthType,"username"|"email"|"role"|"verified"|"lastActivity"> & {
  status:boolean;
  token:string|null;
};
export interface AuthAcct extends AuthType {}
export class AuthAcct extends AppEntity {
  json(auth?:boolean):AuthJson {
    const {username,email,role,verified,lastActivity} = this;
    return {
      username,email,role,verified,
      status:auth||false,
      token:auth?longId():null,
      lastActivity
    };
  }
}