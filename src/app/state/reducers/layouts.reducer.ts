import { Action, createReducer, on } from "@ngrx/store";
import { LayoutsActions as LAYOUT } from "../actions";
import {LayoutsState,initializeLayouts} from "../states";
import { AppError } from "../common";

const initialState = initializeLayouts();
const reducer = createReducer(
  initialState,
  on(LAYOUT.fetch,s => ({...s,loading:true})),
  on(LAYOUT.fetchLatest,s => ({...s,loading:true})),
  on(LAYOUT.load,(s,{payload:items}) => ({
    ...s,
    items,
    ids:items.map(o => o.id),
    loading:false,
    error:null})),
  on(LAYOUT.loadOne,(s,{payload:item}) => {
    if(s.ids && s.ids.indexOf(item.id) == -1){
      return {
        ...s,
        items:[...s.items||[],item],
        ids:[...s.ids,item.id],
        loading:false,
        error:null,
      };
    }
    else {
      const index = s.items.findIndex(o => o.id == item.id);
      const items = s.items.map((o,i) => i == index?item:o);
      return {...s,items,loading:false,error:null};
    }
  }),
  on(LAYOUT.select,(s,{payload:id}) => {
    const i = s.ids.findIndex(o => o == id);
    const selected = {id,i,item:s.items[i]};
    return {...s,selected,error:null};
  }),
  on(LAYOUT.error,(s,{payload:error}) => ({ ...s,error:formetError(error),loading:false})),
  on(LAYOUT.toggleNav,(s,{payload:isOpen}) => {
    const {selected} = s;
    const {item} = selected || {};
    const {nav} = item || {};
    const open = typeof isOpen == "boolean"?isOpen:!(nav||{}).open;
    return {
      ...s,loading:false,error:null,selected:{
        ...selected,item:{
          ...item,nav:{
            ...nav,open
          }
        }
      }
    } as LayoutsState;
  }),
  on(LAYOUT.error,(s,{payload:error}) => ({ ...s,error:formetError(error),loading:false})),
);

export function LayoutsReducer(s:LayoutsState|undefined,action:Action) {return reducer(s,action);}
const formetError = (e:Error|AppError) => e instanceof AppError?e.json():e;