import { Action, createReducer, on } from "@ngrx/store";
import { QS_LayoutActions as LAYOUT } from "../actions";
import {QS_LayoutState,initializeLayout} from "../states";

const initialState = initializeLayout();
const reducer = createReducer(
  initialState,
  on(LAYOUT.fetch,s => ({...s,loading:true})),
  on(LAYOUT.load,(s,{payload:layout}) => ({...s,...layout,loading:false})),
  on(LAYOUT.toggleMobileNav,(s,{payload:open}) => ({ ...s,mobileNav:{...s.mobileNav,open:toggleMobileNav(s,open)}})),
  on(LAYOUT.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function QS_LayoutReducer(s:QS_LayoutState|undefined,action:Action) {return reducer(s,action);}
export const toggleMobileNav = (s:QS_LayoutState,o?:boolean) => o !== undefined && o !== null?o:!s.mobileNav.open;