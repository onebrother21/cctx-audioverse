import { createAction } from "@ngrx/store";
import { AppError,User } from "../models";

export const AuthenticationActions = {
  signup:createAction("@qs/auth/signup",(o:{email:string;action:string}) => ({payload:o})),
  signin:createAction("@qs/auth/signin",(o:{username:string;action:string}) => ({payload:o})),
  verify:createAction("@qs/auth/verify",(o:{code:string;action:string}) => ({payload:o})),
  register:createAction("@qs/auth/register",(o:User) => ({payload:o})),
  registerExt:createAction("@qs/auth/register-ext",(o:any) => ({payload:o})),
  login:createAction("@qs/auth/login",(o:{pin:string;action:string}) => ({payload:o})),
  forgot:createAction("@qs/auth/forgot",(o:{email:string;action:string}) => ({payload:o})),
  updatePin:createAction("@qs/auth/updatePin",(o:{pin:string;action:string}) => ({payload:o})),
  update:createAction("@qs/auth/update",(o:Partial<User>) => ({payload:o})),
  load:createAction("@qs/auth/load",(o:string) => ({payload:o})),
  error:createAction("@qs/auth/error",(o:AppError) => ({payload:o})),
};