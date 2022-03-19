import { Action, createReducer, on } from "@ngrx/store";
import { UsersActions as USERS } from "../actions";
import { UsersState,initializeUsers } from "../states";

const initialState = initializeUsers();
const reducer = createReducer(
  initialState,
  on(USERS.fetch,s => ({...s,loading:true})),
  on(USERS.fetchRecent,s => ({...s,loading:true})),
  on(USERS.send,s => ({...s,loading:true})),
  on(USERS.load,(s,{payload:items}) => ({
    ...s,
    items,
    ids:items.map(o => o.username),
    loading:false,
    error:null})),
  on(USERS.loadOne,(s,{payload:item}) => s.ids && !s.ids.indexOf(item.username)?
    {
      ...s,
      items:[...s.items||[],item],
      ids:[...s.ids,item.username],
      loading:false,
      error:null,
    }:(() => {
      const index = s.items.findIndex(o => o.username == item.username);
      const items = s.items.map((o,i) => i == index?item:o);
      return {...s,items,loading:false,error:null};})()),
  on(USERS.unloadOne,(s,{payload:id}) => {
    const items = s.items.filter(o => o.username !== id);
    const ids = s.ids.filter(o => o !== id);
    return {...s,items,ids,loading:false,error:null};}),
  on(USERS.select,(s,{payload:id}) => {
    const i = s.ids.findIndex(o => o == id);
    const selected = {id:s.ids[i],i,item:s.items[i]};
    return {...s,selected,error:null};
  }),
  on(USERS.deselect,(s) => ({ ...s,selected:null})),
  on(USERS.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function UsersReducer(s:UsersState|undefined,action:Action) {return reducer(s,action);}