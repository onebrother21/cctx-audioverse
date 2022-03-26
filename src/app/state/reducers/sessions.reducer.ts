import { Action, createReducer, on } from "@ngrx/store";
import { SessionsActions as SESSIONS } from "../actions";
import { SessionsState,initializeSessions } from "../states";
import { AppError } from "../types";

const initialState = initializeSessions();
const reducer = createReducer(
  initialState,
  on(SESSIONS.fetch,s => ({...s,loading:true})),
  on(SESSIONS.fetchRecent,s => ({...s,loading:true})),
  on(SESSIONS.create,s => ({...s,loading:true})),
  on(SESSIONS.update,s => ({...s,loading:true})),
  on(SESSIONS.load,(s,{payload:items}) => ({
    ...s,
    items,
    ids:items.map(o => o.id),
    loading:false,
    error:null})),
  on(SESSIONS.loadOne,(s,{payload:item}) => s.ids && !s.ids.indexOf(item.id)?
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
  on(SESSIONS.unloadOne,(s,{payload:id}) => {
    const items = s.items.filter(o => o.id !== id);
    const ids = s.ids.filter(o => o !== id);
    return {...s,items,ids,loading:false,error:null};}),
  on(SESSIONS.select,(s,{payload:id}) => {
    const i = s.ids.findIndex(o => o == id);
    const selected = {id:s.ids[i],i,item:s.items[i]};
    return {...s,selected,error:null};
  }),
  on(SESSIONS.deselect,(s) => ({ ...s,selected:null})),
  on(SESSIONS.error,(s,{payload:error}) => ({ ...s,error:formetError(error),loading:false})),
);

export function SessionsReducer(s:SessionsState|undefined,action:Action) {return reducer(s,action);}
const formetError = (e:Error|AppError) => e instanceof AppError?e.json():e;