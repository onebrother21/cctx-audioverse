import { Action, createReducer, on } from '@ngrx/store';
import { HCLLessonsActions as Lessons } from '../actions';
import { HCLLessonsState,initializeHCLLessons} from '../states';

const initialState = initializeHCLLessons();
const reducer = createReducer(
  initialState,
  on(Lessons.fetch,s => ({...s,loading:true})),
  on(Lessons.load,(s,{lessons:items}) => ({
    ...s,
    items,
    ids:items.map(o => o.id),
    error:null})),
  on(Lessons.loadOne,(s,{lesson}) => !s.ids.indexOf(lesson.id)?
    {
      ...s,
      items:[...s.items,lesson],
      ids:[...s.ids,lesson.id],
      error:null,
    }:(() => {
      const index = s.items.findIndex(o => o.id == lesson.id);
      const items = s.items.map((o,i) => i == index?lesson:o);
      return {...s,items,error:null};})()),
  on(Lessons.unloadOne,(s,{id}) => {
    const items = s.items.filter(o => o.id !== id);
    const index = s.ids.findIndex(o => o == id);
    const ids = s.ids.filter(o => o !== id);
    return {...s,items,ids,error:null};}),
  on(Lessons.select,(s,{id}) => {
    const i = s.ids.findIndex(o => o == id);
    const selected = {id:s.ids[i],i,item:s.items[i]};
    return {...s,selected,error:null};}),
  on(Lessons.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function HCLLessonsReducer(s:HCLLessonsState|undefined,action:Action){
  return reducer(s,action);}