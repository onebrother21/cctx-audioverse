import { Action, createReducer, on } from "@ngrx/store";
import { TasksActions as TASKS } from "../actions";
import { TasksState,initializeTasks } from "../states";
import { AppError } from "../common";

const initialState = initializeTasks();
const reducer = createReducer(
  initialState,
  on(TASKS.fetch,s => ({...s,loading:true})),
  on(TASKS.fetchRecent,s => ({...s,loading:true})),
  on(TASKS.create,s => ({...s,loading:true})),
  on(TASKS.update,s => ({...s,loading:true})),
  on(TASKS.load,(s,{payload:items}) => ({
    ...s,
    items,
    ids:items.map(o => o.id),
    loading:false,
    error:null})),
  on(TASKS.loadOne,(s,{payload:item}) => s.ids && !s.ids.indexOf(item.id)?
    {
      ...s,
      items:[...s.items||[],item],
      ids:[...s.ids,item.id],
      loading:false,
      error:null,
    }:(() => {
      const index = s.items.findIndex(o => o.id == item.id);
      const items = s.items.map((o,i) => i == index?item:o);
      return {...s,items,loading:false,error:null};})()),
  on(TASKS.unloadOne,(s,{payload:id}) => {
    const items = s.items.filter(o => o.id !== id);
    const ids = s.ids.filter(o => o !== id);
    return {...s,items,ids,loading:false,error:null};}),
  on(TASKS.select,(s,{payload:id}) => {
    const i = s.ids.findIndex(o => o == id);
    const selected = {id:s.ids[i],i,item:s.items[i]};
    return {...s,selected,error:null};
  }),
  on(TASKS.deselect,(s) => ({ ...s,selected:null})),
  on(TASKS.error,(s,{payload:error}) => ({ ...s,error:formetError(error),loading:false})),
);

export function TasksReducer(s:TasksState|undefined,action:Action) {return reducer(s,action);}
const formetError = (e:Error|AppError) => e instanceof AppError?e.json():e;