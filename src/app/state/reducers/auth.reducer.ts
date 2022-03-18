import { Action, createReducer, on } from "@ngrx/store";
import { AuthenticationActions as AUTH } from "../actions";
import { AuthenticationState,initializeAuth } from "../states";

const initialState = initializeAuth();
const reducer = createReducer(
  initialState,
  on(AUTH.signin,s => ({...s,loading:true})),
  on(AUTH.signup,s => ({...s,loading:true})),
  on(AUTH.verify,s => ({...s,loading:true})),
  on(AUTH.register,s => ({...s,loading:true})),
  on(AUTH.registerExt,s => ({...s,loading:true})),
  on(AUTH.updatePin,s => ({...s,loading:true})),
  on(AUTH.login,s => ({...s,loading:true})),
  on(AUTH.forgot,s => ({...s,loading:true})),
  on(AUTH.load,(s,{payload:user})  => ({...s,auth:user,loading:false})),
  on(AUTH.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function AuthenticationReducer(s:AuthenticationState|undefined,action:Action) {return reducer(s,action);}