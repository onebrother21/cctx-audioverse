import { Action, createReducer, on } from '@ngrx/store';
import { SearchActions as Search } from '../actions';
import {SearchState,initializeSearch} from '../states';

const initialState = initializeSearch();
const reducer = createReducer(
  initialState,
  on(Search.query,(s,{query}) => ({...s,query,loading:true})),
  on(Search.load,(s,{results}) => ({...s,results,loading:false})),
  on(Search.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function SearchReducer(s:SearchState|undefined,action:Action) {return reducer(s,action);}