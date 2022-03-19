import { Action, createReducer, on } from '@ngrx/store';
import { UserActions as User } from '../actions';
import { AppUser } from '../models';
import { UserState,initializeUser } from '../states';

const initialState = initializeUser();
const reducer = createReducer(
  initialState,
  on(User.populate,s => ({...s,loading:true})),
  on(User.load,(s,{user:me}) => ({ ...s,me,loading:false})),
  on(User.unload,s => ({...s,...initialState})),
  on(User.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function UserReducer(s:UserState|undefined,action:Action) {return reducer(s,action);}