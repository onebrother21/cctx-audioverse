import { Action, createReducer, on } from '@ngrx/store';
import { HCLInvitesActions as Invites } from '../actions';
import { HCLInvitesState,initializeHCLInvites} from '../states';

const initialState = initializeHCLInvites();
const reducer = createReducer(
  initialState,
  on(Invites.fetch,s => ({...s,loading:true})),
  on(Invites.load,(s,{invites:items}) => ({
    ...s,
    items,
    ids:items.map(o => o.id),
    error:null})),
  on(Invites.loadOne,(s,{invite}) => s.ids.indexOf(invite.id) < 0?
    {
      ...s,
      items:[...s.items,invite],
      ids:[...s.ids,invite.id],
      error:null,
    }:(() => {
      const index = s.items.findIndex(o => o.id == invite.id);
      const items = s.items.map((o,i) => i == index?invite:o);
      return {...s,items,error:null};})()),
  on(Invites.unloadOne,(s,{id}) => {
    const items = s.items.filter(o => o.id !== id);
    const index = s.ids.findIndex(o => o == id);
    const ids = s.ids.filter(o => o !== id);
    return {...s,items,ids,error:null};}),
  on(Invites.select,(s,{id}) => {
    const i = s.ids.findIndex(o => o == id);
    const selected = {id:s.ids[i],i,item:s.items[i]};
    return {...s,selected,error:null};}),
  on(Invites.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function HCLInvitesReducer(s:HCLInvitesState|undefined,action:Action){
  return reducer(s,action);}