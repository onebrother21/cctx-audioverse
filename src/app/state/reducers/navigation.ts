import { Action, createReducer, on } from '@ngrx/store';
import { NavigationActions as Navigation } from '../actions';
import { NavigationState,initializeNavigation } from '../states';
import { Entity } from '../models';

const initialState = initializeNavigation();
const reducer = createReducer(
  initialState,  
  on(Navigation.setRequested,(s,{route}) => ({ ...s,requested:route})),
  on(Navigation.updateHistory,(s,{route}) => {
    const history = [...s.history,{...route,...new Entity({})}];
    return { ...s,history,error:null};}),
  on(Navigation.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function NavigationReducer(s:NavigationState|undefined,action:Action) {return reducer(s,action);}