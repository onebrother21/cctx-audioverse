import { Action, createReducer, on } from "@ngrx/store";
import { BusinessesActions as BUSINESSES } from "../actions";
import { BusinessesState,initializeBusinesses } from "../states";
import { AppError } from "../common";

const initialState = initializeBusinesses();
const reducer = createReducer(
  initialState,
  on(BUSINESSES.fetch,s => ({...s,loading:true})),
  on(BUSINESSES.fetchRecent,s => ({...s,loading:true})),
  on(BUSINESSES.create,s => ({...s,loading:true})),
  on(BUSINESSES.update,s => ({...s,loading:true})),
  on(BUSINESSES.load,(s,{payload:items}) => ({
    ...s,
    items,
    ids:items.map(o => o.name),
    loading:false,
    error:null})),
  on(BUSINESSES.loadOne,(s,{payload:item}) => {
    if(s.ids && s.ids.indexOf(item.name) == -1){
      return {
        ...s,
        items:[...s.items||[],item],
        ids:[...s.ids,item.name],
        loading:false,
        error:null,
      };
    }
    else {
      const index = s.items.findIndex(o => o.name == item.name);
      const items = s.items.map((o,i) => i == index?item:o);
      return {...s,items,loading:false,error:null};
    }
  }),
  on(BUSINESSES.unloadOne,(s,{payload:id}) => {
    const items = s.items.filter(o => o.name !== id);
    const ids = s.ids.filter(o => o !== id);
    return {...s,items,ids,loading:false,error:null};}),
  on(BUSINESSES.select,(s,{payload:id}) => {
    const i = s.ids.findIndex(o => o == id);
    const selected = {id:s.ids[i],i,item:s.items[i]};
    return {...s,selected,error:null};
  }),
  on(BUSINESSES.deselect,(s) => ({ ...s,selected:null})),
  on(BUSINESSES.error,(s,{payload:error}) => ({ ...s,error:formetError(error),loading:false})),
);

export function BusinessesReducer(s:BusinessesState|undefined,action:Action) {return reducer(s,action);}
const formetError = (e:Error|AppError) => e instanceof AppError?e.json():e;