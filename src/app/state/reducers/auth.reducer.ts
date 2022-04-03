import { Action, createReducer, on } from "@ngrx/store";
import { AuthenticationActions as AUTH } from "../actions";
import { AuthenticationState,initializeAuth } from "../states";
import { AppError } from "../common";

const initialState = initializeAuth();
const reducer = createReducer(
  initialState,
  on(AUTH.load,(s,{payload:token}) => ({...s,token,loading:false,error:null,exists:undefined})),
  on(AUTH.error,(s,{payload:error}) => ({ ...s,error:formetError(error),loading:false})),
  on(AUTH.exists,(s,{payload:exists}) => ({ ...s,exists,loading:false,error:null})),
  on(AUTH.lookup,s => ({...s,loading:true})),
  on(AUTH.signin,s => ({...s,loading:true})),
  on(AUTH.signup,s => ({...s,loading:true})),
  on(AUTH.verify,s => ({...s,loading:true})),
  on(AUTH.register,s => ({...s,loading:true})),
  on(AUTH.registerExt,s => ({...s,loading:true})),
  on(AUTH.updatePin,s => ({...s,loading:true})),
  on(AUTH.login,s => ({...s,loading:true})),
  on(AUTH.forgotName,s => ({...s,loading:true})),
  on(AUTH.forgotPin,s => ({...s,loading:true})),
);

export function AuthenticationReducer(s:AuthenticationState|undefined,action:Action) {return reducer(s,action);}
const formetError = (e:Error|AppError) => e instanceof AppError?e.json():e;