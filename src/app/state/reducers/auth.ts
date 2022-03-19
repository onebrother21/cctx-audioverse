import { Action, createReducer, on } from '@ngrx/store';
import { AuthActions as Auth } from '../actions';
import { AuthStatus } from '../models';
import { AuthState,initializeAuth } from '../states';

const initialState = initializeAuth();
const reducer = createReducer(
  initialState,
  on(Auth.login,s => ({...s,loading:true})),
  on(Auth.register,s => ({...s,loading:true})),
  on(Auth.load,(s,{auth}) => ({...s,status:auth,loading:false,error:null})),
  on(Auth.unload,s => ({ ...s,...initialState})),
  on(Auth.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function AuthReducer(s:AuthState|undefined,action:Action) {return reducer(s,action);}