import { Action, createReducer, on } from "@ngrx/store";
import { QS_SessionsActions as SESSIONS } from "../actions";
import { QS_Session } from '../models';
import { QS_SessionsState,initializeQS_Sessions } from "../states";

const initialState = initializeQS_Sessions();
const reducer = createReducer(
  initialState,
  on(SESSIONS.fetch,s => ({...s,loading:true})),
  on(SESSIONS.load,(s,{payload:sessions}) => ({...s,items:sessions,loading:false})),
  on(SESSIONS.loadMore,(s,{payload:sessions}) => ({...s,items:[...(s.items||[]),...sessions],loading:false})),
  on(SESSIONS.select,(s,{payload:session}) => ({ ...s,selected:{item:session,id:session.id,i:getIndex(s.items as QS_Session[],session)}})),
  on(SESSIONS.deselect,(s) => ({ ...s,selected:null})),
  on(SESSIONS.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function QS_SessionsReducer(s:QS_SessionsState|undefined,action:Action) {return reducer(s,action);}
const getIndex = <T extends QS_Session>(a:T[],o:T) => a?a.findIndex(_a => o.id == _a.id):-1;