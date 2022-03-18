import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { AppState } from "../states";

export const REDUCERS = {router:routerReducer} as ActionReducerMap<AppState>;