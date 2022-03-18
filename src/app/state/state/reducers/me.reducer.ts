import { Action, createReducer, on } from "@ngrx/store";
import { QS_MeActions as ME } from "../actions";
import { QS_MeState,initializeMe } from "../states";

const initialState = initializeMe();
const reducer = createReducer(
  initialState,
  on(ME.populate,s => ({...s,loading:true})),
  on(ME.load,(s,{payload:user}) => ({...s,...user,loading:false})),
  on(ME.active,s => ({...s,lastActivity:new Date(),loading:false})),
  on(ME.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function QS_MeReducer(s:QS_MeState|undefined,action:Action) {return reducer(s,action);}