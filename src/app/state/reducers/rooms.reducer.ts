import { Action, createReducer, on } from "@ngrx/store";
import { RoomsActions as ROOMS } from "../actions";
import { Room } from '../models';
import { RoomsState,initializeRooms } from "../states";

const initialState = initializeRooms();
const reducer = createReducer(
  initialState,
  on(ROOMS.fetch,s => ({...s,loading:true})),
  on(ROOMS.load,(s,{payload:rooms}) => ({...s,items:rooms,loading:false})),
  on(ROOMS.loadMore,(s,{payload:rooms}) => ({...s,items:[...(s.items||[]),...rooms],loading:false})),
  on(ROOMS.select,(s,{payload:room}) => ({ ...s,selected:{item:room,id:room.id,i:getIndex(s.items as Room[],room)}})),
  on(ROOMS.deselect,(s) => ({ ...s,selected:null})),
  on(ROOMS.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function RoomsReducer(s:RoomsState|undefined,action:Action) {return reducer(s,action);}
const getIndex = <T extends Room>(a:T[],o:T) => a?a.findIndex(_a => o.id == _a.id):-1;