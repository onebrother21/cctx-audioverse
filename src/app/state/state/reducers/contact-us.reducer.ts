import { Action, createReducer, on } from "@ngrx/store";
import { QS_ContactUsActions as CONTACTUS } from "../actions";
import { QS_ContactUsState,initializeContactUs } from "../states";

const initialState = initializeContactUs();
const reducer = createReducer(
  initialState,
  on(CONTACTUS.fetch,s => ({...s,loading:true})),
  on(CONTACTUS.load,(s,{payload:msgs}) => ({...s,items:msgs,loading:false})),
  on(CONTACTUS.loadOne,(s,{payload:msg}) => ({ ...s,selected:{i:0,item:msg,id:msg.id}})),
  on(CONTACTUS.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function QS_ContactUsReducer(s:QS_ContactUsState|undefined,action:Action) {return reducer(s,action);}