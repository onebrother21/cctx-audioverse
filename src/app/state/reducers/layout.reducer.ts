import { Action, createReducer, on } from "@ngrx/store";
import { LayoutActions as LAYOUT } from "../actions";
import {LayoutState,initializeLayout} from "../states";
import { AppError } from "../common";

const initialState = initializeLayout();
const reducer = createReducer(
  initialState,
  on(LAYOUT.fetch,s => ({...s,loading:true})),
  on(LAYOUT.load,(s,{payload:content}) => ({...s,content,loading:false})),
  on(LAYOUT.toggleNav,(s,{payload:open}) => ({ ...s,nav:{...s.nav,open:toggleNav(s,open)}})),
  on(LAYOUT.error,(s,{payload:error}) => ({ ...s,error:formetError(error),loading:false})),
);

export function LayoutReducer(s:LayoutState|undefined,action:Action) {return reducer(s,action);}
const formetError = (e:Error|AppError) => e instanceof AppError?e.json():e;
export const toggleNav = (s:LayoutState,o?:boolean) => o !== undefined && o !== null?o:!s.nav.open;