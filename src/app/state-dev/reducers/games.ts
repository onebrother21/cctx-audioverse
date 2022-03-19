import { Action, createReducer, on } from '@ngrx/store';
import { HCLGamesActions as Games } from '../actions';
import {HCLGamesState,initializeHCLGames} from '../states';

const initialState = initializeHCLGames();
const reducer = createReducer(
  initialState,
  on(Games.fetch,s => ({...s,loading:true})),
  on(Games.load,(s,{games:items}) => ({
    ...s,
    items,
    ids:items.map(o => o.id),
    error:null})),
  on(Games.loadOne,(s,{game}) => !s.ids.indexOf(game.id)?
    {
      ...s,
      items:[...s.items,game],
      ids:[...s.ids,game.id],
      error:null,
    }:(() => {
      const index = s.items.findIndex(o => o.id == game.id);
      const items = s.items.map((o,i) => i == index?game:o);
      return {...s,items,error:null};})()),
  on(Games.unloadOne,(s,{id}) => {
    const items = s.items.filter(o => o.id !== id);
    const index = s.ids.findIndex(o => o == id);
    const ids = s.ids.filter(o => o !== id);
    return {...s,items,ids,error:null};}),
  on(Games.select,(s,{id}) => {
    const i = s.ids.findIndex(o => o == id);
    const selected = {id:s.ids[i],i,item:s.items[i]};
    return {...s,selected,error:null};}),
  on(Games.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function HCLGamesReducer(s:HCLGamesState|undefined,action:Action){
  return reducer(s,action);}