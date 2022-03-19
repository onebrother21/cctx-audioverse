import { Action, createReducer, on } from '@ngrx/store';
import { HCLContentActions as Content } from '../actions';
import { HCLContentState,initializeContent} from '../states';

const initialState = initializeContent();
const reducer = createReducer(
  initialState,
  on(Content.fetch,s => ({...s,loading:true})),
  on(Content.load,(s,{content}) => ({...s,...content,loading:false})),
  on(Content.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function HCLContentReducer(s:HCLContentState|undefined,action:Action) {return reducer(s,action);}