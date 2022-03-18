import { Action, createReducer, on } from "@ngrx/store";
import { AppEntity,AppRoute } from "@state";
import { NavigationActions as NAV } from "../actions";
import { NavigationState,initializeNavigation } from "../states";

const initialState = initializeNavigation();
const reducer = createReducer(
  initialState,  
  on(NAV.set,(s,{payload:route}) => ({ ...s,requested:route})),
  on(NAV.update,(s,{payload:{route,page}}) => {
    const entity:AppEntity & AppRoute = {...route,...new AppEntity({})};
    const history = [...s.history||[],entity];
    return {...s,history,requested:undefined,page,error:null};}),
  on(NAV.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function NavigationReducer(s:NavigationState|undefined,action:Action) {return reducer(s,action);}