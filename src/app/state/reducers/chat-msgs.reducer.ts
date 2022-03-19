import { Action, createReducer, on } from "@ngrx/store";
import { ChatMessagesActions as CHAT } from "../actions";
import { ChatMessagesState,initializeChatMessages } from "../states";

const initialState = initializeChatMessages();
const reducer = createReducer(
  initialState,
  on(CHAT.fetch,s => ({...s,loading:true})),
  on(CHAT.fetchRecent,s => ({...s,loading:true})),
  on(CHAT.send,s => ({...s,loading:true})),
  on(CHAT.load,(s,{payload:items}) => ({
    ...s,
    items,
    ids:items.map(o => o.id),
    loading:false,
    error:null})),
  on(CHAT.loadOne,(s,{payload:item}) => s.ids && !s.ids.indexOf(item.id)?
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
  on(CHAT.unloadOne,(s,{payload:id}) => {
    const items = s.items.filter(o => o.id !== id);
    const ids = s.ids.filter(o => o !== id);
    return {...s,items,ids,loading:false,error:null};}),
  on(CHAT.select,(s,{payload:id}) => {
    const i = s.ids.findIndex(o => o == id);
    const selected = {id:s.ids[i],i,item:s.items[i]};
    return {...s,selected,error:null};
  }),
  on(CHAT.deselect,(s) => ({ ...s,selected:null})),
  on(CHAT.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function ChatMessagesReducer(s:ChatMessagesState|undefined,action:Action) {return reducer(s,action);}