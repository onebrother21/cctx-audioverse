import { Action, createReducer, on } from "@ngrx/store";
import { NavigationActions as NAV } from "../actions";
import { NavigationState,initializeNavigation } from "../states";
import { AppEntity, AppError } from "../common";
import { routerNavigatedAction,routerNavigationAction, ROUTER_REQUEST } from "@ngrx/router-store";

const initialState = initializeNavigation();
const reducer = createReducer(
  initialState,  
  on(routerNavigatedAction,(s,{payload:{routerState:route}}) => ({ ...s,requested:route})),
  on(routerNavigationAction,(s,{payload:{routerState:route}}) => {
    const history = [...s.history,new AppEntity(route)] as typeof s.history;
    return {...s,history,requested:undefined,loading:false,error:null};
  }),
  on(NAV.error,(s,{payload:error}) => ({ ...s,error:formetError(error),loading:false})),
);

export function NavigationReducer(s:NavigationState|undefined,action:Action) {return reducer(s,action);}
const formetError = (e:Error|AppError) => e instanceof AppError?e.json():e;