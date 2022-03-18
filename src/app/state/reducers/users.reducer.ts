import { Action, createReducer, on } from "@ngrx/store";
import { UsersActions as SESSIONS } from "../actions";
import { User } from '../models';
import { UsersState,initializeUsers } from "../states";

const initialState = initializeUsers();
const reducer = createReducer(
  initialState,
  on(SESSIONS.fetch,s => ({...s,loading:true})),
  on(SESSIONS.load,(s,{payload:users}) => ({...s,items:users,loading:false})),
  on(SESSIONS.loadMore,(s,{payload:users}) => ({...s,items:[...(s.items||[]),...users],loading:false})),
  on(SESSIONS.select,(s,{payload:user}) => ({ ...s,selected:{item:user,id:user.id,i:getIndex(s.items as User[],user)}})),
  on(SESSIONS.deselect,(s) => ({ ...s,selected:null})),
  on(SESSIONS.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function UsersReducer(s:UsersState|undefined,action:Action) {return reducer(s,action);}
const getIndex = <T extends User>(a:T[],o:T) => a?a.findIndex(_a => o.id == _a.id):-1;