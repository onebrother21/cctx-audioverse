import { Action, createReducer, on } from "@ngrx/store";
import { MeActions as ME } from "../actions";
import { MeState,initializeMe } from "../states";
import { AppError } from "../common";

const initialState = initializeMe();
const reducer = createReducer(
  initialState,
  on(ME.populate,s => ({...s,loading:true})),
  on(ME.load,(s,{payload:user}) => ({...s,user,loading:false})),
  on(ME.unload,s => initialState),
  //on(ME.active,s => ({...s,lastActivity:new Date(),loading:false})),
  on(ME.error,(s,{payload:error}) => ({ ...s,error:formetError(error),loading:false})),
);

export function MeReducer(s:MeState|undefined,action:Action) {return reducer(s,action);}
const formetError = (e:Error|AppError) => e instanceof AppError?e.json():e;