import { Action, createReducer, on } from "@ngrx/store";
import { QS_ChatMessagesActions as CHAT } from "../actions";
import { QS_ChatMessagesState,initializeChatMessages } from "../states";

const initialState = initializeChatMessages();
const reducer = createReducer(
  initialState,
  on(CHAT.fetch,s => ({...s,loading:true})),
  on(CHAT.load,(s,{payload:msgs}) => ({...s,items:msgs,loading:false})),
  on(CHAT.loadOne,(s,{payload:msg}) => ({ ...s,selected:{i:0,item:msg,id:msg.id}})),
  on(CHAT.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function QS_ChatMessagesReducer(s:QS_ChatMessagesState|undefined,action:Action) {return reducer(s,action);}