import { Action, createReducer, on } from '@ngrx/store';
import { HCLPostsActions as HCLPosts } from '../actions';
import {HCLPostsState,initializeHCLPosts} from '../states';

const initialState = initializeHCLPosts();
const reducer = createReducer(
  initialState,
  on(HCLPosts.fetch,s => ({...s,loading:true})),
  on(HCLPosts.fetchRecent,s => ({...s,loading:true})),
  on(HCLPosts.load,(s,{posts:items}) => ({
    ...s,
    items,
    ids:items.map(o => o.id),
    slugs:items.map(o => o.slug),
    error:null})),
  on(HCLPosts.loadOne,(s,{post}) => !s.ids.indexOf(post.id)?
    {
      ...s,
      items:[...s.items,post],
      ids:[...s.ids,post.id],
      slugs:[...s.slugs,post.slug],
      error:null,
    }:(() => {
      const index = s.items.findIndex(o => o.id == post.id);
      const items = s.items.map((o,i) => i == index?post:o);
      return {...s,items,error:null};})()),
  on(HCLPosts.unloadOne,(s,{id}) => {
    const items = s.items.filter(o => o.id !== id);
    const index = s.ids.findIndex(o => o == id);
    const ids = s.ids.filter(o => o !== id);
    const slugs = s.slugs.filter((o,i) => i !== index);
    return {...s,items,ids,slugs,error:null};}),
  on(HCLPosts.select,(s,{slug}) => {
    const i = s.slugs.findIndex(o => o == slug);
    const selected = {id:s.ids[i],i,item:s.items[i]};
    return {...s,selected,error:null};}),
  on(HCLPosts.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function HCLPostsReducer(s:HCLPostsState|undefined,action:Action) {return reducer(s,action);}