import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { User } from '../models';

export const AuthenticationActions = {
  signup:createAction("@qs/auth/signup",(o:Pick<User,"email"|"phn">) => ({payload:o})),
  signin:createAction("@qs/auth/signin",(o:Pick<User,"username">) => ({payload:o})),
  signout:createAction('@qs/auth/signout'),
  verify:createAction("@qs/auth/verify",(o:Pick<User,"email"|"phn"|"code">) => ({payload:o})),
  register:createAction("@qs/auth/register",(o:Partial<User>) => ({payload:o})),
  registerExt:createAction("@qs/auth/register-ext",(o:Partial<User>) => ({payload:o})),
  login:createAction("@qs/auth/login",(o:Pick<User,"username"|"pin">) => ({payload:o})),
  updatePin:createAction("@qs/auth/update-pin",(o:Pick<User,"username"|"pin">) => ({payload:o})),
  forgotName:createAction("@qs/auth/forgot-name",(o:any) => ({payload:o})),
  forgotPin:createAction("@qs/auth/forgot-pin",(o:Pick<User,"email"|"username">) => ({payload:o})),
  load:createAction("@qs/auth/load"),
  error:createAction("@qs/auth/error",(o:Error|AppError) => ({payload:o})),
};