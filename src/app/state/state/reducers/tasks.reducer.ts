import { Action, createReducer, on } from "@ngrx/store";
import { QS_TasksActions as TASKS } from "../actions";
import { QS_Task } from '../models';
import { QS_TasksState,initializeTasks } from "../states";

const initialState = initializeTasks();
const reducer = createReducer(
  initialState,
  on(TASKS.fetch,s => ({...s,loading:true})),
  on(TASKS.load,(s,{payload:tasks}) => ({...s,items:tasks,loading:false})),
  on(TASKS.loadMore,(s,{payload:tasks}) => ({...s,items:[...(s.items||[]),...tasks],loading:false})),
  on(TASKS.select,(s,{payload:task}) => ({ ...s,selected:{item:task,id:task.id,i:getIndex(s.items as QS_Task[],task)}})),
  on(TASKS.deselect,(s) => ({ ...s,selected:null})),
  on(TASKS.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function QS_TasksReducer(s:QS_TasksState|undefined,action:Action) {return reducer(s,action);}
const getIndex = <T extends QS_Task>(a:T[],o:T) => a?a.findIndex(_a => o.id == _a.id):-1;