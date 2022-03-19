import { createAction } from "@ngrx/store";
import { AppError } from "../types";
import { User,AuthId,AuthCreds,AuthJson } from '../models';

export const AuthenticationActions = {
  signup:createAction("@qs/auth/signup",(o:AuthId) => ({payload:o})),
  signin:createAction("@qs/auth/signin",(o:AuthId) => ({payload:o})),
  signout:createAction('@qs/auth/signout'),
  verify:createAction("@qs/auth/verify",(o:AuthCreds) => ({payload:o})),
  register:createAction("@qs/auth/register",(o:User) => ({payload:o})),
  registerExt:createAction("@qs/auth/register-ext",(o:any) => ({payload:o})),
  login:createAction("@qs/auth/login",(o:AuthCreds) => ({payload:o})),
  forgotName:createAction("@qs/auth/forgot-name",(o:any) => ({payload:o})),
  forgotPin:createAction("@qs/auth/forgot-pin",(o:AuthId) => ({payload:o})),
  updatePin:createAction("@qs/auth/update-pin",(o:AuthCreds) => ({payload:o})),
  update:createAction("@qs/auth/update",(o:Partial<User>) => ({payload:o})),
  load:createAction("@qs/auth/load",(o:AuthJson) => ({payload:o})),
  error:createAction("@qs/auth/error",(o:AppError) => ({payload:o})),
};