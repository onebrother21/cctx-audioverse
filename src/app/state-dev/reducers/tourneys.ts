import { Action, createReducer, on } from '@ngrx/store';
import { HCLTourneysActions as HCLTourneys } from '../actions';
import {HCLTourneysState,initializeHCLTourneys} from '../states';

const initialState = initializeHCLTourneys();
const reducer = createReducer(
  initialState,
  on(HCLTourneys.fetch,s => ({...s,loading:true})),
  on(HCLTourneys.load,(s,{tourneys:items}) => ({
    ...s,
    items,
    ids:items.map(o => o.id),
    slugs:items.map(o => o.slug),
    error:null})),
  on(HCLTourneys.loadOne,(s,{tourney}) => !s.ids.indexOf(tourney.id)?
    {
      ...s,
      items:[...s.items,tourney],
      ids:[...s.ids,tourney.id],
      slugs:[...s.slugs,tourney.slug],
      error:null,
    }:(() => {
      const index = s.items.findIndex(o => o.id == tourney.id);
      const items = s.items.map((o,i) => i == index?tourney:o);
      return {...s,items,error:null};})()),
  on(HCLTourneys.unloadOne,(s,{id}) => {
    const items = s.items.filter(o => o.id !== id);
    const index = s.ids.findIndex(o => o == id);
    const ids = s.ids.filter(o => o !== id);
    const slugs = s.slugs.filter((o,i) => i !== index);
    return {...s,items,ids,slugs,error:null};}),
  on(HCLTourneys.select,(s,{slug}) => {
    const i = s.slugs.findIndex(o => o == slug);
    const selected = {id:s.ids[i],i,item:s.items[i]};
    return {...s,selected,error:null};}),
  on(HCLTourneys.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function HCLTourneysReducer(s:HCLTourneysState|undefined,action:Action) {return reducer(s,action);}