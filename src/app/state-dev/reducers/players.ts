import { Action, createReducer, on } from '@ngrx/store';
import { HCLPlayersActions as Players } from '../actions';
import { HCLPlayersState,initializeHCLPlayers} from '../states';

const initialState = initializeHCLPlayers();
const reducer = createReducer(
  initialState,
  on(Players.fetch,s => ({...s,loading:true})),
  on(Players.load,(s,{players:items}) => ({...s,items,error:null})),
  on(Players.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function HCLPlayersReducer(s:HCLPlayersState|undefined,action:Action){
  return reducer(s,action);}