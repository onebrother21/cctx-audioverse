import { Action, createReducer, on } from '@ngrx/store';
import { AlertsActions as Alerts } from '../actions';
import { AlertsState,initializeAlerts } from '../__state/states';

const initialState = initializeAlerts();
const reducer = createReducer(
  initialState,
  on(Alerts.send,s => ({...s,loading:true})),
  on(Alerts.load,(s,{alert}) => ({
    ...s,
    alert,
    keepAfterNav:alert.important,
    history:[...s.history,alert],
    loading:false,
    error:null})),
  on(Alerts.confirm,(s,{confirm}) => {
    const alert = {...s.alert,confirmed:new Date()};
    const history = [...s.history];
    history[s.history.length - 1] = alert;
    return {
      ...s,
      history,
      alert:null,
      keepAfterNav:false,
      loading:false,
      error:null};}),
  on(Alerts.clear,s => ({ ...s,alert:null,keepAfterNav:false,error:null})),
  on(Alerts.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function AlertsReducer(s:AlertsState|undefined,action:Action) {return reducer(s,action);}