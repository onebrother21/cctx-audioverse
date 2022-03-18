import { Action, createReducer, on } from "@ngrx/store";
import { SessionsActions as SESSIONS } from "../actions";
import { Session } from '../models';
import { SessionsState,initializeSessions } from "../states";

const initialState = initializeSessions();
const reducer = createReducer(
  initialState,
  on(SESSIONS.fetch,s => ({...s,loading:true})),
  on(SESSIONS.load,(s,{payload:sessions}) => ({...s,items:sessions,loading:false})),
  on(SESSIONS.loadMore,(s,{payload:sessions}) => ({...s,items:[...(s.items||[]),...sessions],loading:false})),
  on(SESSIONS.select,(s,{payload:session}) => ({ ...s,selected:{item:session,id:session.id,i:getIndex(s.items as Session[],session)}})),
  on(SESSIONS.deselect,(s) => ({ ...s,selected:null})),
  on(SESSIONS.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function SessionsReducer(s:SessionsState|undefined,action:Action) {return reducer(s,action);}
const getIndex = <T extends Session>(a:T[],o:T) => a?a.findIndex(_a => o.id == _a.id):-1;