import { createAction } from "@ngrx/store";
import { AppError } from "../common";
import { User,UserJson } from '../models';

export const AuthenticationActions = {
  load:createAction("@qs/auth/load",(o?:Pick<UserJson,"token"|"username">) => ({payload:o})),
  error:createAction("@qs/auth/error",(o:Error|AppError) => ({payload:o})),
  lookup:createAction("@qs/auth/lookup",(o:Partial<UserJson>) => ({payload:o})),
  exists:createAction("@qs/auth/exists",(o:Record<string,boolean>) => ({payload:o})),
  signup:createAction("@qs/auth/signup",(o:Pick<User,"email"|"phn">) => ({payload:o})),
  signin:createAction("@qs/auth/signin",(o:Pick<User,"username">) => ({payload:o})),
  signout:createAction('@qs/auth/signout'),
  verify:createAction("@qs/auth/verify",(o:Pick<User,"code">) => ({payload:o})),
  register:createAction("@qs/auth/register",(o:Partial<User>) => ({payload:o})),
  registerExt:createAction("@qs/auth/register-ext",(o:Partial<User>) => ({payload:o})),
  login:createAction("@qs/auth/login",(o:Pick<User,"pin">) => ({payload:o})),
  logout:createAction("@qs/auth/logout"),
  updatePin:createAction("@qs/auth/update-pin",(o:Pick<User,"pin">) => ({payload:o})),
  forgotName:createAction("@qs/auth/forgot-name",(o:any) => ({payload:o})),
  forgotPin:createAction("@qs/auth/forgot-pin",(o:Pick<User,"email"|"username">) => ({payload:o})),
};